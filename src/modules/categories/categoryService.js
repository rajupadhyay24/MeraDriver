const slugify = require("slugify");
const serializeBigInt = require("../../utils/serializeBigInt");
const categoryRepository = require("./categoryRepository");
const AppError = require("../../utils/AppError");

// CREATE
const createCategory = async (data) => {
  const existingCategory = await categoryRepository.findBySlug(
    data.category_slug,
  );

  if (existingCategory) {
    throw new AppError("Category slug already exists", 400);
  }

  const category = await categoryRepository.create(data);

  return serializeBigInt(category);
};

//READ
const getAllCategories = async () => {
  return await categoryRepository.findAll();
};

const getCategoryById = async (id) => {
  const category = await categoryRepository.findById(id);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return category;
};

// UPDATE
const updateCategory = async (id, data) => {
  const category = await categoryRepository.findById(id);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const category_slug = slugify(data.category_name, {
    lower: true,
    strict: true,
  });

  return await categoryRepository.update(id, {
    ...data,
    category_slug,
  });
};

// DELETE
const deleteCategory = async (id) => {
  const category = await categoryRepository.findById(id);

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  return await categoryRepository.softDelete(id);
};

//EXPORT
module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
