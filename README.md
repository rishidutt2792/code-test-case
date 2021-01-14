# coding-node
This is a repository for applicants to the Network Software submit coding exercises for review.

## Getting Started:
Built for Node Version: 12.x

1. Connect to a postgres data and copy credentials in knex.js file.
2. `npm install` within project folder to install dependencies.
3. Run command `npm run db:migrate` to create table in database
4. Run command `npm start` to start the server on port:8000.
5. Run command `npm run tests` to run sample unit tests.

## Api Endpoints
1. Get All pets - Get /pets
2. Add new pet - Post /pets  (Name,Age,Color are required fields).
3. Find pet -  Get /pets/{id}
4. Delete pet -  Delete /pets/{id}.
