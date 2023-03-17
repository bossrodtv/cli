import middy from '@middy/core';
import { sampleService } from 'modules/samples/service';
import { updateSampleSchema } from 'modules/samples/validations';
import { type APIGatewayEventType } from 'shared/types/http';
import { makeAPIResponse } from 'shared/utils/http';

/**
 * @openapi
 * /samples/{id}:
 *   put:
 *     description: Update a sample by {id}.
 *     tags:
 *       - Samples
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the sample.
 *                 default: string (optional)
 *               description:
 *                 type: string
 *                 description: Description of the sample.
 *                 default: string (optional)
 *     responses:
 *       200:
 *         description: Sample updated.
 */

export const updateSample = middy(
  async (event: APIGatewayEventType<{ body: Record<string, unknown> }>) => {
    const validated = updateSampleSchema.safeParse({
      ...event.pathParameters,
      ...event.body,
    });

    if (!validated.success)
      return makeAPIResponse({ type: 'BadRequest', error: { errors: validated.error } });

    const { id, ...values } = validated.data;

    const records = await sampleService.update(id, values);

    return makeAPIResponse({ type: 'Updated', data: { records } });
  }
);
