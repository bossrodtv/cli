import middy from '@middy/core';
import { sampleService } from 'modules/samples/service';
import { idSampleSchema } from 'modules/samples/validations';
import { type APIGatewayEventType } from 'shared/types/http';
import { makeAPIResponse } from 'shared/utils/http';

/**
 * @openapi
 * /samples/{id}/archive:
 *   delete:
 *     description: Archive a sample by {id}.
 *     tags:
 *       - Samples
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Sample archived.
 */

export const archiveSample = middy(async (event: APIGatewayEventType) => {
  const validated = idSampleSchema.safeParse(event.pathParameters);

  if (!validated.success)
    return makeAPIResponse({ type: 'BadRequest', error: { errors: validated.error } });

  const records = await sampleService.archive([validated.data.id]);

  return makeAPIResponse({ type: 'Archived', data: { records } });
});
