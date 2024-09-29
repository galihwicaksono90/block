import { useMutation, type UseMutationOptions } from "@tanstack/vue-query";

import { graphql } from "@/gql";
import fetcher from "./fetcher";
import {
  LoginDocument,
  type LoginMutation,
  type LoginMutationVariables,
} from "@/gql/graphql";

graphql(`
  mutation Login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      user {
        fullName
      }
      token
    }
  }
`);

export const useLoginMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    LoginMutation,
    TError,
    LoginMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
    ["Login"],
    (variables?: LoginMutationVariables) =>
      fetcher<LoginMutation, LoginMutationVariables>(
        LoginDocument,
        variables,
        headers
      )(),
    options
  );
