const router = require('express').Router();
let Excersise = require('../models/excersie.model');

router.route('/').get((req, res) => {
    Excersise.find()
    .then(Excersises=> res.json(Excersises))
    .catch(err=> res.status(400).json('Error: '+err));

});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = date.parse(req.body.parse);
    

    const NewExercise = new Exercise({
        username,description,duration,date
    })
});

module.exports = router;