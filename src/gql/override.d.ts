export type VariablesParameter<TVariables> = TVariables | VueCompositionApi.Ref<TVariables> | ReactiveFunction<TVariables>;
export type OptionsParameter<TResult, TVariables extends OperationVariables> = UseQueryOptions<TResult, TVariables> | VueCompositionApi.Ref<UseQueryOptions<TResult, TVariables>> | ReactiveFunction<UseQueryOptions<TResult, TVariables>>;
