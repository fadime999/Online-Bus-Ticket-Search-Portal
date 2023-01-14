const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");
 
const search_tickets = sequelize.define("search_tickets",{
   ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    bus_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    count_available_seat: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    plate_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fromm: {
        type: DataTypes.STRING,
        allowNull: false
    },
    too: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ticket_price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    }, 
    {
        timestamps: false
    });

async function sync() {
    await search_tickets.sync();
}
sync();

module.exports = search_tickets;
