import middy from '@middy/core';
import { sampleService } from 'modules/samples/service';
import { idSampleSchema } from 'modules/samples/validations';
import { type APIGatewayEventType } from 'shared/types/http';
import { makeAPIResponse } from 'shared/utils/http';

/**
 * @openapi
 * /samples/{id}:
 *   delete:
 *     description: Delete a sample by {id}.
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
 *         description: Sample deleted.
 */

export const deleteSample = middy(async (event: APIGatewayEventType) => {
  const validated = idSampleSchema.safeParse(event.pathParameters);

  if (!validated.success)
    return makeAPIResponse({ type: 'BadRequest', error: { errors: validated.error } });

  const records = await sampleService.delete([validated.data.id]);

  return makeAPIResponse({ type: 'Deleted', data: { records } });
});
