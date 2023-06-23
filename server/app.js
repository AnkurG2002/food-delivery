import express from "express";
import { config } from "dotenv";
import cors from "cors";

import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";

config({ path: "./config/.env" });

export const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.json({
    // We need the raw body to verify webhook signatures.
    // Let's compute it only when hitting the Stripe webhook endpoint.
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith("/webhook")) {
        req.rawBody = buf.toString();
      }
    },
  })
);

app.use("/api/", productRoute);
app.use("/api/", userRoute);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Food Delivery",
  });
});
