/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: { input: any; output: any; }
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: { input: any; output: any; }
};

export type AccessToken = {
  __typename?: 'AccessToken';
  name?: Maybe<Scalars['String']['output']>;
  revoked: Scalars['Boolean']['output'];
  scopes?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of AccessToken items. */
export type AccessTokenPaginator = {
  __typename?: 'AccessTokenPaginator';
  /** A list of AccessToken items. */
  data: Array<AccessToken>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Album = {
  __typename?: 'Album';
  /** The album cover */
  cover?: Maybe<Image>;
  /** When the account was created. */
  created_at: Scalars['DateTime']['output'];
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  /** The name of the album. */
  name: Scalars['String']['output'];
  /** The identifier used for paths */
  slug: Scalars['String']['output'];
  /** When the account was last updated. */
  updated_at: Scalars['DateTime']['output'];
  /** The release year */
  year: Scalars['Int']['output'];
};

export type Artist = {
  __typename?: 'Artist';
  /** When the account was created. */
  created_at: Scalars['DateTime']['output'];
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  /** The artist image */
  image?: Maybe<Image>;
  /** The name of the artist. */
  name: Scalars['String']['output'];
  /** The identifier used for paths */
  slug: Scalars['String']['output'];
  /** When the account was last updated. */
  updated_at: Scalars['DateTime']['output'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_in?: Maybe<Scalars['Int']['output']>;
  issued_at: Scalars['Int']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ForgotPasswordInput = {
  email: Scalars['String']['input'];
};

export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type Genre = {
  __typename?: 'Genre';
  /** When the genre was created. */
  created_at: Scalars['DateTime']['output'];
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  /** The name of the genre. */
  name: Scalars['String']['output'];
  /** The identifier used for paths */
  slug: Scalars['String']['output'];
  /** When the genre was last updated. */
  updated_at: Scalars['DateTime']['output'];
};

export type Image = {
  __typename?: 'Image';
  created_at: Scalars['DateTime']['output'];
  extension: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  mime_type: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  updated_at: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
  width: Scalars['Int']['output'];
};

export type Library = {
  __typename?: 'Library';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  last_scan: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  type: LibraryType;
  updated_at: Scalars['DateTime']['output'];
};

/** A paginated list of Library items. */
export type LibraryPaginator = {
  __typename?: 'LibraryPaginator';
  /** A list of Library items. */
  data: Array<Library>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum LibraryType {
  Audiobook = 'Audiobook',
  Movie = 'Movie',
  Music = 'Music',
  Podcast = 'Podcast',
  TvShow = 'TvShow'
}

export type LoginInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLibrary?: Maybe<Library>;
  deleteLibrary?: Maybe<Library>;
  forgotPassword: ForgotPasswordResponse;
  login: AuthPayload;
  logout: LogoutResponse;
  refreshToken: RefreshTokenPayload;
  register: RegisterResponse;
  updateForgottenPassword: ForgotPasswordResponse;
  updateLibrary?: Maybe<Library>;
  updatePassword: UpdatePasswordResponse;
};


export type MutationCreateLibraryArgs = {
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  path: Scalars['String']['input'];
  type: LibraryType;
};


export type MutationDeleteLibraryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationLoginArgs = {
  input?: InputMaybe<LoginInput>;
};


export type MutationRefreshTokenArgs = {
  input?: InputMaybe<RefreshTokenInput>;
};


export type MutationRegisterArgs = {
  input?: InputMaybe<RegisterInput>;
};


export type MutationUpdateForgottenPasswordArgs = {
  input?: InputMaybe<NewPasswordWithCodeInput>;
};


export type MutationUpdateLibraryArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<LibraryType>;
};


export type MutationUpdatePasswordArgs = {
  input: UpdatePassword;
};

export type NewPasswordWithCodeInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

/** Indicates what fields are available at the top level of a query operation. */
export type Query = {
  __typename?: 'Query';
  accessTokens: AccessTokenPaginator;
  libraries: LibraryPaginator;
  library?: Maybe<Library>;
  me?: Maybe<User>;
  /** Find a single user by an identifying attribute. */
  user?: Maybe<User>;
  /** List multiple users. */
  users: UserPaginator;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryAccessTokensArgs = {
  first?: Scalars['Int']['input'];
  order_by?: InputMaybe<Array<InputMaybe<OrderByClause>>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryLibrariesArgs = {
  first?: Scalars['Int']['input'];
  order_by: Array<OrderByClause>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryLibraryArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** Indicates what fields are available at the top level of a query operation. */
export type QueryUsersArgs = {
  first?: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  order_by?: InputMaybe<Array<OrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type RefreshTokenInput = {
  refresh_token?: InputMaybe<Scalars['String']['input']>;
};

export type RefreshTokenPayload = {
  __typename?: 'RefreshTokenPayload';
  access_token: Scalars['String']['output'];
  expires_in: Scalars['Int']['output'];
  issued_at: Scalars['Int']['output'];
  refresh_token: Scalars['String']['output'];
  token_type: Scalars['String']['output'];
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  status: RegisterStatuses;
  tokens?: Maybe<AuthPayload>;
};

export enum RegisterStatuses {
  MustVerifyEmail = 'MUST_VERIFY_EMAIL',
  Success = 'SUCCESS'
}

export type Song = {
  __typename?: 'Song';
  /** When the account was created. */
  created_at: Scalars['DateTime']['output'];
  /** The disc number */
  disc?: Maybe<Scalars['Int']['output']>;
  /** The duration of the song */
  duration?: Maybe<Scalars['Int']['output']>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  lyrics?: Maybe<Scalars['String']['output']>;
  modified_time?: Maybe<Scalars['Int']['output']>;
  /** The name of the song. */
  name: Scalars['String']['output'];
  path?: Maybe<Scalars['String']['output']>;
  /** The identifier used for paths */
  slug: Scalars['String']['output'];
  /** The track number */
  track?: Maybe<Scalars['Int']['output']>;
  /** When the account was last updated. */
  updated_at: Scalars['DateTime']['output'];
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdatePassword = {
  old_password: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};

export type UpdatePasswordResponse = {
  __typename?: 'UpdatePasswordResponse';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

/** Account of a person who utilizes this application. */
export type User = {
  __typename?: 'User';
  /** When the account was created. */
  created_at: Scalars['DateTime']['output'];
  /** Unique email address. */
  email: Scalars['String']['output'];
  /** When the email was verified. */
  email_verified_at?: Maybe<Scalars['DateTime']['output']>;
  /** Unique primary key. */
  id: Scalars['ID']['output'];
  is_admin: Scalars['Boolean']['output'];
  /** Non-unique name. */
  name: Scalars['String']['output'];
  /** When the account was last updated. */
  updated_at: Scalars['DateTime']['output'];
};

/** A paginated list of User items. */
export type UserPaginator = {
  __typename?: 'UserPaginator';
  /** A list of User items. */
  data: Array<User>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type CreateLibraryMutationVariables = Exact<{
  name: Scalars['String']['input'];
  type: LibraryType;
  path: Scalars['String']['input'];
  order: Scalars['Int']['input'];
}>;


export type CreateLibraryMutation = { __typename?: 'Mutation', createLibrary?: { __typename?: 'Library', id: string, name: string, type: LibraryType, path: string, order: number } | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', access_token?: string | null, refresh_token?: string | null, expires_in?: number | null, token_type?: string | null, user?: { __typename?: 'User', name: string, is_admin: boolean, created_at: any, updated_at: any } | null } };

export type AccessTokensQueryVariables = Exact<{
  order_by?: InputMaybe<Array<OrderByClause>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AccessTokensQuery = { __typename?: 'Query', accessTokens: { __typename?: 'AccessTokenPaginator', paginatorInfo: { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem?: number | null, hasMorePages: boolean, lastItem?: number | null, lastPage: number, perPage: number, total: number }, data: Array<{ __typename?: 'AccessToken', name?: string | null, scopes?: string | null, revoked: boolean }> } };

export type UsersQueryVariables = Exact<{
  order_by?: InputMaybe<Array<OrderByClause>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UserPaginator', paginatorInfo: { __typename?: 'PaginatorInfo', count: number, currentPage: number, firstItem?: number | null, hasMorePages: boolean, lastItem?: number | null, lastPage: number, perPage: number, total: number }, data: Array<{ __typename?: 'User', id: string, name: string, email: string, is_admin: boolean }> } };

export type ListUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUsersQuery = { __typename?: 'Query', users: { __typename?: 'UserPaginator', data: Array<{ __typename?: 'User', name: string, is_admin: boolean, email: string }> } };


export const CreateLibraryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLibrary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LibraryType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLibrary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"path"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}}]}}]} as unknown as DocumentNode<CreateLibraryMutation, CreateLibraryMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}},{"kind":"Field","name":{"kind":"Name","value":"refresh_token"}},{"kind":"Field","name":{"kind":"Name","value":"expires_in"}},{"kind":"Field","name":{"kind":"Name","value":"token_type"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"is_admin"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const AccessTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AccessTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderByClause"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"scopes"}},{"kind":"Field","name":{"kind":"Name","value":"revoked"}}]}}]}}]}}]} as unknown as DocumentNode<AccessTokensQuery, AccessTokensQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrderByClause"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order_by"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"firstItem"}},{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"lastItem"}},{"kind":"Field","name":{"kind":"Name","value":"lastPage"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"is_admin"}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const ListUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"is_admin"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<ListUsersQuery, ListUsersQueryVariables>;