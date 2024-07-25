const { sequelize } = require("../../../../database/models");
const db = require("../../../../database/models/index");
const {book_details, borrow_details, borrow_requests} = db;
const { Op, where } = require("sequelize");
const userBorrow = () => {
  return {
    async avilableBooks(req, res) {
      console.log(req.params.id);
      const books = await book_details.findAll({
        // raw: true,
        include: [
          {
            model: db.sequelize.models.borrow_details,
            required: false,
          },
          {
            model: borrow_requests,
          },
        ],
        where: {
          "$borrow_details.id$": null,
        },
      });


      // books.forEach((item)=>{
       
      // })
      res.json(books);
    },
  };
};

module.exports = userBorrow;
