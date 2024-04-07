import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://baander.ddev.site/graphql',
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['./resources/app/**/*.{ts,tsx}'],
  generates: {
    './resources/app/graphql/__generated__/': {
      preset: 'client',
      config: {
        arrayInputCoercion: false,
      },
      presetConfig: {
        gqlTagName: 'gql',
      }
    },
  },
  ignoreNoDocuments: true,
};

export default config;
