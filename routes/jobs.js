const {Router}= require('express');

const pool = require('../db');

const router = Router();

// *************** Old Place Holders*******************

//get a collection of jobs
app.get('GET user_api/v1/collection_jobs/:id', (req,res)=>{

});

//get a collection of jobs Listing
app.get('GET user_api/v1/collection_jobs/', (req,res)=>{

});
// *************EVerything above this line is old/ placeholders**********

router.get('GET user_api/v1/collection_jobs/:id', (request, response, next)=>{
    const {id}= request.params;
   
    pool.query('SELECT * FROM somedb WHERE some condition ', [id], (err,res)=>{
        //do something here
        if (err) return next(err);
        response.json(res.rows);
    });
   
});


router.get('GET user_api/v1/collection_jobs/', (request, response, next)=>{
    const {id}= request.params;
   
    pool.query('SELECT * FROM somedb WHERE some condition ', [id], (err,res)=>{
        //do something here
        if (err) return next(err);
        response.json(res.rows);
    });
   
});

module.exports= router;