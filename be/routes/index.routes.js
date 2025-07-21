const express = require("express");
const router = express.Router();

const authRouter = require("../controllers/authenticate.controller");
const productRouter = require("../routes/product.route");


router.use("/auth", authRouter);
router.use("/products", productRouter);



module.exports = router;

