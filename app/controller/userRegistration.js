const db = require("../../database/models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRegistration = () => {
  return {
    async addUser(req, res) {
      try {
        // const active_pin = randomstring.generate(7);
        const emailcheck = await db.sequelize.models.users.findOne({
          where: { email: `${req.body.email}` },
        });
        console.log(emailcheck);

        if (emailcheck != null) {
          return res.status(401).json({ message: "Email Already Exists" });
        } else {
          const password = await bcrypt.hash(`${req.body.password}`, 5);
          const data = {
            fname: `${req.body.fname}`,
            lname: `${req.body.lname}`,
            role_id: "2",
            email: `${req.body.email}`,
            dob: `${req.body.dob}`,
            contact: `${req.body.no}`,
            age: `${req.body.age}`,
            gender: `${req.body.gender}`,
            profession: `${req.body.profession}`,
            address: `${req.body.address}`,
            password: password,
            // active_pin: active_pin,
          };
          console.log(data);

          await db.sequelize.models.users.create(data);

          res.status(200).send("ok");
        }
      } catch (error) {
        console.log(error);
        res.send(error);
      }
    },

    async login(req, res) {
      try{
        console.log(req.body);
        const user = await db.sequelize.models.users.findOne({ where: { email: `${req.body.email}` } });
        if(user==null){
            return res.status(401).json({message:"Wrong Credentials"})
        }
        else if(user!==null){
            let password=await bcrypt.compare(`${req.body.password}`, user.password);
            console.log('password---------',password);
            if(password==false || password==null){
                return res.status(401).json({message:"Wrong Credentials"})
            }
            else{
                let payload={
                    user:user.id,
                }
                const token=await jwt.sign(payload,'Parth12',{expiresIn:'1h'});
                res.cookie('token',token,{
                    httpOnly:true,
                    maxAge:360000
                })
                console.log('req.cookie',`${token}`);
                
                const session={
                    user_id:user.id,
                    session:token,
                }
                await db.sequelize.models.sessions.create(session);
                // console.log(session);
              return  res.status(200).send({user:user,token:token });
            }
        }
    }catch(error){
        console.log(error);
    }
    },  

    async logout(req,res){
      console.log('token',req.cookies.token);
      console.log(req?.user,'req.user');
      try{
          await db.sequelize.models.sessions.destroy({
            where: {
              user_id: `${req.user}`,
              session: `${req.cookies.token}`,
            },
          });
          res.clearCookie("token");
          // res.redirect("/login");
                    return res
                      .status(200)
                      .send({ success: true, message: "user Logged Out" });
  
      }catch(error){
        console.log(error);
      }
    }

  };
};
module.exports = userRegistration;
