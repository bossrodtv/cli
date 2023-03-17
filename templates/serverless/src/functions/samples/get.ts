import middy from '@middy/core';
import { sampleService } from 'modules/samples/service';
import { idSampleSchema } from 'modules/samples/validations';
import { type APIGatewayEventType } from 'shared/types/http';
import { makeAPIResponse } from 'shared/utils/http';

/**
 * @openapi
 * /samples/{id}:
 *   get:
 *     description: Get a sample by {id}.
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
 *         description: A single sample.
 */

export const getSample = middy(async (event: APIGatewayEventType) => {
  const validated = idSampleSchema.safeParse(event.pathParameters);

  if (!validated.success)
    return makeAPIResponse({ type: 'BadRequest', error: { errors: validated.error } });

  const records = await sampleService.get(validated.data.id);

  return makeAPIResponse({ type: 'Success', data: { records } });
});
