const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");
 
const routes = sequelize.define("routes",{
    route_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    travel_time: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fromm: {
        type: DataTypes.STRING,
        allowNull: false
    },
    too: {
        type: DataTypes.STRING,
        allowNull: false
    }}, {
        timestamps: false
});


async function sync(){
    await routes.sync();
}
sync();
module.exports = routes;