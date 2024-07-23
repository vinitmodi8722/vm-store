const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PeAZG2LI5C4ZNCHVSYqEkZ1zV4p5yp6phM0TC9fZiNNCAagiiIqFYUOkX0g5WqL8j30AgSdTRk2BPfhvG3MA7y2004LovMrgT"
);

app.use(express.json());
app.use(cors());

app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  console.log(products);

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.itemName,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/Success",
    cancel_url: "http://localhost:5173/Cancel",
  });

  res.json({ id: session.id });
});

app.listen(7000, () => {
  console.log("Server started");
});
