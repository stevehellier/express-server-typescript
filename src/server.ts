import app from './app';

const PORT = process.env.SERVER_PORT ?? 4000;

// Start the server
app.listen(PORT, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${PORT}. Swagger Docs http://localhost:${PORT}/api-docs`
  );
});
