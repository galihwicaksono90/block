/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation Login($password: String!, $email: String!) {\n    login(password: $password, email: $email) {\n      user {\n        fullName\n      }\n      token\n    }\n  }\n": types.LoginDocument,
    "\n  query Me {\n    me {\n      fullName\n      email\n    }\n  }\n": types.MeDocument,
    "\n  mutation Register($password: String!, $email: String!, $fullName: String!) {\n    register(\n      input: { password: $password, email: $email, fullName: $fullName }\n    ) {\n      fullName\n    }\n  }\n": types.RegisterDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($password: String!, $email: String!) {\n    login(password: $password, email: $email) {\n      user {\n        fullName\n      }\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation Login($password: String!, $email: String!) {\n    login(password: $password, email: $email) {\n      user {\n        fullName\n      }\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    me {\n      fullName\n      email\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      fullName\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Register($password: String!, $email: String!, $fullName: String!) {\n    register(\n      input: { password: $password, email: $email, fullName: $fullName }\n    ) {\n      fullName\n    }\n  }\n"): (typeof documents)["\n  mutation Register($password: String!, $email: String!, $fullName: String!) {\n    register(\n      input: { password: $password, email: $email, fullName: $fullName }\n    ) {\n      fullName\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;