import app from "./app.js";

// This is for maintaining the server.
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  console.log(err.stack);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(`${err}`);
  server.close(() => {
    process.exit(1);
  });
});

const PORT = 3222;
const server = app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});