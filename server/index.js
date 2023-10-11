const express=require('express');
const app=express();
const db=require("./models");
db.sequelize.sync().then(()=>{
    app.listen(8082,()=>{
        console.log("server running on 8082");
    });
});

