const customers = require("../models/customer");
const bcrypt = require("bcrypt");
const logger=require("../logger");

exports.get_register = async function(req, res){
    try{
        return res.render("auth/register", {
            title: "register",
        });
    }
    catch(err){
        console.log(err);
    }
}

//INSERT INTO `customers` (`customer_ID`,`Fname`,`Lname`,`phone`,`email`,`password`) VALUES (DEFAULT,?,?,?,?,?);
exports.post_register = async function(req, res){
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email_address = req.body.email_address;
    const phone_number = req.body.phone_number;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
        await customers.create({//sql sorgu
            Fname: first_name,
            Lname: last_name,
            email: email_address,
            phone: phone_number,
            password: hashedPassword
        });
        logger.logger.info('A customer has registered in the system.');
        return res.redirect("login");
    }
    catch(err){
        console.log(err);
    }
}


exports.get_login = async function(req, res){
    try{
        return res.render("auth/login", {
            title: "login",
        });
    }
    catch(err){
        console.log(err);
    }
}

exports.post_login = async function(req, res){
    const email = req.body.email_address;
    const password = req.body.password;
    try{
        const cus = await customers.findOne({//bu kayda uygun biri var mı database de sorgusu
            where:{
                email: email
            }
        });
        if(!cus){
            logger.logger.error('The customer entered the wrong username.'); 
            return res.render("auth/login", {
                title: "login",
                message: "Invalid Username"
            });

        }
        //password check
        const match = await bcrypt.compare(password, cus.password);//new library import      
        //login success
         if(match && cus.Fname != "admin"){
            logger.logger.info('Customer successfully logged in.');
            req.session.isAuth = true;
            req.session.fullname = cus.Fname;
           // res.cookie("isAuth", "user");//kullanıcı giriş yaptı ona uygun şeyleri ayarlamak için cookie ekledik
            return res.redirect("/users/main_page");//if login is success, user redirected main page
        }
        else if(match && cus.Fname == "admin"){
            req.session.isAuth = true;
            req.session.fullname = cus.Fname;
            //res.cookie("isAuth", "admin");//admin giriş yaptı ona uygun şeyleri ayarlamak için cookie ekledik
            return res.redirect("/admin/admin_display_list");//if login is success, user redirected main page
        }      
        //failed login
        logger.logger.error('The customer entered an invalid password.'); 
        return res.render("auth/login", {
            title: "login",
            message: "Invalid Password"
        });       
    }
    catch(err){
        console.log(err);
    }
}


