import { useQuery, type UseQueryOptions } from "@tanstack/vue-query";
import { graphql } from "@/gql";
import type { MeQuery, MeQueryVariables } from "@/gql/graphql";
import { MeDocument } from "@/gql/graphql";
import fetcher from "./fetcher";

graphql(`
  query Me {
    me {
      fullName
      email
    }
  }
`);

export const useMeQuery = <TData = MeQuery, TError = unknown>(
  variables: MeQueryVariables,
  options?: UseQueryOptions<MeQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<MeQuery, TError, TData>(
    ["GetUserByEmail", variables],
    fetcher<MeQuery, MeQueryVariables>(MeDocument, variables, headers),
    options
  );
