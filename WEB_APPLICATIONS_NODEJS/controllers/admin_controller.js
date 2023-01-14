const Company = require("../models/companies");
const Bus = require("../models/buses");
const Customer = require("../models/customer");
const Ticket = require("../models/tickets");
const Routes = require("../models/routes");
const Payment = require("../models/payment");
const Seats = require("../models/seats");

//COMPANIES
exports.get_companies_list = async function(req,res,next){
    const size=5;
    const {page=0} = req.query;
     try{
         const {rows,count} = await Company.findAndCountAll({
            limit:size,
            offset:page*size
         });
          res.render("../views/admin/admin_companies_list",{
          title:"companies list",
          companies:rows,
          totalItems:count,
          totalPages:Math.ceil(count/size),
          currentPage:page
         });
    }
     catch(err){console.log(err);}
}

exports.create_companies = function(req,res,next){
    res.render("../views/admin/companies_create")
}

exports.get_delete_companies = async function(req,res,next){
    const companiesid = req.params.companiesid;
    try {
       const companies = await Company.findAll({
        where:{
            company_ID:companiesid
        }
       });
        const company = companies[0];
        res.render("../views/admin/companies_delete",{
            title:"delete company",
            company:company
        })
    } catch (error) {console.log(err)}
}

exports.post_delete_companies = async function(req,res,next){
    const companiesid = req.body.companiesid;
    try {
        await Company.destroy({
            where:{
                company_ID:companiesid
            }
        })
        res.redirect("../admin_companies_list")
    } catch (error) {console.log(err)}
}

exports.post_companies_create = async function(req,res,next){
    const company_ID = req.body.company_ID;
    const count_bus = req.body.count_bus;
    const name = req.body.name;
    const bus_code = req.body.bus_code;
    try {
        await Company.create({
            company_ID: company_ID,
            count_bus:count_bus,
            name:name,
            bus_code:bus_code
        })
        res.redirect("/admin/companies_create?action=create");
    } catch (err) {
        console.log(err);
    }
}

exports.get_companies_create_companiesid = async function(req,res,next){
    const companiesid = req.params.companiesid;
    try{
        const companies = await Company.findAll({
            where:{
                company_ID:companiesid
            }
        })
        const company = companies[0];
        if(company){
            res.render("../views/admin/companies_update",{
                title:"update company",
                company:company
            })
        }
    }
    catch(err){console.log(err)}
}

exports.post_companies_create_companiesid = async function(req,res,next){
    const companiesid = req.params.companiesid;
    const company_ID = req.body.company_ID;
    const count_bus = req.body.count_bus;
    const name = req.body.name;
    const bus_code = req.body.bus_code;
    try{
        const company = await Company.findByPk(companiesid)
        if (company) {
            company.company_ID = company_ID,
            company.count_bus = count_bus,
            company.name = name,
            company.bus_code = bus_code
            await company.save();
            res.redirect("/admin/companies_create?action=update&companiesid="+req.params.companiesid);
        }
    }catch(err){console.log(err);}

}

//BUS
exports.get_bus_list = async function(req,res,next){
    const size=5;
    const {page=0} = req.query;
    try{
        const {rows,count} = await Bus.findAndCountAll({
           limit:size,
           offset:page*size
        });
        res.render("../views/admin/admin_bus_list",{
         title:"buses list",
         buses:rows,
         totalItems:count,
         totalPages:Math.ceil(count/size),
         currentPage:page
        });
   }
    catch(err){console.log(err);}
}

exports.create_bus = function(req,res,next){
    res.render("../views/admin/bus_create")
}

exports.post_bus_create = async function(req,res,next){
    const bus_ID = req.body.bus_ID;
    const capacity = req.body.capacity;
    const count_available_seat = req.body.count_available_seat;
    const plate_number = req.body.plate_number;
    const company_name = req.body.company_name;
    const seats_type_id = req.body.seats_type_id;
    const route_code = req.body.route_code;
    const company_id = req.body.company_id;
    try {
        await Bus.create({
            bus_ID:bus_ID,
            capacity:capacity,
            count_available_seat:count_available_seat,
            plate_number:plate_number,
            company_name:company_name,
            seats_type_id:seats_type_id,
            route_code:route_code,
            company_id:company_id
        })
        res.redirect("/admin/bus_create?action=create");
    } catch (err) {
        console.log(err);
    }
}

exports.get_bus_create_busid = async function(req,res,next){
    const busid = req.params.busid;
    try{
        const buses = await Bus.findAll({
            where:{
                bus_ID:busid
            }
        })
        const bus = buses[0];
        if(bus){
            res.render("../views/admin/bus_update",{
                title:"update bus",
                bus:bus
            })
        }
    }
    catch(err){console.log(err)}
}

exports.post_bus_create_busid = async function(req,res,next){
    const busid = req.params.busid;
    const bus_ID = req.body.bus_ID;
    const capacity = req.body.capacity;
    const count_available_seat = req.body.count_available_seat;
    const plate_number = req.body.plate_number;
    const company_name = req.body.company_name;
    const seats_type_id = req.body.seats_type_id;
    const route_code = req.body.route_code;
    try{
        const bus = await Bus.findByPk(busid)
        if (bus) {
            bus.bus_ID = bus_ID,
            bus.capacity = capacity,
            bus.count_available_seat = count_available_seat,
            bus.plate_number = plate_number,
            bus.company_name = company_name,
            bus.seats_type_id = seats_type_id,
            bus.route_code = route_code
            await bus.save();
            res.redirect("/admin/bus_create?action=update&busid="+req.params.busid);
        }
    }catch(err){console.log(err);}

}

exports.get_delete_bus = async function(req,res,next){
    const busid = req.params.busid;
    try {
       const buses = await Bus.findAll({
        where:{
            bus_ID:busid
        }
       });
        const bus = buses[0];
        res.render("../views/admin/bus_delete",{
            title:"delete bus",
            bus:bus
        })
    } catch (error) {console.log(err)}
}

exports.post_delete_bus = async function(req,res,next){
    const busid = req.body.busid;
    try {
        await Bus.destroy({
            where:{
                bus_ID:busid
            }
        })
        res.redirect("../admin_bus_list")
    } catch (err) {console.log(err)}
}


//CUSTOMER
exports.get_customers_list = async function(req,res,next){
    const size=5;
    const {page=0} = req.query;

     try{
         const {rows,count} = await Customer.findAndCountAll({
            limit:size,
            offset:page*size
         });
          res.render("../views/admin/admin_customer_list",{
          title:"customer list",
          customers:rows,
          totalItems:count,
          totalPages:Math.ceil(count/size),
          currentPage:page
         });
    }
     catch(err){console.log(err);}
}

exports.create_customers = function(req,res,next){
    res.render("../views/admin/customer_create")
}

exports.post_customers_create = async function(req,res,next){
    const customer_ID = req.body.customer_ID;
    const Fname = req.body.Fname;
    const Minit = req.body.Minit;
    const Lname = req.body.Lname;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    try {
        await Customer.create({
            customer_ID:customer_ID,
            Fname:Fname,
            Minit:Minit,
            Lname:Lname,
            phone:phone,
            email:email,
            password:password
        })
        res.redirect("/admin/customer_create?action=create");
    } catch (err) {
        console.log(err);
    }
}

exports.get_customers_create_customersid = async function(req,res,next){
    const customerid = req.params.customerid;
    try{
        const customers = await Customer.findAll({
            where:{
                customer_ID:customerid
            }
        })
        const customer = customers[0];
        if(customer){
            res.render("../views/admin/customer_update",{
                title:"update customer",
                Customer:customer
            })
        }
       // res.redirect("../views/admin/admin_companies_list");
    }
    catch(err){console.log(err)}
}

exports.post_customers_create_customersid = async function(req,res,next){
    const customerid = req.params.customerid;
    const customer_ID = req.body.customer_ID;
    const Fname = req.body.Fname;
    const Minit = req.body.Minit;
    const Lname = req.body.Lname;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    try{
        const customer = await Customer.findByPk(customerid)
        if (customer) {
            customer.customer_ID = customer_ID,
            customer.Fname = Fname,
            customer.Minit = Minit,
            customer.Lname = Lname,
            customer.phone = phone,
            customer.email = email,
            customer.password = password
            await customer.save();
            res.redirect("/admin/customer_create?action=update&customerid="+req.params.customerid);
        }
    }catch(err){console.log(err);}

}

exports.get_delete_customers =  async function(req,res,next){
    const customerid = req.params.customerid;
    try {
       const customers = await Customer.findAll({
        where:{
            customer_ID:customerid
        }
       });
        const customer = customers[0];
        res.render("../views/admin/customer_delete",{
            title:"delete customer",
            Customer:customer
        })
    } catch (error) {console.log(err)}
}

exports.post_delete_customers = async function(req,res,next){
    const customerid = req.body.customerid;
    try {
        await Customer.destroy({
            where:{
                customer_ID:customerid
            }
        })
        res.redirect("../admin_customer_list")
    } catch (err) {console.log(err)}
}


//TICKETS
exports.get_tickets_list = async function(req,res,next){
    const size=4;
    const {page=0} = req.query;

     try{
         const {rows,count} = await Ticket.findAndCountAll({
            limit:size,
            offset:page*size
         });
          res.render("../views/admin/admin_ticket_list",{
          title:"ticket list",
          Ticket:rows,
          totalItems:count,
          totalPages:Math.ceil(count/size),
          currentPage:page
         });
    }
     catch(err){console.log(err);}
}

exports.create_tickets = function(req,res,next){
    res.render("../views/admin/ticket_create")
}

exports.post_tickets_create = async function(req,res,next){
    const ticket_ID = req.body.ticket_ID;
    const ticket_price = req.body.ticket_price;
    const seat_number = req.body.seat_number;
    const route_id = req.body.route_id;
    const bus_id = req.body.bus_id;
    const customer_id = req.body.customer_id;
    try {
        await Ticket.create({
            ticket_ID:ticket_ID,
            ticket_price:ticket_price,
            seat_number:seat_number,
            route_id:route_id,
            bus_id:bus_id,
            customer_id:customer_id,
        })
        res.redirect("/admin/ticket_create?action=create");
    } catch (err) {
        console.log(err);
    }
}

exports.get_tickets_create_ticketid = async function(req,res,next){
    const ticketid = req.params.ticketid;
    try{
        const tickets = await Ticket.findAll({
            where:{
                ticket_ID:ticketid
            }
        })
        const ticket = tickets[0];
        if(ticket){
            res.render("../views/admin/ticket_update",{
                title:"update ticket",
                Ticket:ticket
            })
        }
       // res.redirect("../views/admin/admin_companies_list");
    }
    catch(err){console.log(err)}
}

exports.post_tickets_create_ticketid = async function(req,res,next){
    const ticketid = req.params.ticketid;
    const ticket_ID = req.body.ticket_ID;
    const ticket_price = req.body.ticket_price;
    const seat_number = req.body.seat_number;
    const route_id = req.body.route_id;
    const bus_id = req.body.bus_id;
    const customer_id = req.body.customer_id;
    try{
        const ticket = await Ticket.findByPk(ticketid)
        if (ticket) {
            ticket.ticket_ID = ticket_ID,
            ticket.ticket_price = ticket_price,
            ticket.seat_number = seat_number,
            ticket.route_id = route_id,
            ticket.bus_id = bus_id,
            ticket.customer_id = customer_id,
            await ticket.save();
            res.redirect("/admin/ticket_create?action=update&ticketid="+req.params.ticketid);
        }
    }catch(err){console.log(err);}

}

exports.get_delete_tickets = async function(req,res,next){
    const ticketid = req.params.ticketid;
    try {
       const tickets = await Ticket.findAll({
        where:{
            ticket_ID:ticketid
        }
       });
        const ticket = tickets[0];
        res.render("../views/admin/ticket_delete",{
            title:"delete ticket",
            Ticket:ticket
        })
    } catch (error) {console.log(err)}
}
exports.post_delete_tickets = async function(req,res,next){
    const ticketid = req.body.ticketid;
    try {
        await Ticket.destroy({
            where:{
                ticket_ID:ticketid
            }
        })
        res.redirect("../admin_ticket_list")
    } catch (error) {console.log(err)}
}

//ROUTES
exports.get_routes_list = async function(req,res,next){
    const size=4;
    const {page=0} = req.query;

     try{
         const {rows,count} = await Routes.findAndCountAll({
            limit:size,
            offset:page*size
         });
          res.render("../views/admin/admin_routes_list",{
          title:"route list",
          Routes:rows,
          totalItems:count,
          totalPages:Math.ceil(count/size),
          currentPage:page
         });
    }
     catch(err){console.log(err);}
}

exports.create_routes = function(req,res,next){
    res.render("../views/admin/route_create")
}

exports.post_routes_create = async function(req,res,next){
    const route_ID = req.body.route_ID;
    const date = req.body.date;
    const travel_time = req.body.travel_time;
    const from = req.body.fromm;
    const to = req.body.too;
    const bus_id = req.body.bus_id;
    try {
        await Routes.create({
            route_ID:route_ID,
            date:date,
            travel_time:travel_time,
            fromm:from,      
            too:to,
            bus_id:bus_id,
        })
        res.redirect("/admin/route_create?action=create");
    } catch (err) {
        console.log(err);
    }
}

exports.get_routes_create_routesid = async function(req,res,next){
    const routeid = req.params.routeid;
    try{
        const routes = await Routes.findAll({
            where:{
                route_ID:routeid
            }
        })
        const route = routes[0];
        if(route){
            res.render("../views/admin/route_update",{
                title:"update route",
                Routes:route
            })
        }
       // res.redirect("../views/admin/admin_routes_list");
    }
    catch(err){console.log(err)}
}

exports.post_routes_create_routes_id=async function(req,res,next){

    const routeid = req.params.routeid;
    const route_ID = req.body.route_ID;
    const date = req.body.date;
    const travel_time = req.body.travel_time;
    const from = req.body.fromm;
    const to = req.body.too;
    const bus_id = req.body.bus_id;
    try{
        const route = await Routes.findByPk(routeid)
        if (route) {
            route.route_ID = route_ID,
            route.date = date,
            route.travel_time = travel_time,
            route.fromm = from,
            route.too = to,
            route.bus_id = bus_id,
            await route.save();
            res.redirect("/admin/route_create?action=update&routeid="+req.params.routeid);
        }
    }catch(err){console.log(err);}

}

exports.get_delete_routes = async function(req,res,next){
    const routeid = req.params.routeid;
    try {
       const routes = await Routes.findAll({
        where:{
            route_ID:routeid
        }
       });
        const route = routes[0];
        res.render("../views/admin/route_delete",{
            title:"delete route",
            Routes:route
        })
    } catch (error) {console.log(err)}
}

exports.post_delete_routes = async function(req,res,next){
    const routeid = req.body.routeid;
    try {
        await Routes.destroy({
            where:{
                route_ID:routeid
            }
        })
        res.redirect("../admin_routes_list")
    } catch (error) {console.log(err)}
}


//PAYMENT
exports.get_payment_list =async function(req,res,next){
    const size=4;
    const {page=0} = req.query;

     try{
         const {rows,count} = await Payment.findAndCountAll({
            limit:size,
            offset:page*size
         });
          res.render("../views/admin/admin_payment_list",{
          title:"payment list",
          Payment:rows,
          totalItems:count,
          totalPages:Math.ceil(count/size),
          currentPage:page
         });
    }
     catch(err){console.log(err);}
}

exports.create_payment =function(req,res,next){
    res.render("../views/admin/payment_create")
}

exports.post_payment_create =async function(req,res,next){
    const payment_ID = req.body.payment_ID;
    const date = req.body.date;
    const booking_id = req.body.booking_id;
    const amount_paid = req.body.amount_paid;
    const customer_id = req.body.customer_id;
    try {
        await Payment.create({
            payment_ID:payment_ID,
            date:date,
            booking_id:booking_id,
            amount_paid:amount_paid,      
            customer_id:customer_id,
        })
        res.redirect("/admin/payment_create?action=create");
    } catch (err) {
        console.log(err);
    }
}

exports.get_payment_create_paymentid = async function(req,res,next){
    const paymentid = req.params.paymentid;
    try{
        const payments = await Payment.findAll({
            where:{
                payment_ID:paymentid
            }
        })
        const payment = payments[0];
        if(payment){
            res.render("../views/admin/payment_update",{
                title:"update payment",
                Payment:payment
            })
        }
       // res.redirect("../views/admin/admin_routes_list");
    }
    catch(err){console.log(err)}
}

exports.post_payment_create_paymentid = async function(req,res,next){
    const paymentid = req.params.paymentid;
    const payment_ID = req.body.payment_ID;
    const date = req.body.date;
    const booking_id = req.body.booking_id;
    const amount_paid = req.body.amount_paid;
    const customer_id = req.body.customer_id;
    try{
        const payments = await Payment.findByPk(paymentid)
        if (payments) {
            payments.payment_ID = payment_ID,
            payments.date = date,
            payments.booking_id = booking_id,
            payments.amount_paid = amount_paid,
            payments.customer_id = customer_id,
            await payments.save();
            res.redirect("/admin/payment_create?action=update&paymentid="+req.params.paymentid);
        }
    }catch(err){console.log(err);}

}

exports.get_delete_payment =  async function(req,res,next){
    const paymentid = req.params.paymentid;
    try {
       const payments = await Payment.findAll({
        where:{
            payment_ID:paymentid
        }
       });
        const payment = payments[0];
        res.render("../views/admin/payment_delete",{
            title:"delete payment",
            Payment:payment
        })
    } catch (error) {console.log(err)}
}

exports.post_delete_payment = async function(req,res,next){
    const paymentid = req.body.paymentid;
    try {
        await Payment.destroy({
            where:{
                payment_ID:paymentid
            }
        })
        res.redirect("../admin_payment_list")
    } catch (error) {console.log(err)}
}

//SEATS
exports.get_seats_list =async function(req,res,next){
    const size=4;
    const {page=0} = req.query;

     try{
         const {rows,count} = await Seats.findAndCountAll({
            limit:size,
            offset:page*size
         });
          res.render("../views/admin/admin_seats_list",{
          title:"payment list",
          Seat:rows,
          totalItems:count,
          totalPages:Math.ceil(count/size),
          currentPage:page
         });
    }
     catch(err){console.log(err);}
}

exports.create_seats = function(req,res,next){
    res.render("../views/admin/seats_create")
}

exports.post_seats_create = async function(req,res,next){
    const seat_ID = req.body.seat_ID;
    const windows_side = req.body.windows_side;
    const available = req.body.available;
    const number = req.body.number;
    const ticket_id = req.body.ticket_id;
    const bus_id = req.body.bus_id;
    try {
        await Seats.create({
            seat_ID:seat_ID,
            windows_side:windows_side,
            available:available,
            number:number,      
            ticket_id:ticket_id,
            bus_id:bus_id,
        })
        res.redirect("/admin/seats_create?action=create");
    } catch (err) {
        console.log(err);
    }
}

exports.get_seats_create_seatsid = async function(req,res,next){
    const seatid = req.params.seatid;
    try{
        const seats = await Seats.findAll({
            where:{
                seat_ID:seatid
            }
        })
        const seat = seats[0];
        if(seat){
            res.render("../views/admin/seats_update",{
                title:"update payment",
                Seat:seat
            })
        }
       // res.redirect("../views/admin/admin_routes_list");
    }
    catch(err){console.log(err)}
}

exports.post_seats_create_seatsid= async function(req,res,next){
    const seatid = req.params.seatid;
    const seat_ID = req.body.seat_ID;
    const windows_side = req.body.windows_side;
    const available = req.body.available;
    const number = req.body.number;
    const ticket_id = req.body.ticket_id;
    const bus_id = req.body.bus_id;
    try{
        const seats = await Seats.findByPk(seatid)
        if (seats) {
            seats.seat_ID = seat_ID,
            seats.windows_side = windows_side,
            seats.available = available,
            seats.number = number,
            seats.ticket_id = ticket_id,
            seats.bus_id = req.body.bus_id;
            await seats.save();
            res.redirect("/admin/seats_create?action=update&seatid="+req.params.seatid);
        }
    }catch(err){console.log(err);}

}

exports.get_delete_seats =  async function(req,res,next){
    const seatid = req.params.seatid;
    try {
       const seats = await Seats.findAll({
        where:{
            seat_ID:seatid
        }
       });
        const seat = seats[0];
        res.render("../views/admin/seats_delete",{
            title:"delete seat",
            Seat:seat
        })
    } catch (error) {console.log(err)}
}

exports.post_delete_seats =async function(req,res,next){
    const seatid = req.body.seatid;
    try {
        await Seats.destroy({
            where:{
                seat_ID:seatid
            }
        })
        res.redirect("../admin_seats_list")
    } catch (error) {console.log(err)}
}