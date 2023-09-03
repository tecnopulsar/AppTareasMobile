
export const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Tasks API",
        version: "1.0.0",
      },
    },
    apis:["./src/routes/**/*.js"]
  };