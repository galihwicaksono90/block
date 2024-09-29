import { GraphQLClient } from "graphql-request";

let token: string = "";

if (typeof window !== "undefined") {
    token = localStorage.getItem("token") || "";
}

const headers = {
    Authorization: `Bearer ${token}`,
};

const url = import.meta.env.VITE_GRAPHQL_ENDPOINT;
console.log({ url });
const endpoint = url || "http://localhost:5005/graphql";

const client = new GraphQLClient(endpoint, {
    headers,
});

export default client;
