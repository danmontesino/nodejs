const Role = require("../models/role");
const User = require("../models/user");
const {Category, Product} = require("../models");

const isValidRol = async (role = '') => {
    const  existRole = await Role.findOne({role})
    if ( !existRole ) throw  new Error("The role is not valid")
}

const existEmail = async ( email = '') => {
    const  existEmail = await User.findOne({email})
    if ( existEmail ) throw  new Error("Mail already exists")
}

const existUserById = async ( id = '') => {
    const  existUserById = await User.findById(id)
    if ( !existUserById ) throw  new Error("No user exists for that id")
}

const existCategoryById = async ( id = '') => {
    const  existCategoryById = await Category.findById(id)
    if ( !existCategoryById ) throw  new Error("No category exists for that id")
}

const existCategoryBySlug = async ( slug = '') => {
    const  existCategoryBySlug = await Category.findOne({slug})
    if ( !existCategoryBySlug ) throw  new Error("No category exists for that slug")
}

const existProductById = async ( id = '') => {
    const  existProductById = await Product.findById(id)
    if ( !existProductById ) throw  new Error("No product exists for that id")
}

module.exports = {
    isValidRol,
    existEmail,
    existUserById,
    existCategoryById,
    existCategoryBySlug,
    existProductById
}