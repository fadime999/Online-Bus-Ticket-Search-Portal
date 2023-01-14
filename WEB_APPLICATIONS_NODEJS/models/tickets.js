const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");
 
const tickets = sequelize.define("tickets",{
    ticket_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ticket_price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seat_number: {
        type: DataTypes.STRING,
        allowNull: true
    },}, {
        timestamps: false
});


async function sync(){
    await tickets.sync();
}
sync();
module.exports = tickets;