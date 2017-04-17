import { renderToString } from 'react-dom/server';

export default (component) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>React Materialize</title>
    <link rel='stylesheet' href='/style.css' />
  </head>
  <body>
    <div id="app">${renderToString(component)}</div>
    <script src="/bundle.js"></script>
  </body>
</html>`;

