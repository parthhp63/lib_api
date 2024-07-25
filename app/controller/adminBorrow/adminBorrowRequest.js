const { raw } = require("mysql2");
const { sequelize } = require("../../../database/models");
const db = require("../../../database/models/index");
const { where, Op } = require("sequelize");
const { format, addDays } = require("date-fns");
const adminBorrowRequest = () => {
  return {
    async borrowRequest(req, res) {
      try {
        const data = await db.sequelize.models.borrow_requests.findAll({
          where: {
            req: 0,
          },
          raw: true,
        });
        res.json(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },

    async borrowRequestAccept(req, res) {
      try {
        console.log(req.body, "req.bodyyyy");
        const query = await db.sequelize.models.borrow_requests.findOne({
          where: { id: req.body.id },
        });

        const request = await db.sequelize.models.borrow_requests.update(
          { req: 1 },
          {
            where: {
              id: query.id,
            },
          }
        );
         const data = await db.sequelize.models.borrow_requests.update(
           { req: -1 },
           {
             where: {
               book_id: query.book_id,
               user_id: { [Op.ne]: query.user_id },
             },
           }
         );
         const date=new Date();
        const borrow_details = {
          user_id: query.user_id,
          isbn_id: query.book_id,
          borrow_period: 7,
          issue_date: date,
          due_date: addDays(date, 7),
        };
        console.log(borrow_details);
        const addBook = await db.sequelize.models.borrow_details.create(
          borrow_details
        );
       
        res.status(200).send("book request accepted ");
      } catch (error) {
        console.log(error);
      }
    },

    async borrowRequestReject(req, res) {
      try {
        const query = await db.sequelize.models.borrow_requests.update(  { req: -1 },
          {
            where: {
              id: req.body.id,
            },
          });
        res.status(200).send("book request rejected ");
      } catch (error) {
        console.log(error);
      }
    },
  };
};

module.exports = adminBorrowRequest;
