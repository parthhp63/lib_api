const jwt = require("jsonwebtoken");
cookieParser = require("cookie-parser");

const authMiddleware = async(req, res,next) => {
      try {
        // console.log('the auth middleware is callimg');\
        console.log("sendinf now");

        const token =
          req.cookies.token ||
          req.body.token ||
          req.header("Authorization")?.replace("Bearer ", "");

        console.log(token, "token");
        // res.json(token);
        if (!token) {
          return res.status(401).json({ message: "No token" });
        }
        try {
          console.log('decoded');
          const decoded = await jwt.verify(token, "Parth12");
          console.log( decoded,"req.user.user");
          req.user = decoded.user;
        } catch(error) {
          return res.status(401).json({
           message: "token  invalid",
          });
        }
        console.log('sendinf next');
        next();
      } catch (error) {
        console.log(error);
        return res.status(401).json({
          message: `Something Went Wrong`,
        });
      }
};
module.exports = authMiddleware;