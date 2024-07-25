const { sequelize } = require("../../../database/models");
const db = require('../../../database/models/index')
const bcrypt = require('bcrypt');
const authenticateUser =()=>{
    return{
        async checkUser(req,res){
            console.log('user is verified');
            return  res.status(200).send({success:true,
                    message:"user authenticated"
                });
  
            
        },
    }
}
module.exports=authenticateUser;