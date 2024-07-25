const cron = require('node-cron');
const { sequelize } = require("../../../database/models");
const db = require("../../../database/models/index");
const { where, Op } = require("sequelize");
const { format, addDays } = require("date-fns");
const { response } = require('express');

const deleteBorrowCron = () => {
    return{
        async deleteRequest(req,res){
            const data=await db.sequelize.models.borrow_details.findAll();
            console.log(data);
            res.json(data)
            data.map((ele)=>{
                // console.log(ele.due_date, "eleele.due_dateele.due_date"); 
                if(ele.due_date==new Date()){
                   db.sequelize.models.borrow_details.destroy({
                     where: {
                       due_date: ele.due_date,
                     },
                   });
                }
            })

        }
    }
}

   cron.schedule(" * * * * * ", async () => {
     deleteBorrowCron().deleteRequest;
   });

// module.exports=deleteBorrowCron