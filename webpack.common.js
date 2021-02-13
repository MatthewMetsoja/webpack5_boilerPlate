const path = require("path");
const loader = require("sass-loader");


module.exports = {
  entry: {
    main:"./src/index.js",
    vendor: "./src/vendor.js"
  },
  devServer: {
   
   
    contentBase: path.join(__dirname, 'dist'),
        port: 5050,
        open: true,
        // hot: true,

        // before(app, server) {
          // This step is curcial. DevServer is needed to send reload message to opened page.
          // Without this step, the update of HtmlWebpackHotPlugin will be omitted and you will need to refresh the page manually.
          // htmlHotPlugin.setDevServer(server)
        // },

        // openPage: '/test.html' // use to open a specific page with dev server
  },
  plugins: [

  ],
  module: {
    rules: [
     
      {
          test: /\.html$/,
          use: ["html-loader"]
      },
      {
        test: /\.svg|png|jpg|gif|json$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath:"images/",
            publicPath: 'images/',
            esModule: false,
          }
        }
      }  
  
    ],
  },
  

}