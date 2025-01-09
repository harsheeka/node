const {MongoClient} = require("mongodb");  //importing mongodb  from node.js driver

const url = "mongodb+srv://harshika:zal4qrG5Q059tQ3r@nodejsproject.i310n.mongodb.net/?retryWrites=true&w=majority&appName=nodeJsProject";
const client = new MongoClient(url); //creating instantce of mongodb

const dbName = 'nodejsproject';  //name of database we want to work upon

async function main() {
    await client.connect(); //connecting with mongodb
    console.log('Connected successfully to server');


    const db = client.db(dbName);
    const collection = db.collection('users');

    return 'done.';
    
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

