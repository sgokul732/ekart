const express = require('express');
var router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId

var { PostMessage } = require('../Models/PostMessage');



router.get('/', (req, res) => {
    PostMessage.find((error, docs) => {
        if (!error) {
            res.send(docs);
        }
        else {
            console.log("Error in fetching records" + JSON.stringify(error, undefined, 2));
        }
    })
})


router.post('/', (req, res) => {
    var newRecord = new PostMessage({
        title: req.body.title,
        message: req.body.message
    })
    newRecord.save((error, docs) => {
        if (!error) {
            res.send(docs);
        }
        else {
            console.log("Error while creating new records" + JSON.stringify(error, undefined, 2));
        }
    })
})

router.put('/:id', (req, res) => {

    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send("No record with id" + req.param.id);
    }
    var updatedRecord = new PostMessage({
        title: req.body.title,
        message: req.body.message
    })
   
    PostMessage.findByIdAndUpdate(req.params.id, { $set: { title: req.body.title,message:req.body.message } },{new:true},  (error, docs) => {
        if (!error) {
            return res.send(docs);
        }
        else {
            console.log("Error while updating records" + JSON.stringify(error, undefined, 2));
        }
    })
})

router.delete('/:id', (req, res) => {

    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send("No record with id" + req.param.id);
    }
   
    PostMessage.findByIdAndRemove(req.params.id, (error, docs) => {
        if (!error) {
            res.send(docs);
        }
        else {
            console.log("Error while deleting records" + JSON.stringify(error, undefined, 2));
        }
    })
})

module.exports = router