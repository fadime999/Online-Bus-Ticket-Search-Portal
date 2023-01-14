const express =require("express");
const router=express.Router();

const userController = require("../controllers/user_controller");

router.get("/",userController.get_online_bus_ticket)

router.post("/",userController.post_online_bus_ticket)

router.get("/index",userController.get_index)

router.post("/index",userController.post_index)

router.get("/main_page",userController.get_main_page)

router.post("/main_page",userController.post_main_page)

router.get("/list_ticket",userController.get_list_ticket)

router.get("/default_ticket_list",userController.get_default_list_ticket)

router.get("/ticket_create",userController.get_create_tickets)

router.post("/ticket_create",userController.post_create_tickets)

module.exports=router;