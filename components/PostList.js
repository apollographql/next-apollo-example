import { gql, useQuery, NetworkStatus } from '@apollo/client'
import ErrorMessage from './ErrorMessage'
// import PostUpvoter from './PostUpvoter'

export const ALL_USERS_QUERY = gql`
  query allUsers($first: Int!, $skip: Int!) {
    allUsers(orderBy: { createdAt: desc }, first: $first, skip: $skip) {
      id
      firstName
      lastName
      createdAt
    }
  }
`;

const MY_FRAGMENT = gql`
  fragment MyFragment on Product {
    variation {
      name
      id
    }
  }
`;

export const DEFERRED_QUERY = gql`
  query deferVariation {
    allProducts {
      sku
      id
      ...MyFragment @defer
    }
  }
  ${MY_FRAGMENT}
`;

export const allUsersQueryVars = {
  skip: 0,
  first: 10,
}

export default function PostList() {
  const { loading, error, data, networkStatus } = useQuery(
    DEFERRED_QUERY,
    {
      // variables: allUsersQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  )
  console.log(JSON.stringify(data, null, 2));

  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore

  // const loadMorePosts = () => {
  //   fetchMore({
  //     variables: {
  //       skip: data?.allUsers?.length,
  //     },
  //   })
  // }

  if (error) return <ErrorMessage message="Error loading posts." />
  if (loading && !loadingMorePosts) return <div>Loading</div>

  // const areMorePosts = allUsers.length < _allUsersMeta.count

  return (
    <section>
      <ul>
        {data?.allProducts?.map(({ sku, id, variation }, index) => (
          <li key={id}>
            <div>
              <span>{index + 1}. </span>
              <a href={id}>{sku}{' - '}{id}</a>
              <p>Variation: {variation?.name}{' - '}{variation?.id}</p>
              {/* <PostUpvoter id={user.id} votes={user.id} /> */}
            </div>
          </li>
        ))}
      </ul>
      {/* {areMorePosts && (
        <button onClick={() => loadMorePosts()} disabled={loadingMorePosts}>
          {loadingMorePosts ? 'Loading...' : 'Show More'}
        </button>
      )} */}
      <style jsx>{`
        section {
          padding-bottom: 20px;
        }
        li {
          display: block;
          margin-bottom: 10px;
        }
        div {
          align-items: center;
          display: flex;
        }
        a {
          font-size: 14px;
          margin-right: 10px;
          text-decoration: none;
          padding-bottom: 0;
          border: 0;
        }
        span {
          font-size: 14px;
          margin-right: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        button:before {
          align-self: center;
          border-style: solid;
          border-width: 6px 4px 0 4px;
          border-color: #ffffff transparent transparent transparent;
          content: '';
          height: 0;
          margin-right: 5px;
          width: 0;
        }
      `}</style>
    </section>
  )
}