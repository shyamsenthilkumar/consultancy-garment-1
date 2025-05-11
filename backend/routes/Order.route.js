const express = require("express");
const { auth } = require("../middlewares/auth.middleware");
const { OrderModel } = require("../models/Order.model");
const orderRouter = express.Router();

/* ------ Get all Orders ------ */
//only admin can access
orderRouter.get("/", auth, async (req, res) => {
  // let data = req.body;
  // if (data.role === "admin") {
  try {
    const data = await OrderModel.find();
    res.status(200).send({ orders: data });
  } catch (error) {
    res.status(400).send(error);
  }
  // } else {
  //   res.status(401).send({ msg: "You are not Authorized" });
  // }
});

/* ------ Get Order of a specific user / Protected Route ------ */
orderRouter.get("/user", auth, async (req, res) => {
  const { authorID } = req.user;

  if (authorID) {
    try {
      const orders = await OrderModel.find({ authorID });
      res.status(200).send({ orders });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  } else {
    res.status(401).send({ msg: "Unauthorized" });
  }
});


/* ------ Create an Order ------ */
orderRouter.post("/create", auth, async (req, res) => {
  try {
    const orders = req.body;

    if (!Array.isArray(orders)) {
      return res.status(400).send({ error: "Orders must be an array" });
    }

    const data = orders.map((element) => ({
      ...element,
    }));

    console.log("Order data to insert:", data);

    const result = await OrderModel.insertMany(data);

    console.log("Insert result:", result);

    return res.status(200).send({ msg: "New Order has been added", result });
  } catch (error) {
    console.error("Error inserting orders:", error);

    // Ensure no response was sent already
    if (!res.headersSent) {
      res.status(500).send({ error: error.message });
    }
  }
});




/* ------ Update an Order ------ */
orderRouter.patch("/edit/:orderID", auth, async (req, res) => {
  const { orderID } = req.params;
  // console.log(orderID);
  const data = req.body.status;
  // console.log(data);
  try {
    await OrderModel.findByIdAndUpdate(
      { _id: orderID },
      {
        status: data,
      }
    );
    res.status(200).send({
      msg: `Order with id ${orderID} has been Updated Successfully`,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
module.exports = { orderRouter };
