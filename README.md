## `next-apollo-defer-example`

This is a demo app based on the Next.js example app [with-apollo](https://github.com/vercel/next.js/tree/canary/examples/with-apollo) that demonstrates a Next.js app with Apollo Client web 3.7 beta and [apollographql/router@v1.0.0-alpha.3](https://github.com/apollographql/router/releases/tag/v1.0.0-alpha.3).

### Running the router + supergraph locally
1. Clone [`prasek/supergraph-demo-fed2` branch `pr-router-1711`](https://github.com/prasek/supergraph-demo-fed2/tree/pr-router-1711)
1. Ensure you have [`cargo` installed](https://doc.rust-lang.org/cargo/getting-started/installation.html)
1. Run `make run-router-main`
1. If the output from that command ends in `make: *** [up-router-main] Killed: 9`, run `rm -rf router/custom-main/localhost && git checkout router/custom-main/localhost`
1. Try running `make run-router-main` again and you should hopefully see `apollo_router::axum_http_server_factory: GraphQL endpoint exposed at http://0.0.0.0:4000/ 🚀` 🎉

### Running this demo app
1. Clone [this repo](https://github.com/alessbell/next-apollo-defer-example) and run `npm i`
1. In VSCode, from the Run & Debug menu select "Next.js: debug full stack"
1. You can now set breakpoints via your IDE in server- and client-side code and visit http://localhost:3000 to view the app 🐙