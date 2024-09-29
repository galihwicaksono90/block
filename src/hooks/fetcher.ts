import type { DocumentNode } from "graphql";
import client from "@/graphqlClient";

function fetcher<TData, TVariables extends { [key: string]: any }>(
    query: DocumentNode,
    variables?: TVariables,
    requestHeaders?: RequestInit["headers"]
) {
    return async (): Promise<TData> =>
        client.request({
            document: query,
            variables,
            requestHeaders,
        });
}

export default fetcher;
