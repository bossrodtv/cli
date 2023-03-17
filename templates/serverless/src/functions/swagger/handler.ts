import { type Handler } from 'aws-lambda';
import { openApiSchema } from 'modules/swagger/schema';

const handler: Handler = async event => {
  if (event.rawPath === '/swagger.json') {
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(openApiSchema),
    };
  }

  const body = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Service API</title>
        <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@3/swagger-ui.css">
    </head>
    <body>
        <div id="swagger"></div>
        <script src="https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"></script>
        <script>
          SwaggerUIBundle({
            dom_id: '#swagger',
            url: '/swagger.json'
        });
        </script>
    </body>
    </html>`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body,
  };
};

export const run = handler;
