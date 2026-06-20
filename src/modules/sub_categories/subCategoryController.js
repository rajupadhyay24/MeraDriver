const subCategoryService = require("./subCategoryService");
const serializeBigInt = require("../../utils/serializeBigInt");



const createSubCategory = async (req, res) => {
  try {
    const subCategory =
      await subCategoryService.createSubCategory(req.body);

    return res.status(201).json({
      success: true,
      message: "Sub category created successfully",
      data: serializeBigInt(subCategory),
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllSubCategories = async (req, res) => {
  try {
    const subCategories =
      await subCategoryService.getAllSubCategories();

    return res.status(200).json({
      success: true,
      count: subCategories.length,
      data: serializeBigInt(subCategories),
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSubCategoryById = async (req, res) => {
  try {
    const subCategory =
      await subCategoryService.getSubCategoryById(
        req.params.id
      );

    return res.status(200).json({
      success: true,
      data: serializeBigInt(subCategory),
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateSubCategory = async (req, res) => {
  try {
    const subCategory =
      await subCategoryService.updateSubCategory(
        req.params.id,
        req.body
      );

    return res.status(200).json({
      success: true,
      message: "Sub category updated successfully",
      data: serializeBigInt(subCategory),
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteSubCategory = async (req, res) => {
  try {
    await subCategoryService.deleteSubCategory(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: "Sub category deleted successfully",
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
};