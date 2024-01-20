# Fix type hack

in `useQuery.ts`, line 14-15. Modify as this.

``` ts
export type VariablesParameter<TVariables> = TVariables | VueCompositionApi.Ref<TVariables> | ReactiveFunction<TVariables>;
export type OptionsParameter<TResult, TVariables extends OperationVariables> = UseQueryOptions<TResult, TVariables> | VueCompositionApi.Ref<UseQueryOptions<TResult, TVariables>> | ReactiveFunction<UseQueryOptions<TResult, TVariables>>;
```