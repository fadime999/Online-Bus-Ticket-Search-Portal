const search_tickets = require("../models/ticket_search");
const Customer = require("../models/customer");
const Tickets = require("../models/tickets");
const { Console } = require("winston/lib/winston/transports");

exports.get_online_bus_ticket = function(req,res,next){
    res.render("../views/users/index");    
}

exports.post_online_bus_ticket = async function(req,res,next){
    const from = req.body.From;
    const to = req.body.To;
    const date = req.body.Date;
    try{
      const tickets = await search_tickets.findAll({
          where:{
              fromm:from,
              too:to,
              date:date
          }
      })
         res.render("../views/users/list_ticket",{
         Tickets:tickets
         });
  }
  catch(err){console.log(err)}
}

exports.get_index = function(req,res,next){
    res.render("../views/users/index");    
}

exports.post_index = async function(req,res,next){
    const from = req.body.From;
    const to = req.body.To;
    const date = req.body.Date;
    try{
      const tickets = await search_tickets.findAll({
          where:{
              fromm:from,
              too:to,
              date:date
          }
      })
         res.render("../views/users/default_ticket_list",{
         Tickets:tickets
         });
  }
  catch(err){console.log(err)}
}

exports.get_main_page = function(req,res,next){
    res.render("../views/users/main_page");    
}

exports.post_main_page = async function(req,res,next){
    const from = req.body.From;
    const to = req.body.To;
    const date = req.body.Date;
    try{
      const tickets = await search_tickets.findAll({
          where:{
              fromm:from,
              too:to,
              date:date
          }
      })
         res.render("../views/users/list_ticket",{
         Tickets:tickets,
        // Customer:customer
         });
  }
  catch(err){console.log(err)}
}

exports.get_list_ticket = async function(req, res, next){
    const size=5;
    const {page=0} = req.query;
  
     try{
         const {rows,count} = await search_tickets.findAndCountAll({
            limit:size,
            offset:page*size
         });
          res.render("../views/users/list_ticket",{
          title:"ticketSearch list",
          Tickets:rows,
          totalItems:count,
          totalPages:Math.ceil(count/size),
          currentPage:page
         });
    }
     catch(err){console.log(err);}
}

exports.get_default_list_ticket = async function(req, res, next){
    const size=5;
    const {page=0} = req.query;
  
     try{
         const {rows,count} = await search_tickets.findAndCountAll({
            limit:size,
            offset:page*size
         });
          res.render("../views/users/default_ticket_list",{
          title:"ticketSearch list",
          Tickets:rows,
          totalItems:count,
          totalPages:Math.ceil(count/size),
          currentPage:page
         });
    }
     catch(err){console.log(err);}
}

exports.get_create_tickets = async function(req, res, next){
    res.render("../views/users/ticket_create")
}

exports.post_create_tickets = async function(req, res,) {
    const ticket_ID = req.body.ticket_ID;
    const ticket_price = req.body.ticket_price;
    const seat_number = req.body.seat_number;
    const route_id = 1;
    const bus_id = 1;
    const customer_id = 27;
    try {
        await Tickets.create({
            ticket_ID:ticket_ID,
            ticket_price:ticket_price,
            seat_number:seat_number,
            route_id:route_id,
            bus_id:bus_id,
            customer_id:customer_id,
        })
        res.redirect("/users/ticket_create?action=create");
    } catch (err) {
        console.log(err);
    }
}