const { sequelize } = require("../../../database/models");
const db = require('../../../database/models/index')

const adminDashboard=()=>{
    return{
        async totalBooks(req,res){
            const data=await db.sequelize.models.book_details.findAll({
                where:{
                 deletedAt:null
                }
            })
           res.json(data.length)
        },

        async totalMembers(req,res){
            const data=await db.sequelize.models.users.findAll({
                where:{
                    role_id:2,
                    deletedAt:null
                }
            })
            res.json(data.length)
        },

        async loggedusers(req,res){
            const data=await db.sequelize.models.sessions.findAll({
                where:{
                    deletedAt:null, 
                },
                attributes: [
                    [sequelize.fn('DISTINCT', sequelize.col('user_id')), 'user_id'],
                ]
            })
            res.json(data.length)
        }
      
    }
}

module.exports=adminDashboard;