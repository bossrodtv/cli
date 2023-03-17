import { version } from 'package.json';
import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sample API',
      version,
    },
  },
  apis: ['src/functions/**/*.ts', 'src/modules/swagger/**/*.ts'],
};

/**
 * @openapi
 * components:
 *   schemas:
 *     Common:
 *       type: object
 *       description: Shared schema on all entities
 *       properties:
 *         id:
 *         type: string
 *         required: true
 *         description: ID of a record
 *         format: uuid
 */

export const openApiSchema = swaggerJsdoc(options);
