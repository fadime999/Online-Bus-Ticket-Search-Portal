const express =require("express");
const router=express.Router();


const { response } = require("express");
const adminController = require("../controllers/admin_controller");

//LOG DISPLAY
router.get("/log_display",function(req,res,next){
    res.render("../views/admin/log_display")
})

//Admin display
router.get("/admin_display_list",function(req,res,next){
    res.render("../views/admin/admin_display_list")
})

//Companies Operations
router.get("/admin_companies_list",adminController.get_companies_list)

router.get("/companies_delete/:companiesid", adminController.get_delete_companies)

router.post("/companies_delete/:companiesid",adminController.post_delete_companies)

router.get("/companies_create",adminController.create_companies)

router.post("/companies_create",adminController.post_companies_create)

router.get("/companies_create/:companiesid",adminController.get_companies_create_companiesid)

router.post("/companies_create/:companiesid",adminController.post_companies_create_companiesid)
//Bus Operations
router.get("/admin_bus_list",adminController.get_bus_list)

router.get("/bus_create",adminController.create_bus)

router.post("/bus_create",adminController.post_bus_create)

router.get("/bus_create/:busid",adminController.get_bus_create_busid)

router.post("/bus_create/:busid",adminController.post_bus_create_busid)

router.get("/bus_delete/:busid", adminController.get_delete_bus)

router.post("/bus_delete/:busid",adminController.post_delete_bus)

//Customer Operations
router.get("/admin_customer_list",adminController.get_customers_list)

router.get("/customer_create",adminController.create_customers)

router.post("/customer_create",adminController.post_customers_create)

router.get("/customer_create/:customerid",adminController.get_customers_create_customersid)

router.post("/customer_create/:customerid",adminController.post_customers_create_customersid)

router.get("/customer_delete/:customerid",adminController.get_delete_customers)

router.post("/customer_delete/:customerid",adminController.post_delete_customers)


//Ticket Operations
router.get("/admin_ticket_list",adminController.get_tickets_list)

router.get("/ticket_create",adminController.create_tickets)

router.post("/ticket_create",adminController.post_tickets_create)

router.get("/ticket_create/:ticketid",adminController.get_tickets_create_ticketid)

router.post("/ticket_create/:ticketid",adminController.post_tickets_create_ticketid)

router.get("/ticket_delete/:ticketid", adminController.get_delete_tickets)

router.post("/ticket_delete/:ticketid",adminController.post_delete_tickets)


//Routes Operations
router.get("/admin_routes_list",adminController.get_routes_list)

router.get("/route_create",adminController.create_routes)

router.post("/route_create",adminController.post_routes_create)

router.get("/route_create/:routeid",adminController.get_routes_create_routesid)

router.post("/route_create/:routeid",adminController.post_routes_create_routes_id)

router.get("/route_delete/:routeid",adminController.get_delete_routes)

router.post("/route_delete/:routeid",adminController.post_delete_routes)

//Payment Operations
router.get("/admin_payment_list",adminController.get_payment_list)

router.get("/payment_create",adminController.create_payment)

router.post("/payment_create",adminController.post_payment_create)

router.get("/payment_create/:paymentid",adminController.get_payment_create_paymentid)

router.post("/payment_create/:paymentid",adminController.post_payment_create_paymentid)

router.get("/payment_delete/:paymentid",adminController.get_delete_payment)

router.post("/payment_delete/:paymentid",adminController.post_delete_payment)


//Seats Operations
router.get("/admin_seats_list",adminController.get_seats_list)

router.get("/seats_create",adminController.create_seats)

router.post("/seats_create",adminController.post_seats_create)

router.get("/seats_create/:seatid",adminController.get_seats_create_seatsid)

router.post("/seats_create/:seatid",adminController.post_seats_create_seatsid)

router.get("/seats_delete/:seatid",adminController.get_delete_seats)

router.post("/seats_delete/:seatid",adminController.post_delete_seats)

module.exports=router;