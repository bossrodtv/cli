import middy from '@middy/core';
import { sampleService } from 'modules/samples/service';
import { makeAPIResponse } from 'shared/utils/http';

/**
 * @openapi
 * /samples:
 *   get:
 *     description: Get list of samples.
 *     tags:
 *       - Samples
 *     responses:
 *       200:
 *         description: List of samples.
 */

export const listOfSamples = middy(async () => {
  const { records, totalRecords } = await sampleService.list();

  return makeAPIResponse({
    type: 'Success',
    data: { records, totalRecords },
  });
});
