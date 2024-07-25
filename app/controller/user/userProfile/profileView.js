const { sequelize } = require("../../../../database/models");
const db = require("../../../../database/models/index");

const profileView=()=>{
return{
    async profile(req,res){
        console.log(req.user);
        const user = await db.User.findByPk(req.user.id);
           res.json(data);
    }
}
}

module.exports=profileView;