## `next-apollo-defer-example`

This is a demo app based on the Next.js example app [with-apollo](https://github.com/vercel/next.js/tree/canary/examples/with-apollo) that demonstrates a Next.js app with Apollo Client web 3.7 beta and .

### Building the AC web beta with `@defer` locally
1. Clone the [`apollo-client` repo](https://github.com/apollographql/apollo-client) and checkout branch [`issue-8184-defer-support`](https://github.com/apollographql/apollo-client/pull/10018)
1. Run `npm i && npm run build && cd dist && npm pack`

### Running the router locally
1. Clone [`prasek/supergraph-demo-fed2` branch `pr-router-1711`](https://github.com/prasek/supergraph-demo-fed2/tree/pr-router-1711)
2. Ensure you have [`cargo` installed](https://doc.rust-lang.org/cargo/getting-started/installation.html)
3. Run `make run-router-main`
4. If the output from that command ends in `make: *** [up-router-main] Killed: 9`, run `rm -rf router/custom-main/localhost && git checkout router/custom-main/localhost`
5. Try running `make run-router-main` again and you should hopefully see `apollo_router::axum_http_server_factory: GraphQL endpoint exposed at http://0.0.0.0:4000/ 🚀` 🎉

### Running this demo app
1. Clone [this repo](https://github.com/alessbell/next-apollo-defer-example) in the same directory where `apollo-client` was cloned
1. Run `npm i && npm i ../apollo-client/dist/apollo-client-3.7.0-beta.6.tgz`
1. In VSCode, from the Run & Debug menu select "Next.js: debug full stack"
1. You can now set breakpoints via your IDE in server- and client-side code 🐙