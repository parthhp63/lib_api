const { raw } = require("mysql2");
const { sequelize } = require("../../../database/models");
const db = require('../../../database/models/index')

const addAuthor=()=>{
    return{
    async addAuthors(req, res) {
        try {
            const data=req.body;

            console.log(data);
            let authors = await db.sequelize.models.author_details.findOne({
                where: {
                  unique_id:data.uniqueid,
                },
              });
              if (authors != null) {
                return res.status(401).send({ message: "Author already added in library" });
              } else {
            const author = {
                unique_id:data.uniqueid,
              name:data.name,
              contact:data.no,
              description:data.description,
              rating: data.rating,
            };
            console.log(author);
            await db.sequelize.models.author_details.create(author);
            res.status(200).send({message:"author added succesfully"});
          }
        } catch (error) {
          console.log(error);
        }
      },
        async editAuthor(req,res){
                try{
                   const data = await db.sequelize.models.author_details.findOne({
                     where: {
                       id: `${req.params.id}`,
                     },
                   });
                   res.json(data);
                   console.log(data);
               

                }catch(error){
                    console.log(error);
                    return res
                      .status(401)
                      .send({ message: "Some Error happen while updating" });
                }
            },

      async updateAuthor(req,res){
        try {
          console.log(req.body,'author body');
          const body=req.body;
          const data = {
            unique_id: body.uniqueid,
            name: body.name,
            description: body.description,
            contact:body.no,
            rating: body.rating,
          };
          await db.sequelize.models.author_details.update(data, {
            where: { id: req.params.id },
          });
          res.status(200).send("Author updated succesfully");
        }catch(error){
          return res.status(401).send({ message: "Some Error happen" });
        }
      }
    };
}
module.exports = addAuthor;