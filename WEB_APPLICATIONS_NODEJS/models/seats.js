const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");
 
const seats = sequelize.define("seats",{
    seat_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    windows_side: {
        type: DataTypes.STRING,
        allowNull: false
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
        timestamps: false
});


async function sync(){
    await seats.sync();
}
sync();
module.exports = seats;