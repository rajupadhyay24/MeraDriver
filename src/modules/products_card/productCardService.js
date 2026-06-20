const AppError = require("../../utils/AppError");
const serializeBigInt = require("../../utils/serializeBigInt");
const productCardRepository = require("./productCardRepository");

const createProductCard = async (data) => {

  const subCategory =
    await productCardRepository.findSubCategoryById(
      data.sub_category_id
    );

  if (!subCategory) {
    throw new AppError(
      "Sub Category not found",
      404
    );
  }

  const productCard =
    await productCardRepository.create({
      ...data,
      sub_category_id: BigInt(data.sub_category_id),
    });

  return serializeBigInt(productCard);
};

const getAllProductCards = async () => {

  const productCards =
    await productCardRepository.findAll();

  return serializeBigInt(productCards);
};

const getProductCardById = async (id) => {

  const productCard =
    await productCardRepository.findById(id);

  if (!productCard) {
    throw new AppError(
      "Product card not found",
      404
    );
  }

  return serializeBigInt(productCard);
};

const updateProductCard = async (id, data) => {

  const existingCard =
    await productCardRepository.findById(id);

  if (!existingCard) {
    throw new AppError(
      "Product card not found",
      404
    );
  }

  const subCategory =
    await productCardRepository.findSubCategoryById(
      data.sub_category_id
    );

  if (!subCategory) {
    throw new AppError(
      "Sub Category not found",
      404
    );
  }

  const updatedCard =
    await productCardRepository.update(id, {
      ...data,
      sub_category_id: BigInt(data.sub_category_id),
    });

  return serializeBigInt(updatedCard);
};

const deleteProductCard = async (id) => {

  const existingCard =
    await productCardRepository.findById(id);

  if (!existingCard) {
    throw new AppError(
      "Product card not found",
      404
    );
  }

  await productCardRepository.softDelete(id);
};

module.exports = {
  createProductCard,
  getAllProductCards,
  getProductCardById,
  updateProductCard,
  deleteProductCard,
};