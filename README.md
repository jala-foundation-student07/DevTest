# Installation

To use this API you need the following installed in your system:

* Node v18.17.1 or newer
* Docker
* Postman (or any REST Client)

# How to Run

First, build and run the docker container:

```
docker-compose up
```

Wait for the execution to finish until you see the following message on the log:

```
database system is ready to accept connections
```

Run the script to create the DB and tasks Table:

```
node tasks/createDB.js
```

Use nodemon in the root of the project to run the REST API:

```
nodemon
```

Open your REST Client and test the API!

# Extra

You can clean the database by running:

```
docker-compose down
```

But you will need to run the createDB script again.