import { gql, useQuery } from "@apollo/client";
import App from "../components/App";
import { initializeApollo, addApolloState } from "../lib/apolloClient";

const srcTrailFragment = gql`
  fragment srcTrailFragment on Trail {
    name
    status
    difficulty
  }
`;

const AllTrailsQuery = gql`
  query srcAllTrailsQuery {
    allTrails {
      id
      ...srcTrailFragment
    }
  }
  ${srcTrailFragment}
`;

const SSRPage = () => {
  // The data is already in the cache on initial load:
  // no network request is made in the browser, but we use useQuery to retrieve
  // the data for `AllTrailsQuery`—already fetched in getServerSideProps—
  // from the cache.
  const { data } = useQuery(AllTrailsQuery);
  return (
    <App>
      {data.allTrails.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </App>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllTrailsQuery,
  });
  return addApolloState(apolloClient, {
    props: {},
  });
}

export default SSRPage;
