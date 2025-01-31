import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const GET_USERS = gql`
  query getUsers {
    users @rest(type: "Users", path: "users", method: "GET") {
      name
      email
    }
  }
`;

const GET_POSTS = gql`
  query getPosts {
    posts @rest(type: "Posts", path: "posts?_limit=10", method: "GET") {
      title
    }
  }
`;

const ADD_POST = gql`
  mutation addPost($title: String!) {
    addPost(input: { title: $title })
      @rest(type: "Post", path: "posts", method: "POST") {
      id
      title
    }
  }
`;
function App() {
  const { data, loading } = useQuery(GET_USERS);
  const {
    data: postsData,
    loading: loadPosts,
  } = useQuery(GET_POSTS);
  const [title, setTitle] = useState("");
  const [addPost] = useMutation(ADD_POST);

  const handleAdd = async () => {
    try {
      await addPost({ variables: { title } });
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
  return (
    <>
      <h1>Users</h1>
      {loading && <p>Loading.....!</p>}
      {data &&
        data?.users?.map((user) => {
          return <p key={user?.id}>{user?.name}</p>;
        })}
      <h1>Add Post</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="button" value="Add Post" onClick={handleAdd} />
      </form>
      <h2>Posts</h2>
      {loadPosts && <p>Loading.....!</p>}
      {data &&
        postsData?.posts?.map((post) => {
          return <p key={post?.id}>{post?.title}</p>;
        })}
    </>
  );
}

export default App;
