const { raw } = require("mysql2");
const { sequelize } = require("../../../database/models");
const db = require('../../../database/models/index');
const { where } = require("sequelize");

const ManageUser=()=>{
    return{
        async displayUser(req,res){
            const data=await db.sequelize.models.users.findAll({
                where:{
                    deletedAt:null
                }
            })
            res.json(data)
        },

        async deleteuser(req,res){
            try{
                const data = await db.sequelize.models.users.destroy({
                  where: {
                    id: `${req.params.id}`,
                  },
                 
                });
                     res.status(200).send("user deleted succesfully");
                     console.log(data);
            }
            catch(error){
                console.log(error);
            }
        },
    }
}
module.exports=ManageUser;