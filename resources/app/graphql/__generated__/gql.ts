/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateLibrary($name: String!, $type: LibraryType!, $path: String!, $order: Int!) {\n    createLibrary(name: $name, type: $type, path: $path, order: $order) {\n      id\n      name\n      type\n      path\n      order\n    }\n  }\n": types.CreateLibraryDocument,
    "\n  mutation login($username: String!, $password: String!) {\n    login(input: {username: $username, password: $password}) {\n      access_token\n      refresh_token\n      expires_in\n      token_type\n      user {\n        name\n        is_admin\n        created_at\n        updated_at\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  query AccessTokens($order_by: [OrderByClause!], $first: Int = 10, $page: Int) {\n    accessTokens(order_by: $order_by, first: $first, page: $page) {\n      paginatorInfo {\n        count\n        currentPage\n        firstItem\n        hasMorePages\n        lastItem\n        lastPage\n        perPage\n        total\n      }\n      data {\n        name,\n        scopes,\n        revoked,\n        #created_at,\n        #updated_at\n        #expires_at\n      }\n    }\n  }\n": types.AccessTokensDocument,
    "\n  query users($order_by: [OrderByClause!], $first: Int = 10, $page: Int) {\n    users(order_by: $order_by, first: $first, page: $page) {\n      paginatorInfo {\n        count\n        currentPage\n        firstItem\n        hasMorePages\n        lastItem\n        lastPage\n        perPage\n        total\n      }\n      data {\n        id\n        name\n        email\n        is_admin\n      }\n    }\n  }\n": types.UsersDocument,
    "query ListUsers {\n    users {\n        data {\n            name,\n            is_admin,\n            email\n        }\n    }\n}\n": types.ListUsersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
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
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateLibrary($name: String!, $type: LibraryType!, $path: String!, $order: Int!) {\n    createLibrary(name: $name, type: $type, path: $path, order: $order) {\n      id\n      name\n      type\n      path\n      order\n    }\n  }\n"): (typeof documents)["\n  mutation CreateLibrary($name: String!, $type: LibraryType!, $path: String!, $order: Int!) {\n    createLibrary(name: $name, type: $type, path: $path, order: $order) {\n      id\n      name\n      type\n      path\n      order\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation login($username: String!, $password: String!) {\n    login(input: {username: $username, password: $password}) {\n      access_token\n      refresh_token\n      expires_in\n      token_type\n      user {\n        name\n        is_admin\n        created_at\n        updated_at\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation login($username: String!, $password: String!) {\n    login(input: {username: $username, password: $password}) {\n      access_token\n      refresh_token\n      expires_in\n      token_type\n      user {\n        name\n        is_admin\n        created_at\n        updated_at\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AccessTokens($order_by: [OrderByClause!], $first: Int = 10, $page: Int) {\n    accessTokens(order_by: $order_by, first: $first, page: $page) {\n      paginatorInfo {\n        count\n        currentPage\n        firstItem\n        hasMorePages\n        lastItem\n        lastPage\n        perPage\n        total\n      }\n      data {\n        name,\n        scopes,\n        revoked,\n        #created_at,\n        #updated_at\n        #expires_at\n      }\n    }\n  }\n"): (typeof documents)["\n  query AccessTokens($order_by: [OrderByClause!], $first: Int = 10, $page: Int) {\n    accessTokens(order_by: $order_by, first: $first, page: $page) {\n      paginatorInfo {\n        count\n        currentPage\n        firstItem\n        hasMorePages\n        lastItem\n        lastPage\n        perPage\n        total\n      }\n      data {\n        name,\n        scopes,\n        revoked,\n        #created_at,\n        #updated_at\n        #expires_at\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query users($order_by: [OrderByClause!], $first: Int = 10, $page: Int) {\n    users(order_by: $order_by, first: $first, page: $page) {\n      paginatorInfo {\n        count\n        currentPage\n        firstItem\n        hasMorePages\n        lastItem\n        lastPage\n        perPage\n        total\n      }\n      data {\n        id\n        name\n        email\n        is_admin\n      }\n    }\n  }\n"): (typeof documents)["\n  query users($order_by: [OrderByClause!], $first: Int = 10, $page: Int) {\n    users(order_by: $order_by, first: $first, page: $page) {\n      paginatorInfo {\n        count\n        currentPage\n        firstItem\n        hasMorePages\n        lastItem\n        lastPage\n        perPage\n        total\n      }\n      data {\n        id\n        name\n        email\n        is_admin\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query ListUsers {\n    users {\n        data {\n            name,\n            is_admin,\n            email\n        }\n    }\n}\n"): (typeof documents)["query ListUsers {\n    users {\n        data {\n            name,\n            is_admin,\n            email\n        }\n    }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;