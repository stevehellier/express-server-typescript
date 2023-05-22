// Configure swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '0.1.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
    },
  },
  apis: ['./src/swagger/**/*.yaml', './src/swagger/**/*.yml'],
};

export default swaggerOptions;
