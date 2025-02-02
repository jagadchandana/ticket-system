-  Assumptions:
    1. I used React with inertia because Task not mention about frontend technologies.
    2. Customer open Ticket with problem 
        -> save data and send mail to customer with reference number.
        -> Agent can view all Tickets and view ticket. Then Agent can add solution to ticket. 
        -> send mail to customer with solution and reference number with view url.
        -> And agent can delete tickets.
        -> Customer Enter reference number and view Ticket he can check status, agent name and solution(if agent add solution)

-  Improvements:
    1. add Notification system.
    2. Laravel Queue use for stop delay response because mail send.

-  Technologies
    1. latest Laravel version.
    2. use Inertia.js Build single-page apps, without building an API -- <https://inertiajs.com/>(Create modern single-page  React, Vue, and Svelte apps using classic server-side routing. Works with any backend — tuned for Laravel.).
    3. Use Repository architecture.

-  Testing Instructions:
    1. run npm install
    2. run composer install
    3. create database and run mysql server
    4. update env. file for database details and mail serer service
    5. run php artisan key:generate
    6. run php artisan migrate
    7. open 3 terminal then,
        1. first terminal run npm run dev
        2. second terminal run php artisan serve
        3. third terminal run php artisan queue:work (for mail send I use queues for not to be late request response)
    8. then register as agent url '/register' or '/login'

-  Credits
    1. Laravel starter kit breez used.


Any case please contact me any time.(0774886154)

