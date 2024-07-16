import { defineConfig } from 'yapi-to-typescript';

export default defineConfig([
  {
    serverType: 'swagger',
    serverUrl: 'http://localhost:9000/api-json',
    typesOnly: false,
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    prodEnvName: 'production',
    outputFilePath: '../src/api/index.ts',
    requestFunctionFilePath: '../src/utils/request.ts',
    dataKey: 'data',
    comment: {
      enabled: false,
    },
    projects: [
      {
        token: '',
        categories: [
          {
            id: 0,
            getRequestFunctionName(interfaceInfo, changeCase) {
              return changeCase.camelCase(
                `${interfaceInfo.method}_${interfaceInfo.path}`,
              );
            },
          },
        ],
      },
    ],
  },
]);
