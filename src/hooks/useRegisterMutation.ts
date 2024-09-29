import { useMutation, type UseMutationOptions } from "@tanstack/vue-query";
import { graphql } from "@/gql";
import {
  RegisterDocument,
  type RegisterMutation,
  type RegisterMutationVariables,
} from "@/gql/graphql";
import fetcher from "./fetcher";

graphql(`
  mutation Register($password: String!, $email: String!, $fullName: String!) {
    register(
      input: { password: $password, email: $email, fullName: $fullName }
    ) {
      fullName
    }
  }
`);

export const useRegisterMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    RegisterMutation,
    TError,
    RegisterMutationVariables,
    TContext
  >,
  headers?: RequestInit["headers"]
) =>
  useMutation<RegisterMutation, TError, RegisterMutationVariables, TContext>(
    ["Login"],
    (variables?: RegisterMutationVariables) =>
      fetcher<RegisterMutation, RegisterMutationVariables>(
        RegisterDocument,
        variables,
        headers
      )(),
    options
  );
