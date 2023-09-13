import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule} from "webpack";
import { BuildOptions } from "./types/config";


export function buildLoader({isDev}: BuildOptions): RuleSetRule[] {

  const cssLoaders = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
          loader: 'css-loader',
          options:{
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
            }
          }
        },
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }
  
  const typeScriptLoader = {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
  }

  return [
    typeScriptLoader,
    cssLoaders
  ]
}