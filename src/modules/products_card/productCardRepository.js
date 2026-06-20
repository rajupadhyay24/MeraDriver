const prisma = require("../../config/prisma");

const findSubCategoryById = async (subCategoryId) => {
  return await prisma.subCategory.findUnique({
    where: {
      sub_category_id: BigInt(subCategoryId),
    },
  });
};

const create = async (data) => {
  return await prisma.productCard.create({
    data,
  });
};

const findAll = async () => {
  return await prisma.productCard.findMany({
    where: {
      deleted_at: null,
    },
    include: {
      subCategory: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
};

const findById = async (id) => {
  return await prisma.productCard.findUnique({
    where: {
      product_card_id: BigInt(id),
    },
    include: {
      subCategory: true,
    },
  });
};

const update = async (id, data) => {
  return await prisma.productCard.update({
    where: {
      product_card_id: BigInt(id),
    },
    data,
  });
};

const softDelete = async (id) => {
  return await prisma.productCard.update({
    where: {
      product_card_id: BigInt(id),
    },
    data: {
      deleted_at: new Date(),
    },
  });
};

module.exports = {
  findSubCategoryById,
  create,
  findAll,
  findById,
  update,
  softDelete,
};