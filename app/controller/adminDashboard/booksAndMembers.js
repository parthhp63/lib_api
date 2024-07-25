const { raw } = require("mysql2");
// const {}
const { sequelize } = require("../../../database/models");
const db = require('../../../database/models/index')

const booksAndMembers=()=>{
    return{
        async latestBooks(req,res){
            const data = await db.sequelize.models.book_details.findAll({
              where: {
                deletedAt: null,
              },
              order: [[db.Sequelize.literal("createdAt"), "ASC"]],
              limit: 5,
            });
           res.json(data)
           console.log(data);
        },

        async latestMembers(req,res){
            const data=await db.sequelize.models.users.findAll({
                where:{
                 deletedAt:null,
                 role_id:2,
                },
              order: [[db.Sequelize.literal("createdAt"), "ASC"]],
              limit: 5,
            })
           res.json(data)
           console.log(data);
        },

        
        
    }
}

module.exports=booksAndMembers;