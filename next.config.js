const withImages = require("next-images");
const withCSS = require("@zeit/next-css");

module.exports = withCSS(
    withImages({
        webpack(config, options) {
            return config;
        }
    })
);




// module.exports = {
//     webpack: (config, {
//         isServer
//     }) => {
//     // Fixes npm packages that depend on `fs, net, tls` module
//         if (!isServer) {
//             config.node = {
//                 fs: 'empty',
//                 net: 'empty',
//                 tls: 'empty',
//                 "fs-extra": 'empty'
//             }
//         }
//         return config
//     }
// }



