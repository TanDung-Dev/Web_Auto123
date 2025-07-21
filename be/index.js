const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http"); // ⬅️ QUAN TRỌNG

dotenv.config();

const app = express();
const server = http.createServer(app); // ⬅️ tạo server HTTP

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", require("./routes/index.routes"));

// MongoDB + Server start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Kết nối MongoDB thành công"))
  .catch((err) => {
    console.error("❌ Lỗi kết nối MongoDB:", err.message);
    process.exit(1);
  });

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => { // ⬅️ dùng server thay vì app.listen
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
