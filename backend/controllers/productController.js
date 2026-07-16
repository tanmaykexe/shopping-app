const db = require("../config/db");

// =========================
// Get All Products
// =========================

const getProducts = (req, res) => {

    db.query("SELECT * FROM products", (err, results) => {

        if (err) {

            return res.status(500).json({
                message: err.message
            });

        }

        res.json(results);

    });

};

// =========================
// Purchase Product
// =========================

const purchaseProduct = (req, res) => {

    const id = req.params.id;

    db.query(

        "SELECT * FROM products WHERE id=?",

        [id],

        (err, result) => {

            if (err) {

                return res.status(500).json({
                    message: err.message
                });

            }

            if (result.length === 0) {

                return res.status(404).json({
                    message: "Product not found"
                });

            }

            if (result[0].quantity <= 0) {

                return res.status(400).json({
                    message: "Product Out Of Stock"
                });

            }

            db.query(

                "UPDATE products SET quantity=quantity-1 WHERE id=?",

                [id],

                (err) => {

                    if (err) {

                        return res.status(500).json({
                            message: err.message
                        });

                    }

                    res.json({
                        success: true,
                        message: "Purchase Successful"
                    });

                }

            );

        }

    );

};

module.exports = {

    getProducts,
    purchaseProduct

};
