const AppError = require("../../utils/AppError");
const serializeBigInt = require("../../utils/serializeBigInt");
const productDetailRepository = require("./productDetailRepository");

const createProductDetail = async (data) => {

  const {
    product_card_id,
  } = data;

  const productCard =
    await productDetailRepository.findProductCardById(
      product_card_id
    );

  if (!productCard) {
    throw new AppError(
      "Product card not found",
      404
    );
  }

  const existingDetail =
    await productDetailRepository.findByProductCardId(
      product_card_id
    );

  if (existingDetail) {
    throw new AppError(
      "Details already exist for this product",
      400
    );
  }

  const detail =
    await productDetailRepository.create({
      ...data,
      product_card_id: BigInt(product_card_id),
    });

  return serializeBigInt(detail);
};

const getAllProductDetails = async () => {

  const details =
    await productDetailRepository.findAll();

  return serializeBigInt(details);
};

const getProductDetailById = async (id) => {

  const detail =
    await productDetailRepository.findById(id);

  if (!detail) {
    throw new AppError(
      "Product detail not found",
      404
    );
  }

  return serializeBigInt(detail);
};



const updateProductDetail = async (id, data) => {

  const detail =
    await productDetailRepository.findById(id);

  if (!detail) {
    throw new AppError(
      "Product detail not found",
      404
    );
  }

  const updatedDetail =
    await productDetailRepository.update(
      id,
      data
    );

  return serializeBigInt(updatedDetail);
};




const deleteProductDetail = async (id) => {

  const detail =
    await productDetailRepository.findById(id);

  if (!detail) {
    throw new AppError(
      "Product detail not found",
      404
    );
  }

  await productDetailRepository.softDelete(id);
};

module.exports = {
  createProductDetail,
  getAllProductDetails,
  getProductDetailById,
  updateProductDetail,
  deleteProductDetail,
};