import express from "express";
import routerProduct from "./routes/product.js";

const app = express();
app.use(express.json());

app.use("/api", routerProduct);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

