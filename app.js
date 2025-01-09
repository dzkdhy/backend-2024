// import express dan routing
import express from "express";
import router from "./routes/api.js";

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());

// Menggunakan routing (router)
app.use(router);

// Mendefinisikan port.
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
