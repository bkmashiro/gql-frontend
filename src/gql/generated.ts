import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateSubmissionInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateUserInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSubmission: Submission;
  createUser: User;
  removeSubmission: Submission;
  removeUser: User;
  updateSubmission: Submission;
  updateUser: User;
};


export type MutationCreateSubmissionArgs = {
  createSubmissionInput: CreateSubmissionInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveSubmissionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateSubmissionArgs = {
  updateSubmissionInput: UpdateSubmissionInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  submission: Submission;
  user: User;
};


export type QuerySubmissionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type Submission = {
  __typename?: 'Submission';
  /** content */
  content: Scalars['String']['output'];
  /** createdAt */
  createdAt: Scalars['String']['output'];
  /** deletedAt */
  deletedAt: Scalars['String']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** title */
  title: Scalars['String']['output'];
  /** updatedAt */
  updatedAt: Scalars['String']['output'];
  /** userId */
  userId: Scalars['Int']['output'];
};

export type UpdateSubmissionInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateUserInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  /** email */
  email: Scalars['String']['output'];
  /** id */
  id: Scalars['Int']['output'];
  /** name */
  name: Scalars['String']['output'];
  /** password */
  password: Scalars['String']['output'];
  /** submission */
  submissions: Array<Maybe<Submission>>;
};

export type UserQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: number, name: string, email: string, password: string, submissions: Array<{ __typename?: 'Submission', id: number, title: string, content: string, userId: number, createdAt: string, updatedAt: string, deletedAt: string } | null> } };

export type SubmissionQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type SubmissionQuery = { __typename?: 'Query', submission: { __typename?: 'Submission', id: number, title: string, content: string, userId: number, createdAt: string, updatedAt: string, deletedAt: string } };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number, name: string, email: string, password: string, submissions: Array<{ __typename?: 'Submission', id: number, title: string, content: string, userId: number, createdAt: string, updatedAt: string, deletedAt: string } | null> } };

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: number, name: string, email: string, password: string, submissions: Array<{ __typename?: 'Submission', id: number, title: string, content: string, userId: number, createdAt: string, updatedAt: string, deletedAt: string } | null> } };

export type RemoveUserMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RemoveUserMutation = { __typename?: 'Mutation', removeUser: { __typename?: 'User', id: number, name: string, email: string, password: string, submissions: Array<{ __typename?: 'Submission', id: number, title: string, content: string, userId: number, createdAt: string, updatedAt: string, deletedAt: string } | null> } };

export type CreateSubmissionMutationVariables = Exact<{
  createSubmissionInput: CreateSubmissionInput;
}>;


export type CreateSubmissionMutation = { __typename?: 'Mutation', createSubmission: { __typename?: 'Submission', id: number, title: string, content: string, userId: number, createdAt: string, updatedAt: string, deletedAt: string } };

export type UpdateSubmissionMutationVariables = Exact<{
  updateSubmissionInput: UpdateSubmissionInput;
}>;


export type UpdateSubmissionMutation = { __typename?: 'Mutation', updateSubmission: { __typename?: 'Submission', id: number, title: string, content: string, userId: number, createdAt: string, updatedAt: string, deletedAt: string } };

export type RemoveSubmissionMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RemoveSubmissionMutation = { __typename?: 'Mutation', removeSubmission: { __typename?: 'Submission', id: number, title: string, content: string, userId: number, createdAt: string, updatedAt: string, deletedAt: string } };


export const UserDocument = gql`
    query user($id: Int!) {
  user(id: $id) {
    id
    name
    email
    password
    submissions {
      id
      title
      content
      userId
      createdAt
      updatedAt
      deletedAt
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a Vue component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useUserQuery({
 *   id: // value for 'id'
 * });
 */
export function useUserQuery(variables: UserQueryVariables | VueCompositionApi.Ref<UserQueryVariables> | ReactiveFunction<UserQueryVariables>, options: VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<UserQuery, UserQueryVariables>(UserDocument, variables, options);
}
export function useUserLazyQuery(variables: UserQueryVariables | VueCompositionApi.Ref<UserQueryVariables> | ReactiveFunction<UserQueryVariables>, options: VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserQuery, UserQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, variables, options);
}
export type UserQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<UserQuery, UserQueryVariables>;
export const SubmissionDocument = gql`
    query submission($id: Int!) {
  submission(id: $id) {
    id
    title
    content
    userId
    createdAt
    updatedAt
    deletedAt
  }
}
    `;

/**
 * __useSubmissionQuery__
 *
 * To run a query within a Vue component, call `useSubmissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubmissionQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSubmissionQuery({
 *   id: // value for 'id'
 * });
 */
export function useSubmissionQuery(variables: SubmissionQueryVariables | VueCompositionApi.Ref<SubmissionQueryVariables> | ReactiveFunction<SubmissionQueryVariables>, options: VueApolloComposable.UseQueryOptions<SubmissionQuery, SubmissionQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SubmissionQuery, SubmissionQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SubmissionQuery, SubmissionQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<SubmissionQuery, SubmissionQueryVariables>(SubmissionDocument, variables, options);
}
export function useSubmissionLazyQuery(variables: SubmissionQueryVariables | VueCompositionApi.Ref<SubmissionQueryVariables> | ReactiveFunction<SubmissionQueryVariables>, options: VueApolloComposable.UseQueryOptions<SubmissionQuery, SubmissionQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SubmissionQuery, SubmissionQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SubmissionQuery, SubmissionQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<SubmissionQuery, SubmissionQueryVariables>(SubmissionDocument, variables, options);
}
export type SubmissionQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<SubmissionQuery, SubmissionQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    id
    name
    email
    password
    submissions {
      id
      title
      content
      userId
      createdAt
      updatedAt
      deletedAt
    }
  }
}
    `;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateUserMutation({
 *   variables: {
 *     createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(options: VueApolloComposable.UseMutationOptions<CreateUserMutation, CreateUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateUserMutation, CreateUserMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
}
export type CreateUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($updateUserInput: UpdateUserInput!) {
  updateUser(updateUserInput: $updateUserInput) {
    id
    name
    email
    password
    submissions {
      id
      title
      content
      userId
      createdAt
      updatedAt
      deletedAt
    }
  }
}
    `;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateUserMutation({
 *   variables: {
 *     updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(options: VueApolloComposable.UseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
}
export type UpdateUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateUserMutation, UpdateUserMutationVariables>;
export const RemoveUserDocument = gql`
    mutation removeUser($id: Int!) {
  removeUser(id: $id) {
    id
    name
    email
    password
    submissions {
      id
      title
      content
      userId
      createdAt
      updatedAt
      deletedAt
    }
  }
}
    `;

/**
 * __useRemoveUserMutation__
 *
 * To run a mutation, you first call `useRemoveUserMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRemoveUserMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useRemoveUserMutation(options: VueApolloComposable.UseMutationOptions<RemoveUserMutation, RemoveUserMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RemoveUserMutation, RemoveUserMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RemoveUserMutation, RemoveUserMutationVariables>(RemoveUserDocument, options);
}
export type RemoveUserMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RemoveUserMutation, RemoveUserMutationVariables>;
export const CreateSubmissionDocument = gql`
    mutation createSubmission($createSubmissionInput: CreateSubmissionInput!) {
  createSubmission(createSubmissionInput: $createSubmissionInput) {
    id
    title
    content
    userId
    createdAt
    updatedAt
    deletedAt
  }
}
    `;

/**
 * __useCreateSubmissionMutation__
 *
 * To run a mutation, you first call `useCreateSubmissionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubmissionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateSubmissionMutation({
 *   variables: {
 *     createSubmissionInput: // value for 'createSubmissionInput'
 *   },
 * });
 */
export function useCreateSubmissionMutation(options: VueApolloComposable.UseMutationOptions<CreateSubmissionMutation, CreateSubmissionMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateSubmissionMutation, CreateSubmissionMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<CreateSubmissionMutation, CreateSubmissionMutationVariables>(CreateSubmissionDocument, options);
}
export type CreateSubmissionMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateSubmissionMutation, CreateSubmissionMutationVariables>;
export const UpdateSubmissionDocument = gql`
    mutation updateSubmission($updateSubmissionInput: UpdateSubmissionInput!) {
  updateSubmission(updateSubmissionInput: $updateSubmissionInput) {
    id
    title
    content
    userId
    createdAt
    updatedAt
    deletedAt
  }
}
    `;

/**
 * __useUpdateSubmissionMutation__
 *
 * To run a mutation, you first call `useUpdateSubmissionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubmissionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateSubmissionMutation({
 *   variables: {
 *     updateSubmissionInput: // value for 'updateSubmissionInput'
 *   },
 * });
 */
export function useUpdateSubmissionMutation(options: VueApolloComposable.UseMutationOptions<UpdateSubmissionMutation, UpdateSubmissionMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateSubmissionMutation, UpdateSubmissionMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<UpdateSubmissionMutation, UpdateSubmissionMutationVariables>(UpdateSubmissionDocument, options);
}
export type UpdateSubmissionMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateSubmissionMutation, UpdateSubmissionMutationVariables>;
export const RemoveSubmissionDocument = gql`
    mutation removeSubmission($id: Int!) {
  removeSubmission(id: $id) {
    id
    title
    content
    userId
    createdAt
    updatedAt
    deletedAt
  }
}
    `;

/**
 * __useRemoveSubmissionMutation__
 *
 * To run a mutation, you first call `useRemoveSubmissionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSubmissionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRemoveSubmissionMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useRemoveSubmissionMutation(options: VueApolloComposable.UseMutationOptions<RemoveSubmissionMutation, RemoveSubmissionMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RemoveSubmissionMutation, RemoveSubmissionMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<RemoveSubmissionMutation, RemoveSubmissionMutationVariables>(RemoveSubmissionDocument, options);
}
export type RemoveSubmissionMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RemoveSubmissionMutation, RemoveSubmissionMutationVariables>;