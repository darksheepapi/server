const axios = require('axios');
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
app.get('/',(req,res)=>{
// Replace this with your actual Dropbox access token
const accessToken = 'sl.Bp4SX4mkq72xtoIhZ0cPfQPsxcd5eJ9lXEishj2QVArLNrvEukA9vNHSi0rFnAVvM_vME7n8FBA5pf1IPkrNvDU1OU-2eZ8qe0yLnXpP6dG7_ODBNgKmsiyzQGfthDcV2mNtfqm2bG2HVoY';

// Dropbox API endpoint for listing files
const listFilesEndpoint = 'https://api.dropboxapi.com/2/files/list_folder';

// Data for the POST request
const requestData = {
  path: '',
  recursive: false,
  include_media_info: false,
  include_deleted: false,
  include_has_explicit_shared_members: false,
  include_mounted_folders: true,
};

// Make the HTTP request
axios.post(listFilesEndpoint, requestData, {
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    // Handle the response containing the list of files
    console.log('Files:', response.data);
     res.send(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error.response.data);
      res.send(error.response.data);
  });
      res.send("Loading....");
    
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
