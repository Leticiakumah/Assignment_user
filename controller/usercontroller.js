// const { json } = require('express/lib/response');
const usermodel = require('../model/usermodel');


async function addUser(request,response){
try {
    const newuser = await usermodel.create(request.body);
    response.status(200).json(newuser);
} catch (error) {
    console.log("Something went wrong",error.message);
}
}

async function getAllUser(request,response){
    try {
        const getAll = await usermodel.find();
        response.status(200).json(getAll);
    } catch (error) {
        console.log("Something went wrong",error.message);
        response.status(400);
    }
}
async function getUserById(request,response){
  try {
    const get1user = await usermodel.findById(request.params.userId);
    response.status(200).json(get1user);
  } catch (error) {
    console.log("Something went wrong",error.message);
    // response.status(400);
  }
}

async function updateById(request,response){
try {
    const update = await usermodel.findByIdAndUpdate(request.params.userId,request.body);
    response.status(200).json(update);
} catch (error) {
    console.log("Something went wrong",error.message);
}

}

async function deleteById(request,response){
    try {
        await usermodel.findByIdAndDelete(request.params.userId);
    response.status(200).json({message:"user deleted"});
    } catch (error) {
        console.log("something went wrong",error.message);
    }
}
module.exports ={
    addUser,
    getAllUser,
    updateById,
    deleteById,
    getUserById
}