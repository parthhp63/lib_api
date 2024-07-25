const router = require("express").Router();
const booksCrud = require("../app/controller/books_crud/booksCrud");
const addAuthor = require("../app/controller/books_crud/addAuthor");
const addPublisher = require("../app/controller/books_crud/addPublisher");
const displayCrud = require("../app/controller/books_crud/displayCrud");
const booksCoverMulter = require("../app/middleware/booksCoverMulter");


router.get("/allBooks", displayCrud().allBooks);
router.post("/addauthor", addAuthor().addAuthors);
router.post("/addpublisher", addPublisher().addPublishers);

router.post(
  "/addbooks",
  booksCoverMulter.single("cover"),
  booksCrud().addBooks
);
router.post("/deletebook/:id", displayCrud().deleteBooks);
router.post('/updateauthor/:id',addAuthor().updateAuthor)
router.post('/updatePublisher/:id',addPublisher().updatePublisher)
router.post(
  "/updatebook/:id",
  booksCoverMulter.single("cover"),
  booksCrud().updateBook
);

router.get("/allpublisher", displayCrud().allPublisher);
router.post("/deletepublisher/:id", displayCrud().deletePublisher);

router.get("/allauthor", displayCrud().allAuthor);
router.post("/deleteauthor/:id", displayCrud().deleteAuthor);

router.get("/fetchauthor", booksCrud().fetchAuthor);
router.get("/fetchpublisher", booksCrud().fetchPublisher);

router.get("/editbooks/:id", displayCrud().editBooks);
router.get("/editauthor/:id",addAuthor().editAuthor);
router.get("/editpublisher/:id",addPublisher().editPublisher);
module.exports = router;

// http://localhost:3002/dashboard/${id}
