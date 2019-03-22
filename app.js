const fs = require('fs'); // file system for writing to our json file
const express = require('express');// server 
const bodyParser = require('body-parser'); //middleware 

const app = express();

app.use(bodyParser.json());

//get Activity ID
app.get('user_api/v1/activities/:id', (req, res)=>{

});


// Get listing activities
app.get('GET user_api/v1/activities', (req, res)=>{

});

//get a collection of jobs
app.get('GET user_api/v1/collection_jobs/:id', (req,res)=>{

});

//get a collection of jobs Listing
app.get('GET user_api/v1/collection_jobs/', (req,res)=>{

});

// Get a Company
app.get('/user_api/v1/companies/:id', (req,res)=>{

});
//Get a listing  of Companies
app.get('/user_api/v1/companies', (req,res)=>{

});

//Get a Farm
app.get('/user_api/v1/farms/:id', (req,res)=>{

});
//Get a listing of farms
app.get('/user_api/v1/farms', (req,res)=>{

});

//Get a Field
app.get('user_api/v1/fields/:id', (req,res)=>{

});
//Get Field Listing
app.get('user_api/v1/fields', (req,res)=>{

});
//Get a Field with season specified
app.get('user_api/v1/fields/:id', (req,res)=>{

});
//Get Field Listing with season specified
app.get('user_api/v1/fields', (req,res)=>{

});

// Get a Season
app.get('/user_api/v1/seasons/:id', (req,res)=>{

});

//Get season Listing
app.get('/user_api/v1/seasons', (req,res)=>{

});




