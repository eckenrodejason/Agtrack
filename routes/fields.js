const {Router}= require('express');

const pool = require('../db');

const router = Router();

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




router.get('/monsters/:id', (request, response, next)=>{
    const {id}= request.params;
    
    pool.query('SELECT * FROM monsters WHERE = $1', [id], (err,res)=>{
        if (err) return next(err);
        response.json(res.rows);
    });
});

module.exports= router;