Assumptions:
- List any assumptions you made during the development process.

Improvements:
- Describe any improvements or optimizations you implemented in the project.

Testing Instructions:
-   1. run npm install
    2. run composer install
    3. create database and run mysql server
    4. update env. file for database details and mail serer service
    5. run php artisan key:generate
    6. run php artisan migrate
    7. open 3 terminal then,
        1. first terminal run npm run dev
        2. second terminal php artisan serve
        3. third terminal run php artisan queue:work (for mail send I use queues for not to be late request response)
    8. then register as agent url '/register'


