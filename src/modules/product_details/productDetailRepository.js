const prisma = require("../../config/prisma");

const findProductCardById = async (productCardId) => {
  return await prisma.productCard.findUnique({
    where: {
      product_card_id: BigInt(productCardId),
    },
  });
};

const findByProductCardId = async (productCardId) => {
  return await prisma.productDetail.findUnique({
    where: {
      product_card_id: BigInt(productCardId),
    },
  });
};

const create = async (data) => {
  return await prisma.productDetail.create({
    data,
  });
};

const findAll = async () => {
  return await prisma.productDetail.findMany({
    include: {
      productCard: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
};

const findById = async (id) => {
  return await prisma.productDetail.findUnique({
    where: {
      detail_id: BigInt(id),
    },
    include: {
      productCard: true,
    },
  });
};

const update = async (id, data) => {
  return await prisma.productDetail.update({
    where: {
      detail_id: BigInt(id),
    },
    data,
  });
};

const softDelete = async (id) => {
  return await prisma.productDetail.update({
   where: {
    detail_id: BigInt(id)
  },
  data: {
    deleted_at: new Date()
  },
  });
};


module.exports = {
  findProductCardById,
  findByProductCardId,
  create,
  findAll,
  findById,
  update,
  softDelete ,
};