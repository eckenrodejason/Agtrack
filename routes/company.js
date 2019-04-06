const {Router}= require('express');

const pool = require('../db');

const router = Router();

// Get a Company
app.get('/user_api/v1/companies/:id', (req,res)=>{

});
//Get a listing  of Companies
app.get('/user_api/v1/companies', (req,res)=>{

});


router.get('/monsters/:id', (request, response, next)=>{
    const {id}= request.params;
    
    pool.query('SELECT * FROM monsters WHERE = $1', [id], (err,res)=>{
        if (err) return next(err);
        response.json(res.rows);
    });
});

module.exports= router;