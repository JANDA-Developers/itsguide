const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const targetModules = [
  'slick-carousel', 
  'react-toastify',
  'react-slick',
  'react-select',
  'react-resize-detector',
  'react-export-excel',
  '@apollo/client',
  '@ckeditor/ckeditor5-react','apollo-upload-client','classnames','dayjs','graphql-request','jquery','omit-deep-lodash','react-draggable','react','react-dom','react-beautiful-dnd','react-daum-postcode','react-day-picker']
const withTM = require('next-transpile-modules')(targetModules);
const path = require("path");



module.exports = {
    i18n: {
      locales: ['en', 'ja', 'ko', 'chi', 'ot'],
      defaultLocale: 'ko',
    },
    ...withTM(withCSS(
    withImages(
      {
        webpack(config, {isServer}) {
            if (!isServer) {
                config.node = {
                    fs: 'empty',
                }
            }

            if (isServer) {
              config.externals = ['react', ...config.externals];
            }
            config.optimization.minimize  = false
            config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');
            return config;
        }
    }
    ))),
    async redirects() {
        return [
          {
            source: '/member',
            destination: '/service/announce', // Matched parameters can be used in the destination
            permanent: true,
          },
          {
            source: '/master/design',
            destination: '/master/design/display', // Matched parameters can be used in the destination
            permanent: true,
          },
        ]
      },
}




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



