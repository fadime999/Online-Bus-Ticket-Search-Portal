const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");
 
const buses = sequelize.define("bus",{
    bus_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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
}, {
        timestamps: false
});

async function sync(){
    await buses.sync();
}
sync();

module.exports = buses;