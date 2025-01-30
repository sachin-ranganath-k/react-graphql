import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query getUsers {
    users @rest(type: "Users", path: "users") {
      name
      email
    }
  }
`;
function App() {
  const { data, loading } = useQuery(GET_USERS);
  console.log(data);
  return (
    <>
      {loading && <p>Loading.....!</p>}
      {data &&
        data?.users?.map((user) => {
          return <p>{user?.name}</p>;
        })}
    </>
  );
}

export default App;
