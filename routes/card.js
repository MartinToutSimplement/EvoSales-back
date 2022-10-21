var express = require('express');
var records = require('../data/card');
var router = express.Router();


router.get('/', function (req, res, next) {
    console.log("Send all cards")
    res.send(JSON.stringify(records));
});

router.get('/kt', function (req, res, next) {
    res.send(JSON.stringify(records.filter(checkKt)));
});

router.get('/bedding', function (req, res, next) {
    res.send(JSON.stringify(records.filter(checkBedding)));
});

router.get('/hp', function (req, res, next) {
    res.send(JSON.stringify(records.filter(checkHp)));
});

router.post('/tiakola', function (req, res, next) {
    records.push(req.body);
    console.log("Bien envoyé 11 43")
    res.send(JSON.stringify(records));
});

function checkKt(record){
    return record.category == "kitchen tools";
}

function checkBedding(record){
    return record.category == "bedding";
}

function checkHp(record){
    return record.category == "Household products";
}
module.exports = router;