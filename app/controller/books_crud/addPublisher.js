const { raw } = require("mysql2");
const { sequelize } = require("../../../database/models");
const db = require("../../../database/models/index");

const addPublisher = () => {
  return {
    async addPublishers(req, res) {
      try {
        const data = req.body;
        console.log(data);
        let publishers = await db.sequelize.models.publisher_details.findOne({
          where: {
            unique_id: data.uniqueid,
          },
        });
        if (publishers != null) {
          return res
            .status(401)
            .send({ message: "Publisher already added in library" });
        } else {
          const publisher = {
            name: data.name,
            contact: data.no,
            address: data.address,
            unique_id: data.uniqueid,
          };
          console.log(publisher);
          await db.sequelize.models.publisher_details.create(publisher);
          res.status(200).send("publisher added succesfully");
        }
      } catch (error) {
        console.log(error);
        return res.status(401).send({ message: "Some Error happen" });
      }
    },

    async editPublisher(req, res) {
      try {
        const data = await db.sequelize.models.publisher_details.findOne({
          where: {
            id: `${req.params.id}`,
          },
        });
        res.json(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        return res
          .status(401)
          .send({ message: "Some Error happen while updating" });
      }
    },

    async updatePublisher(req, res) {
      try {
        console.log(req.body, "author body");
        const body = req.body;
        const data = {
          unique_id: body.uniqueid,
          name: body.name,
          address: body.address,
          contact: body.no,
        };
        await db.sequelize.models.publisher_details.update(data, {
          where: { id: req.params.id },
        });
        res.status(200).send("Publisher updated succesfully");
      } catch (error) {
        return res.status(401).send({ message: "Some Error happen" });
      }
    },
  };
};
module.exports = addPublisher;
