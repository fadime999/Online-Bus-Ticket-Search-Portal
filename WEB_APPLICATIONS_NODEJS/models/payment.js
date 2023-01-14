const {DataTypes} = require("sequelize");
const sequelize = require("../data/db");
 
const payment = sequelize.define("payment",{
    payment_ID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    booking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount_paid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
        timestamps: false
});

async function sync() {
    await payment.sync();
}
sync();

module.exports = payment;