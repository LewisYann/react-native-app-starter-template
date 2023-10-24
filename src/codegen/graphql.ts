import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/configs/schema.graphql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/generated/api.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-rtk-query',
        'typescript-operations',
      ],
      config: {
        importBaseApiFrom: 'utils/baseApi.ts',
        importBaseApiAlternateName: 'baseApi',
        exportHooks: true,
        overrideExisting: true,
      },
    },
  },
};

export default config;
