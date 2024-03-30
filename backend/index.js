import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

// using middleware to parse request body
app.use(express.json());

// Middleware for handling CORS POLICY
// option 1
app.use(cors());
// option 2: allow custom origin
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"], // Corrected methods array
//     allowedHeaders: ["Content-Type"], // Corrected allowedHeaders key
//   })
// );

// app.get("/", (request, response) => {
//   console.log(request);
//   return response.status(234).send("<h1>Welcome to MERN Tutorial</h1>");
// });

app.use("/books", bookRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App Connected to Database");
    app.listen(PORT, () => {
      console.log(`App is running ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
