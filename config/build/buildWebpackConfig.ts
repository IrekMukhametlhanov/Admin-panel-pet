import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import path from "path";
import { buildPlugins } from "./buildPlugins";
import { buildLoader } from "./buildLoader";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): Configuration{
    const {
        paths, mode, isDev
    } = options;
 return {
    mode,
    entry: paths.entry,
    output: {
        filename: "[name].[contenthash].js",
        path: paths.build,
        clean: true,
    },
    plugins: buildPlugins(options),
    module: {
        rules: buildLoader(options),
      },
      resolve: buildResolvers(options),
      devtool: isDev ? 'inline-source-map' : undefined ,
      devServer: isDev ? buildDevServer(options) : undefined,
}

}