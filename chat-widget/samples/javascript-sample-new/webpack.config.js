// /* eslint-disable @typescript-eslint/no-var-requires */
// const path = require("path");
// const TerserPlugin = require("terser-webpack-plugin");

// module.exports = {
//     // devtool: "source-map",
//     entry: path.resolve(__dirname, './src/index.js'),
//     mode: "development",
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: "bundle.js"
//     },
//     devServer: {
//         static: {
//           directory: path.join(__dirname, "dist"),
//         },
//         compress: true,
//         port: 9000,
//         client: {
//           overlay: {
//               warnings: false,
//               errors: true
//           }
//         }
//     },
//     optimization: {
//       minimize: true,
//       minimizer: [new TerserPlugin()],
//     },
//     module: {
//       rules: [
//           {
//               test: /\.m?js$/,
//               exclude: /node_modules/,
//               use: {
//                   loader: "babel-loader",
//                   options: {
//                       presets: ["@babel/preset-env", '@babel/preset-react']
//                   }
//               }
//           },
//           {
//             test: /\.m?js/,
//             resolve: {
//                 fullySpecified: false,
//             },
//         }
//       ]
//     },
//     resolve: {
//       extensions: ['.js'],
//       fallback: {
//         crypto: require.resolve("crypto-browserify"),
//         stream: require.resolve("stream-browserify")
//       },
//     },
// };