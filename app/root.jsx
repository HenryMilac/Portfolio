const { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } = require("@remix-run/react");

import styles from '~/styles/index.css'
import Index from "./routes";


export function meta(){
  return(
    {
      charset: "utf-8",
      title: "Henry Ramirez",
      viewport: "width=device-width,initial-scale=1",
    }
  )
}
export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function App() {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Index/>


        {/* <Outlet /> */}
        {/* <ScrollRestoration /> */}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
