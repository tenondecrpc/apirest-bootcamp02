//OS LINUX-UBUNTU-14.04
//INSTALLATION NODEJS
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

//INSTALLATION GIT
sudo apt-get install git

//INSTALLATION POSTGRESQL
sudo apt-get install postgresql postgresql-contrib pgadmin3

//INSTALLATION OF GLOBALS LIBRARIES
sudo npm install -g pg pg-hstore
sudo npm install -g sequelize-cli
sudo npm install -g nodemon

//OS WINDOWS-10
//INSTALLATION NODEJS
https://nodejs.org/dist/v10.8.0/node-v10.8.0-x64.msi

//INSTALLATION GIT
https://git-scm.com/download/win

//INSTALLATION POSTGRESQL
https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

//INSTALLATION OF GLOBALS LIBRARIES
npm install -g pg pg-hstore
npm install -g sequelize-cli
npm install -g nodemon

//COMMANDS SEQUELIZE-CLI
  init                              Initializes project
  init:config                       Initializes configuration
  init:migrations                   Initializes migrations
  init:models                       Initializes models
  migration:generate                Generates a new migration file
  model:generate                    Generates a model and its migration
  db:migrate                        Run pending migrations
  //More commands
  https://github.com/sequelize/cli  

//MODEL AND MIGRATION GENERATION COMMANDS
sequelize model:generate --name Hotel --attributes nombre:string,direccion:string,latitud:decimal,longitud:decimal,imagenUrl:string
sequelize db:migrate
