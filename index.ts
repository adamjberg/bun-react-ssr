// index.ts
import React from "react";
import ReactDOMServer from "react-dom/server";
import { MyComponent } from "./MyComponent";

Bun.serve({
  fetch(req) {
    const jsx = React.createElement(MyComponent);
    const html = ReactDOMServer.renderToString(jsx);

    return new Response(
      `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Server-Side Rendering with React + Bun</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
  `,
      {
        headers: {
          "Content-Type": "text/html",
        },
      }
    );
  },
  port: process.env.PORT || 3000,
});
