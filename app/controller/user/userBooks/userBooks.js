const { sequelize } = require("../../../../database/models");
const db = require("../../../../database/models/index");

const userBooks = () => {
  return {
    async getUserBooks(req, res) {
      try {
        const books = await db.sequelize.models.borrow_details.findAll({
          where: {
            user_id: req.params.id,
          },
          include: [
            {
              model: db.sequelize.models.book_details,
              required: false,
              attributes: ["title"],
            },
          ],
        });

        books.forEach((element) => {
          console.log(element.book_details, "element");
        });
        if (books.length === 0) {
          return res
            .status(400)
            .json({
              success: false,
              message: "user books not found",
              error: "user books not found",
            });
        } else {
          return res.status(200).json(books);
        }
      } catch (err) {
        console.log(err);
        return res
          .status(400)
          .json({
            success: false,
            message: "user books fetched failed",
            error: err,
          });
      }
    },
    async viewBook(req, res) {
        console.log(req.params.id, "req.params.id");
      const data = await db.sequelize.models.book_details.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: db.sequelize.models.publisher_details,
          },
          {
            model: db.sequelize.models.book_categories,
          },
        ],
      });
      console.log(data);
        return res.status(200).json(data);
    },
  };
};

module.exports = userBooks;
