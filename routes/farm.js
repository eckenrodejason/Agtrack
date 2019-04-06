const {Router}= require('express');

const pool = require('../db');

const router = Router();

//Get a Farm
app.get('/user_api/v1/farms/:id', (req,res)=>{

});
//Get a listing of farms
app.get('/user_api/v1/farms', (req,res)=>{

});


router.get('/monsters/:id', (request, response, next)=>{
    const {id}= request.params;
    
    pool.query('SELECT * FROM monsters WHERE = $1', [id], (err,res)=>{
        if (err) return next(err);
        response.json(res.rows);
    });
});

module.exports= router;