const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");
 
const customers = sequelize.define("customers",{
    customer_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Fname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Minit: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Lname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }}, {
        timestamps: false
});


async function sync(){
    await customers.sync();
}
sync();
module.exports = customers;