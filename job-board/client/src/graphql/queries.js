import { GraphqlClient, gql } from "graphql-request";

const client = new GraphqlClient("http://localhost:8088/graphql/");
export async function getJobs() {
  const query = gql`
    query {
      jobs {
        id
        title
        company {
          id
          name
        }
      }
    }
  `;

  const data = await client.request(query);
  return data.jobs;
}
