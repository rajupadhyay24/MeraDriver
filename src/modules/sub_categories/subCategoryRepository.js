const prisma = require("../../config/prisma");

const findCategoryById = async (categoryId) => {
  return await prisma.category.findUnique({
    where: {
      category_id: BigInt(categoryId),
    },
  });
};

const findBySlug = async (slug) => {
  return await prisma.subCategory.findUnique({
    where: {
      sub_category_slug: slug,
    },
  });
};

const create = async (data) => {
  return await prisma.subCategory.create({
    data,
  });
};

const findAll = async () => {
  return await prisma.subCategory.findMany({
    where: {
      deleted_at: null,
    },
    include: {
      category: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
};

const findById = async (id) => {
  return await prisma.subCategory.findUnique({
    where: {
      sub_category_id: BigInt(id),
    },
    include: {
      category: true,
    },
  });
};

const update = async (id, data) => {
  return await prisma.subCategory.update({
    where: {
      sub_category_id: BigInt(id),
    },
    data,
  });
};

const softDelete = async (id) => {
  return await prisma.subCategory.update({
    where: {
      sub_category_id: BigInt(id),
    },
    data: {
      deleted_at: new Date(),
    },
  });
};

module.exports = {
  findCategoryById,
  findBySlug,
  create,
  findAll,
  findById,
  update,
  softDelete,
};