const { raw } = require("mysql2");
const { Op } = require("sequelize");
const { sequelize } = require("../../../database/models");
const db = require("../../../database/models/index");

const booksCrud = () => {
  return {
    async fetchAuthor(req, res) {
      try {
        // console.log(req.body, "fetch author");
        const data = await db.sequelize.models.author_details.findAll({
          attributes: ["id", "name"],
          raw: true,
        });
        // console.log(data, "data");
        res.send(data);
      } catch (error) {
        console.log(error);
      }
    },

    async fetchPublisher(req, res) {
      const data = await db.sequelize.models.publisher_details.findAll({
        attributes: ["id", "name"],
        raw: true,
      });
      // console.log(data, "data");
      res.send(data);
    },

    async addBooks(req, res) {
      console.log(req.body, "books body");
      // console.log(req.files,'files opf vbosjb');
      try {
        let book = await db.sequelize.models.book_details.findOne({
          where: {
            isbn: `${req.body.isbn}`,
          },
        });
        if (book != null) {
          return res
            .status(401)
            .json({ message: "Books already added in library" });
        } else {
          const category = await db.sequelize.models.book_categories.findOne({
            where: {
              type: `${req.body.category_id}`,

            },
            raw: true,
          });
          const publisher = await db.sequelize.models.publisher_details.findOne(
            {
              where: {
                id: `${req.body.publisher}`,
              },
              raw: true,
            }
          );

          const author = await db.sequelize.models.author_details.findOne({
            where: {
              id: `${req.body.author}`,
            },
            raw: true,
          });

          const books = {
            // category_id: category[0].id,
            author_id: `${req.body.author}`,
            publisher_id: `${req.body.publisher}`,
            title: `${req.body.title}`,
            isbn: `${req.body.isbn}`,
            description: `${req.body.description}`,
            photo: `${req.file.path}`,
            price: `${req.body.price}`,
          };
          console.log(books);
          await db.sequelize.models.book_details.create(books);
          res.status(200).send("book added succesfully");
        }
      } catch (error) {
        console.log(error);
        return res.status(401).send({ message: "Some Error happen" });
      }
    },

    async updateBook(req, res) {
      console.log("in upsdfhasy8fgas");
      console.log(req.body, "books body");
      console.log(req.body.publisher,'sdopgjho')
      try {
        // const category = await db.sequelize.models.book_categories.findOrCreate(
        //   {
        //     where: {
        //       type: `${req.body.category_id}`,
        //     },
        //     raw: true,
        //   }
        // );
        const publisher = await db.sequelize.models.publisher_details.findOne({
          where: {
            name: `${req.body.publisher_id}`,
          },
          raw: true,
        });

        const books = {
          // category_id: category[0].id,
          author_id:`${req.body.author}`,
          publisher_id: `${req.body.publisher}`,
          title: `${req.body.title}`,
          isbn: `${req.body.isbn}`,
          description: `${req.body.description}`,
          price: `${req.body.price}`,
        };
        await db.sequelize.models.book_details.update(books, {
          where: { id: req.params.id },
        });
        res.status(200).send("book updated succesfully");
      } catch (error) {
        console.log(error);
        return res
          .status(401)
          .send({ message: "Some Error happen while updating" });
      }
      // const data=await db.sequelize.models.book_details.update()
    },
  };
};
module.exports = booksCrud;
