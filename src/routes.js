const express = require('express');
const { actors, drama, actor_drama } = require('./models');
const router = express.Router();

// List of all dramas in the database
router.get('/dramas/all', async (req, res) => {
    try {
        const dramas = await drama.findAll();
        res.send(dramas);
    } catch (err) {
        res.status(500).send({
            error: 'An error occured trying to find all the dramas'
        });
    }
});

// List of all actors in the database
router.get('/actors/all', async (req, res) => {
    try {
        const users = await actors.findAll();
        res.send(users);
    } catch (err) {
        res.status(500).send({
            error: 'An error occured trying to find all the actors'
        })
    }
})

// List of all dramas with associations
router.get('/actors', async (req, res) => {
    try {
        const actor = await actors.findAll({
            include: [{
                model: drama
            }]
        });
        res.send(actor);
    } catch (err) {
        res.status(500).send({
            error: 'An error occured getting all the actors.'
        })
    }
})

// List of all actors with associates
router.get('/dramas', async (req, res) => {
    try {
        const dramas = await drama.findAll({
            include: [{
                model: actors
            }]
        })
        res.send(dramas);
    } catch (err) {
        res.status(500).send({
            error: 'An error occured getting all the dramas'
        })
    }
})

// Adding actors
router.post('/add/actor', async(req, res) => {
    try {
        const actor = await actors.create({
            name: req.body.name,
            age: req.body.age,
            country: req.body.country
        })
        res.send(actor);
    } catch (err) {
        res.status(500).send({
            error: 'An error occured adding an actor'
        })
    }
})

// Adding dramas
router.post('/add/drama', async (req, res) => {
    try {
        const newDrama = await drama.create({
            name: req.body.name,
            episodes: req.body.episodes,
            country: req.body.country
        })
        res.send(newDrama);
    } catch (err) {
        res.status(500).send({
            error: 'An error occured adding a drama'
        })
    }
})

// Adding associations 
router.post('/add/associations', async (req, res) => {
    try {
        const dramas = await drama.findOne({
            where: {name: req.body.dramaname}
        });
        const actor = await actors.findOne({
            where: {name: req.body.actorname}
        });
        const result = await actor_drama.create({
            actorId: actor.id,
            dramaId: dramas.id
        })
        res.send(result);
    } catch (err) {
        res.status(500).send({
            error: 'Invalid Association Information'
        })
    }
})

// Search By Actor
router.post('/search/actors', async (req, res) => {
    try {
        const actor = await actors.findAll({
            where: {name: req.body.name},
            include: [{
                model: drama
            }]
        })
        res.send(actor.map(result => result.dramas));
    } catch (err) {
        res.status(500).send({
            error: 'Search not found'
        })
    }
})

module.exports = router;
