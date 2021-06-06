# Multiplica Backend

The scope of PHP API Restful application is to generate CRUD endpoints.
The list of endpoint:
- Register
- Login
- Color index
- Color show
- Color edit
- Color store
- Color update
- Color delete

The project has two github repositories,

For PHP API Backend: https://github.com/santdev404/multiplica-PHP-API

For Angular Frontend: https://github.com/santdev404/multiplica-Front

The communications between PHP backend and Angular Frontend is through URL with API calls.

## Technologies

Backend
LAMP stock
- PHP 7.4.3
- Laravel 8.0
- MariaDB
- Apache
- Composer
- Firebase/JWT

Frontend
- Node v16.2.0
- NPM  7.13.0
- Angular Cli 12

Below are the instructions to setup all the tools and config all the requires angular files. 
I strongly recommend to perform all the installations on a machine with Ubuntu 20.0 operational system.

## Angular
Please follow the below instrution to setup the Angular enviroment:

> Once the PHP installation steps are finished clone the `https://github.com/santdev404/multiplica-Front` inside `/var/www/html/projects/` directory.

- Move to /var/www/html/projects/multiplicaFront  directory and run

```
npm install
```

- Then start the angular project.
```
ng serve
```
- Open a new browser and type the next url.
```
http://localhost:4200
```

## Login Instructions
- To register a new user please enter the below url or click on `registro` option and enter a valid email and password
```
http://localhost:4200/registro
```

## Login Instructions
-To login enter the below url or click on `login` option.
```
http://localhost:4200/login
```

> Only the `admin@admin.com` account wil be able to create, update and delete the color records on the project.
> The rest of the accounts only will be allowed to list the color records.

