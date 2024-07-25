const { raw } = require("mysql2");
const { sequelize } = require("../../../../database/models");
const db = require("../../../../database/models/index");
const { Op, where } = require("sequelize");

const borrowRequest = () => {
  return {
    async borrowRequest(req, res) {
      const borrow = await db.sequelize.models.borrow_requests.findOne({
        where: {
          user_id: req.body.user_id,
          book_id: req.body.book_id,
        },
        raw: true,
      });
      console.log(borrow, "borrow");
      if (borrow == null) {
        console.log(req.body.user_id);
        const data = {
          user_id: req.body.user_id,
          book_id: req.body.book_id,
          start_date: req.body.start_date,
          end_date: req.body.end_date,
          req: 0,
        };
        await db.sequelize.models.borrow_requests.create(data);
        res.status(200).send("Books Request Submitted Succesfull");
      } else {
        return res.status(401).json({
          message: "Book already issued for borrow",
        });
      }
    },
  };
};

module.exports = borrowRequest;
