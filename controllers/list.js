//Bringing in Express
const express = require('express');
const listsController = express.Router();
const List = require('../models/list.js');

// Index
listsController.get('/', (req, res) => {
    List.find({}, (error, allLists) => {
        res.render('Index', {
            item: allLists,
        });
    });
});

// Create
listsController.post('/', (req, res) => {
    if (req.body.isComplete === 'on') {
        req.body.isComplete = true;
    } else {
        req.body.isComplete = false;
    }
    
    List.create(req.body, (error, createdList) => {
        res.redirect('/');
    });
});

//DELETE ROUTE
listsController.delete('/:id', (req, res) => {
    List.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/');
    });
});

//Export
module.exports = listsController;