const { sequelize } = require("../../../database/models");
const db = require('../../../database/models/index')

const displayCrud=()=>{
    return{
        async allBooks(req,res){
            try{
                const data=await db.sequelize.models.book_details.findAll({
                    where:{
                     deletedAt:null
                    }
                })
               res.json(data)
               console.log(data);
            }catch(error){
                console.log(error);
            }
        },

        async deleteBooks(req,res){
            try{
                const data = await db.sequelize.models.book_details.destroy(
                    {
                        where: {
                            id: `${req.params.id}`,
                        },
                    });
                     res.status(200).send("Book deleted succesfully");
            }
            catch(error){
                console.log(error);
            }
        },

        async allPublisher(req,res){
            try{
                const data=await db.sequelize.models.publisher_details.findAll({
                    where:{
                     deletedAt:null
                    }
                })
               res.json(data)
               console.log(data);
            }catch(error){
                console.log(error);
            }
        
        },

        async deletePublisher(req,res){
            try{
                const data = await db.sequelize.models.publisher_details.destroy(
                    {
                        where: {
                            id: `${req.params.id}`,
                        },
                    });
                     res.status(200).send("Publisher deleted succesfully");
            }
            catch(error){
                console.log(error);
            }
        },

        async allAuthor(req,res){
            try{
                const data=await db.sequelize.models.author_details.findAll({
                    where:{
                     deletedAt:null
                    }
                })
               res.json(data)
               console.log(data);
            }catch(error){
                console.log(error);
            }           
                           
        },               
                          
        async deleteAuthor(req,res){
            try{     
                const data = await db.sequelize.models.author_details.destroy(
                    {
                        where: {
                            id: `${req.params.id}`,
                        },
                    });
                     res.status(200).send("Publisher deleted succesfully");
            }         
            catch(error){
                console.log(error);
               
            }       
        },          
        async editBooks(req,res){
            try{    
                const data = await db.sequelize.models.book_details.findOne({
                  where: {
                    id: `${req.params.id}`,
                  },
                  include: [
                    {
                      model: db.sequelize.models.publisher_details,
                    },
                    {
                      model: db.sequelize.models.author_details,
                    },
                  ],
                });  
               res.json(data)
               console.log(data);
               
            }
            catch(error){
                console.log(error);
                return res
                  .status(401)
                  .send({ message: "Some Error happen while updating" });
            }
        },  
          
    }       
}             
module.exports=displayCrud;