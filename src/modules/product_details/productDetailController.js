const asyncHandler = require("../../utils/asyncHandler");
const productDetailService = require("./productDetailService");
const serializeBigInt = require("../../utils/serializeBigInt");


const createProductDetail = asyncHandler(
  async (req, res) => {

    const detail =
      await productDetailService.createProductDetail(
        req.body
      );

    return res.status(201).json({
      success: true,
      message: "Product details created successfully",
      data: serializeBigInt(detail),
    });
  }
);

const getAllProductDetails = asyncHandler(
  async (req, res) => {

    const details =
      await productDetailService.getAllProductDetails();

    return res.status(200).json({
      success: true,
      count: details.length,
      data: serializeBigInt(details),
    });
  }
);

const getProductDetailById = asyncHandler(
  async (req, res) => {

    const detail =
      await productDetailService.getProductDetailById(
        req.params.id
      );

    return res.status(200).json({
      success: true,
      data: serializeBigInt(detail),
    });
  }
);

const updateProductDetail = asyncHandler(
  async (req, res) => {

    const detail =
      await productDetailService.updateProductDetail(
        req.params.id,
        req.body
      );

    return res.status(200).json({
      success: true,
      message: "Product detail updated successfully",
      data: serializeBigInt(detail),
    });
  }
);

const deleteProductDetail = asyncHandler(
  async (req, res) => {

    await productDetailService.deleteProductDetail(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: "Product detail deleted successfully",
    });
  }
);

module.exports = {
  createProductDetail,
  getAllProductDetails,
  getProductDetailById,
  updateProductDetail,
  deleteProductDetail,
};