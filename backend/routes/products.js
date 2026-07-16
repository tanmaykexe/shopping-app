const express = require("express");

const router = express.Router();

const {

    getProducts,
    purchaseProduct

} = require("../controllers/productController");

router.get("/", getProducts);

router.post("/:id/purchase", purchaseProduct);

module.exports = router;
