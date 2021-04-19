module.exports = {
    apps: [
      {
        name: "chungeoram",
        script: "./server.js",
        watch: true,
        interpreter: '/home/ubuntu/.nvm/versions/node/v8.11.3/bin/node',
        "env_public-develop": {
          NODE_ENV: "public-develop",
          PORT: 1111,
          API_END_POINT: 'http://endpoint/api'
        },
        env_production: {
          NODE_ENV: "production"
        }
      }
    ]
  };