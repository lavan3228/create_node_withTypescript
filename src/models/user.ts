import * as Sequelize from 'sequelize';

import connectSequelize from "../connectiondb"

let user = connectSequelize.define("user",{

    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name :{
        type:Sequelize.STRING,
        allowNull:false
    },
    number :{
        type:Sequelize.STRING,
        allowNull:false
    },
    mail:{
        type: Sequelize.STRING,
        allowNull: false
    },
    address:{
        type: Sequelize.STRING,
        allowNull:false
    }
},
{
    freezeTableName:true,
    timestamps:false
})

module.exports = user