const slugify = require("slugify");
const serializeBigInt = require("../../utils/serializeBigInt");
const subCategoryRepository = require("./subCategoryRepository");
const AppError = require("../../utils/AppError");




const createSubCategory = async (data) => {
  const {
    category_id,
    sub_category_name,
    icon,
    description,
    status,
  } = data;

  const category =
    await subCategoryRepository.findCategoryById(category_id);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const sub_category_slug = slugify(sub_category_name, {
    lower: true,
    strict: true,
  });

  const existingSubCategory =
    await subCategoryRepository.findBySlug(sub_category_slug);

  if (existingSubCategory) {
    throw new AppError(" SubCategory already exists", 400);
  }

  const subCategory =
    await subCategoryRepository.create({
      category_id: BigInt(category_id),
      sub_category_name,
      sub_category_slug,
      icon,
      description,
      status,
    });

  return serializeBigInt(subCategory);
};




const getAllSubCategories = async () => {
  const subCategories =
    await subCategoryRepository.findAll();

  return serializeBigInt(subCategories);
};



const getSubCategoryById = async (id) => {
  const subCategory =
    await subCategoryRepository.findById(id);

  if (!subCategory) {
    throw new AppError("SubCategory not found", 404);
  }

  return serializeBigInt(subCategory);
};



const updateSubCategory = async (id, data) => {
  const {
    category_id,
    sub_category_name,
    icon,
    description,
    status,
  } = data;

  const category =
    await subCategoryRepository.findCategoryById(category_id);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const subCategory =
    await subCategoryRepository.findById(id);

  if (!subCategory) {
     throw new AppError("Sub Category not found", 404);
  }

  const sub_category_slug = slugify(sub_category_name, {
    lower: true,
    strict: true,
  });

  const updatedSubCategory =
    await subCategoryRepository.update(id, {
      category_id: BigInt(category_id),
      sub_category_name,
      sub_category_slug,
      icon,
      description,
      status,
    });

  return serializeBigInt(updatedSubCategory);
};

const deleteSubCategory = async (id) => {
  const subCategory =
    await subCategoryRepository.findById(id);

  if (!subCategory) {
   throw new AppError("Sub Category not found", 404);
  }

  await subCategoryRepository.softDelete(id);
};

module.exports = {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
};  