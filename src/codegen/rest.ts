import type {ConfigFile} from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'http://localhost:8000/docs/swagger.json',
  apiFile: './api.ts',
  outputFiles: {
    '../generated/api.ts': {
      filterEndpoints: [/auth/i],
      exportName: 'auth',
    },
  },
  hooks: true,
};

export default config;
