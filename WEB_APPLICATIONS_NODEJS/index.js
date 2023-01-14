const { Router } = require("express");
const express=require("express");
const app=express();

const cookieParser = require('cookie-parser');//ceren
var session = require('express-session')

//node modules
const path=require("path");

//routes
const userRoutes=require("./routes/user");
const adminRoutes=require("./routes/admin");
const authRoutes = require("./routes/auth");


const sequelize = require("./data/db");
const locals = require("./middlewares/locals");

//template engine
app.set("view engine","ejs");

//middleware
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());//ceren
app.use(session({
  secret: "hello world",
  resave: false,
  saveUninitialized: false,
  cookie: {
      maxAge: 1000 * 60 * 60 * 24
  },
}));

app.use(locals);



app.use("/libs",express.static(path.join(__dirname,"node_modules")));
app.use("/static",express.static(path.join(__dirname,"node_modules")));

app.use("/admin",adminRoutes);
app.use("/account", authRoutes);
app.use("/users",userRoutes);
app.use("/views/users",userRoutes);
app.use(userRoutes);


//models
const Company = require("./models/companies");
const Bus = require("./models/buses");
const Customer = require("./models/customer");
const Ticket = require("./models/tickets");
const Seat = require("./models/seats");
const Routes = require("./models/routes");
const Payment = require("./models/payment");



//Relations
//one to many

Company.hasMany(Bus,{
      foreignKey:{
        name: 'company_id',
        allowNull: false,
       }
});
Bus.belongsTo(Company,{
  foreignKey:{
    name: 'company_id',
    allowNull: false,
   }
 });

//Customer - Ticket One-to-One
 Customer.hasOne(Ticket,{
  foreignKey:{
    name: 'customer_id',
    allowNull: false,
   }
 });
 Ticket.belongsTo(Customer,{
foreignKey:{
  name: 'customer_id',
  allowNull: false,
}
 });

//Ticket-Bus one to many
 Bus.hasMany(Ticket,{
  foreignKey:{
    name: 'bus_id',
    allowNull: false,
  }
});
Ticket.belongsTo(Bus,{
  foreignKey:{
    name: 'bus_id',
    allowNull: false,
   }
});

//Ticket-Route one to many
Routes.hasMany(Ticket,{
  foreignKey:{
    name: 'route_id',
    allowNull: false,
  }
});
Ticket.belongsTo(Routes,{
  foreignKey:{
    name: 'route_id',
    allowNull: false,
   }
});

// //Payment-Customer 
Customer.hasOne(Payment,{
  foreignKey:{
    name: 'customer_id',
    allowNull: false,
   }
 });
Payment.belongsTo(Customer,{
foreignKey:{
  name: 'customer_id',
  allowNull: false,
}
 });

// //Routes-Bus one-to-one
Bus.hasOne(Routes,{
  foreignKey:{
    name: 'bus_id',
    allowNull: false,
   }
 });
Routes.belongsTo(Bus,{
foreignKey:{
  name: 'bus_id',
  allowNull: false,
}
 });

// //Ticket-Seat One-to-One
Ticket.hasOne(Seat,{
  foreignKey:{
    name: 'ticket_id',
    allowNull: false,
   }
 });
 Seat.belongsTo(Ticket,{
foreignKey:{
  name: 'ticket_id',
  allowNull: false,
}
 });

//Seat-Bus One-to-Many
Bus.hasMany(Seat,{
  foreignKey:{
    name: 'bus_id',
    allowNull: false,
  }
});
Seat.belongsTo(Bus,{
  foreignKey:{
    name: 'bus_id',
    allowNull: false,
   }
});

//Relations Implemantation
  (async () => {
    await  sequelize.sync();   
  })();

app.listen(3000,function(){   
    console.log("listening on port 3000");
})
