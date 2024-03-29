# Online-Bus-Ticket-Search-Portal
🚌 Online Bus Ticket System: A modern and user-friendly ticket reservation web page developed with Node.js and MySQL. </br>
 </br>   We used layered architecture (MVC) in our project. The benefit of using the layered architecture is that it provides readability, reusability, and flexibility when there is a problem in one place, without affecting the other parts. That's why we realized our project in a certain format.</br> 
 </br>  In project,  there are user and admin panels. We will briefly describe them below. Administration can access everything in the system. It can add a new company, update an existing company's information, or delete a company. All of these add, delete and edit operations can be done for the user, bus, seats and payment. In addition, the admin can see when users entered the system and what action they could take. For this, we have added the "Display Logs" section.
If you want to register to the system as admin, the user name should be admin. If the user's name is admin, they can access the page with these processes. A cookie has been added to provide these controls. Checks whether the logged in person is an admin or a user.
It may provide less extensive access than the user admin. The user can search for suitable bus tickets without logging into the system. However, if desired, information is added to the database after registering to the system from the register page. When he logs into the system at any time, his information will be accessed from the database. In addition to these, after the user lists the suitable bus tickets in our system, a buy button has been added for the purchase process.</br>
</br> 
# Screenshots
![Project Screenshot](https://github.com/fadime999/Online-Bus-Ticket-Search-Portal/blob/main/WEB_APPLICATIONS_NODEJS/Screenshots/s1.PNG)                     
_The page that will appear in the browser without any login._
</br>    
![Project Screenshot2](https://github.com/fadime999/Online-Bus-Ticket-Search-Portal/blob/main/WEB_APPLICATIONS_NODEJS/Screenshots/s2.PNG)
_The page that will appear in the browser after login._
</br>  
![Project Screenshot2](https://github.com/fadime999/Online-Bus-Ticket-Search-Portal/blob/main/WEB_APPLICATIONS_NODEJS/Screenshots/s3.PNG)
_Listing the tickets suitable for the query._
</br>  
![Project Screenshot2](https://github.com/fadime999/Online-Bus-Ticket-Search-Portal/blob/main/WEB_APPLICATIONS_NODEJS/Screenshots/s4.PNG)
_The page that the admin will see after logging in._
</br>  
![Project Screenshot2](https://github.com/fadime999/Online-Bus-Ticket-Search-Portal/blob/main/WEB_APPLICATIONS_NODEJS/Screenshots/s5.PNG)
_Admin edit page._
</br>  
![Project Screenshot2](https://github.com/fadime999/Online-Bus-Ticket-Search-Portal/blob/main/WEB_APPLICATIONS_NODEJS/Screenshots/s6.PNG)
_Displaying the log page to the admin._
