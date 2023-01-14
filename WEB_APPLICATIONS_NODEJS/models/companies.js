const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");
 
const companies = sequelize.define("companies",{
    company_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    count_bus: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bus_code: {
        type: DataTypes.STRING,
        allowNull: false
    }}, {
        timestamps: false
});

async function sync() {
    await companies.sync();
}
sync();
module.exports = companies;