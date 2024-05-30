const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUser = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    return res.json({ code: 200, meesage: "success", data: users });
  } catch (error) {
    next();
  }
};

const getOneUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findFirst({
      where: { id: id },
    });
    console.log("user", user);
    return res.json({ code: 200, meesage: "success", data: user });
  } catch (error) {
    next();
  }
};

const createUser = async (req, res, next) => {
  const { nama, email, alamat, no_telp, profile, profileUrl } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        nama: nama,
        email: email,
        alamat: alamat,
        no_telp: no_telp,
        profile: profile,
        profileUrl: profileUrl,
      },
    });
    return res.json({ code: 201, meesage: "create success", data: user });
  } catch (error) {
    next();
  }
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { nama, email, alamat, no_telp, profile, profileUrl } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id: id },
      data: {
        nama: nama,
        email: email,
        alamat: alamat,
        no_telp: no_telp,
        profile: profile,
        profileUrl: profileUrl,
      },
    });
    return res.json({ code: 200, meesage: "update success", data: user });
  } catch (error) {
    next();
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.delete({
      where: { id: id },
    });
    return res.json({ meesage: "delete success", data: user });
  } catch (error) {
    next();
  }
};

module.exports = { getAllUser, getOneUser, createUser, updateUser, deleteUser };
