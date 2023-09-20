const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const agentsRoute = require("./routes/agents");
const propertiesRoute = require("./routes/properties");

const port = process.env.PORT || 8800; // Use the PORT environment variable if available

dotenv.config();
mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection successfully!");
  })
  .catch((err) => console.error("DB Connection error:", err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://webstack-portfolio-project-nine.vercel.app"
  })
);

// app.use(cors());

// Define your API routes with prefixes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/properties", propertiesRoute);
app.use("/api/agents", agentsRoute);

// Error handling middleware (add your custom error handling logic)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});