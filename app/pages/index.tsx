import { gql, useQuery } from '@apollo/client';
import type { NextPage } from 'next'

const GET_PATTERNS = gql`
  query GetPattern($id: Int!) {
    pattern(id: $id) {
      id
      author {
        firstName
        lastName
        password
        username
        patterns {
          id
          createdAt
          highlightImageUrl
          homepageUrl
          numFavorites
          title
        }
      }
      authorId
      createdAt
      highlightImageUrl
      homepageUrl
      numFavorites
      title
    }
  }
`;

// const Home: NextPage = () => {
//   let {
//     loading, 
//     data,
//     error,
//   } = useQuery(GET_PATTERNS, {
//     variables: {
//       id: 1,
//     }
//   });

//   console.log('cowman')

//   if (loading) return <div>Loading</div>;

//   if (error) return <div>{JSON.stringify(error)}</div>;

//   return (
//     <div>{JSON.stringify(data)}</div>
//   );
// }

const Home: NextPage = () => {
  return (
    <div>moo</div>
  )
}

export default Home
