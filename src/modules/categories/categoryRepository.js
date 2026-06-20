const prisma = require("../../config/prisma");

const findBySlug = async (slug) => {
  return await prisma.category.findUnique({
    where: {
      category_slug: slug,
    },
  });
};

const findAll = async () => {
  return await prisma.category.findMany({
    where: {
      deleted_at: null,
    },
    orderBy: {
      created_at: "desc",
    },
  });
};

const findById = async (id) => {
  return await prisma.category.findUnique({
    where: {
      category_id: BigInt(id),
    },
  });
};

const create = async (data) => {
  return await prisma.category.create({
    data,
  });
};

const update = async (id, data) => {
  return await prisma.category.update({
    where: {
      category_id: BigInt(id),
    },
    data,
  });
};

const softDelete = async (id) => {
  return await prisma.category.update({
    where: {
      category_id: BigInt(id),
    },
    data: {
      deleted_at: new Date(),
    },
  });
};


module.exports = {
  findBySlug,
  findAll,
  findById,
  create,
  update,
  softDelete,
};