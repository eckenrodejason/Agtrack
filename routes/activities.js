const {Router}= require('express');
// change db
const pool = require('../db');

const router = Router();

//get Activity ID
app.get('user_api/v1/activities/:id', (req, res)=>{

});


// Get listing activities
app.get('GET user_api/v1/activities', (req, res)=>{

});


router.get('/monsters/:id', (request, response, next)=>{
    const {id}= request.params;
    
    pool.query('SELECT * FROM monsters WHERE = $1', [id], (err,res)=>{
        if (err) return next(err);
        response.json(res.rows);
    });
});

module.exports= router;