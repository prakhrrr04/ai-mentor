const express = require("express");
const cors = require("cors");
require("dotenv").config();

const aiRoutes = require("./Routes/ai"); // ✅ correct path

const app = express();
app.use(cors());
app.use(express.json());

// ✅ use the route
app.use("/api", aiRoutes);

app.get("/", (req, res) => {
  res.send("Backend working");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
