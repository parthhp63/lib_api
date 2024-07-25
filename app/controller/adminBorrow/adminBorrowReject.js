const { raw } = require("mysql2");
const { sequelize } = require("../../../database/models");
const db = require("../../../database/models/index");
const { where, Op } = require("sequelize");

const adminBorrowReject=()=>{
    return{
        async borrowReject(req,res){
            try{
                const data = await db.sequelize.models.borrow_requests.findAll({
                  where: {
                    req: -1,
                  },
                  include: [
                    {
                      model: db.sequelize.models.book_details,
                    },{
                        model: db.sequelize.models.users,
                    }
                  ],
                });
                      return res.status(200).send(data);
            }catch(error){
                console.log(error);
            }

        }
    }
}

module.exports=adminBorrowReject;