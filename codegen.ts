
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  // schema: "../gql-backend/src/schema.gql",
  documents: "../gql-backend/src/operation.gql",
  generates: {
    './src/gql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
      config: {
        withCompositionFunctions: true
      },
    },
  },
};

export default config;

// schema: "http://localhost:3000/graphql"
// overwrite: true
// documents:
//   - "http://localhost:3000/graphql":
//       loader: ./operationsFromSchemaGenerator.js
// generates:
//   src/generated/graphql.ts:
//     plugins:
//       - typescript
//       - typescript-operations
//       - typescript-vue-apollo
//     config:
//       withCompositionFunctions: true
//       vueCompositionApiImportFrom: vue
//       dedupeOperationSuffix: true