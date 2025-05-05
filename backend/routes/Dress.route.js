// imports
const express = require("express");
const { auth } = require("../middlewares/auth.middleware");
const { DressModel } = require("../models/Dress.model");

const dressRouter = express.Router();

/*-------- Get all the dresses ------*/
dressRouter.get("/", async (req, res) => {
  //handling pagination filters and sorting in a single query
  let { brand, sort, page, name } = req.query;
  const limit = 9;
  let obj = {};
  name ? (obj.name = { $regex: name, $options: "i" }) : null;
  brand ? (obj.brand = brand) : null;
  if (page) {
    let skip = +page * limit - limit;
    if (sort) {
      try {
        const dress = await DressModel.find(obj)
          .skip(skip)
          .limit(9)
          .sort(sort === "asc" ? { price: 1 } : { price: -1 });
        res.status(200).send({ msg: dress });
      } catch (error) {
        res.status(400).send(error);
      }
    } else {
      try {
        const dress = await DressModel.find(obj).skip(skip).limit(9);
        res.status(200).send({ msg: dress });
      } catch (error) {
        res.status(400).send(error);
      }
    }
  } else {
    if (sort) {
      try {
        const dress = await DressModel.find(obj).sort(
          sort === "asc" ? { price: 1 } : { price: -1 }
        );
        res.status(200).send({ msg: dress });
      } catch (error) {
        res.status(400).send(error);
      }
    } else {
      try {
        const dress = await DressModel.find(obj);
        res.status(200).send({ msg: dress });
      } catch (error) {
        res.status(400).send(error);
      }
    }
  }
});

/*------ Get a single dress ------*/
dressRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    let dress = await DressModel.findOne({ _id: id });
    res.status(200).send({ msg: dress });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

/* ------ Create one Dress ------ */
// Add Dress - for any authenticated user
dressRouter.post("/add", async (req, res) => {
  const { name, img, price, mrp, brand, rating } = req.body;

  try {
    const dress = new DressModel({ name, img, price, mrp, brand, rating, quantity: 100 });
    await dress.save();
    res.status(200).send({ msg: "Dress added Successfully", dress });
  } catch (error) {
    res.status(400).send({ err: error.message });
  }
});



// Decrease quantity based on order
dressRouter.patch("/order/:id", auth, async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const product = await DressModel.findById(id);
    if (!product) return res.status(404).send({ msg: "Product not found" });

    if (product.quantity < quantity) {
      return res.status(400).send({ msg: "Insufficient stock" });
    }

    product.quantity -= quantity;
    await product.save();

    res.status(200).send({ msg: "Order placed, quantity updated" });
  } catch (error) {
    res.status(500).send({ msg: "Error processing order", error });
  }
});


/* ------ Update Dress ------ */
dressRouter.patch("/update/:id", auth, async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  if (data.role === "admin") {
    try {
      await DressModel.findByIdAndUpdate({ _id: id }, data);
      res.status(200).send({ res: "Updated Dress Successfully" });
    } catch (error) {
      res.status(200).send(error);
    }
  } else {
    res.status(401).send({ msg: "You are not Authorized" });
  }
});

/* ------ Delete Dress ------ */
dressRouter.delete("/delete/:id", auth, async (req, res) => {
  const { id } = req.params;
  let data = req.body;
  if (data.role === "admin") {
    try {
      await DressModel.findByIdAndDelete({ _id: id });
      res.status(200).send({ res: "Deleted Dress Successfully" });
    } catch (error) {
      res.status(200).send(error);
    }
  } else {
    res.status(401).send({ msg: "You are not Authorized" });
  }
});

// exports
module.exports = { dressRouter };
