const swaggerJsDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Authentication & OTP API",
      version: "1.0.0",
      description: "API documentation for Authentication, Email OTP, Mobile OTP and Google OAuth"
    },
    servers: [
      {
        url: "http://localhost:8000",
        description: "Local Development Server"
      }
    ]
  },

  apis: [
  "./src/**/*.swagger.js"
]

};

const swaggerSpec = swaggerJsDoc(options);

// console.log("Swagger Paths:");
// console.log(JSON.stringify(swaggerSpec.paths, null, 2));

module.exports = swaggerSpec;