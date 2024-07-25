const { raw } = require("mysql2");
const { sequelize } = require("../../../database/models");
const db = require("../../../database/models/index");
const { where, Op } = require("sequelize");

const adminBorrowActive = () => {
  return {
    async borrowActive(req, res) {
        try{
            const data = await db.sequelize.models.borrow_details.findAll({
              include: [
                {
                  model: db.sequelize.models.book_details,
             
                },
                {
                  model: db.sequelize.models.users,
                },
              ],
            });
            // console.log(data);
                  return res.status(200).send(data );
        }catch(error){
            console.log(error);
        }
    },
  };
};

module.exports = adminBorrowActive;
