import { serverMedusaClient } from '#medusa/server'

export default eventHandler(async (event) => {
  const client = serverMedusaClient(event)

  const { customer } = await client.auth.getSession({
    Cookie: event.node.req.headers.cookie,
  });

  return customer
})
