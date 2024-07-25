const { sequelize } = require("../../../../database/models");
const db = require("../../../../database/models/index");
const { Op, where } = require("sequelize");

const borrowDetails = () => {
  return {
    async borrowBookdetails(req, res) {
      try {
        const book = await db.sequelize.models.book_details.findOne({
          where: {
            id: req.params.id,
          },

          include: [
            {
              model: db.sequelize.models.publisher_details, // assuming the publisher model is named "publishers"
              attributes: ["name"],
              // only retrieve the "name" column from the publishers table
            },
            {
              model: db.sequelize.models.book_categories, // assuming the category model is named "categories"
              attributes: ["type"], // only retrieve the "name" column from the categories table
            },
          ],
        });
        res.status(200).send(book);
        console.log(book);
      } catch (error) {
        console.log(error);
      }
    },
  };
};

module.exports = borrowDetails;
