const http=require('http');
const express = require('express');
const web=require('./routes/web')
const app = express();
const cors = require('cors');
// require("dotenv").config();
const path = require('path');
const cookieParser = require('cookie-parser');
const deleteBorrowCron = require("./app/controller/adminBorrow/deleteBorrowCron");
const { Server } = require('socket.io');

const PORT = 3002; 
// const server = http.createServer(app);

    app.use(cookieParser()); 
    // const web = require("./routes/web");
    
    app.use(express.urlencoded({extended: false }));
    app.use(express.json());

    app.use(cors({origin:"http://localhost:3000",
        credentials:true
    }))

    
    
app.use("/", web);
const server = app.listen(PORT, () => {
console.log(`server is running at port '${PORT}'`);
});

const io = new Server(server);


io.on("connection", (socket) => {
  socket.emit("message", "hello connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("fetchbooks", () => {
    socket.broadcast.emit(`fetchAllBooks`);
  });

});

 



