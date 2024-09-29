import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:5005/graphql",
    documents: ["src/**/*.ts"],
    ignoreNoDocuments: true, // for better experience with the watcher
    generates: {
        "./src/gql/": {
            preset: "client",
            config: {
                useTypeImports: true,
            },
            plugins: [],
        },
    },
};

export default config;
