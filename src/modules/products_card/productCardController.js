const asyncHandler = require("../../utils/asyncHandler");
const productCardService = require("./productCardService");
const serializeBigInt = require("../../utils/serializeBigInt");


const createProductCard = asyncHandler(
  async (req, res) => {

    const productCard =
      await productCardService.createProductCard(
        req.body
      );

    return res.status(201).json({
      success: true,
      message: "Product card created successfully",
      data: serializeBigInt(productCard),
    });
  }
);

const getAllProductCards = asyncHandler(
  async (req, res) => {

    const productCards =
      await productCardService.getAllProductCards();

    return res.status(200).json({
      success: true,
      count: productCards.length,
      data: serializeBigInt(productCards),
    });
  }
);

const getProductCardById = asyncHandler(
  async (req, res) => {

    const productCard =
      await productCardService.getProductCardById(
        req.params.id
      );

    return res.status(200).json({
      success: true,
      data: serializeBigInt(productCard),
    });
  }
);

const updateProductCard = asyncHandler(
  async (req, res) => {

    const productCard =
      await productCardService.updateProductCard(
        req.params.id,
        req.body
      );

    return res.status(200).json({
      success: true,
      message: "Product card updated successfully",
      data: serializeBigInt(productCard),
    });
  }
);

const deleteProductCard = asyncHandler(
  async (req, res) => {

    await productCardService.deleteProductCard(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: "Product card deleted successfully",
    });
  }
);

module.exports = {
  createProductCard,
  getAllProductCards,
  getProductCardById,
  updateProductCard,
  deleteProductCard,
};