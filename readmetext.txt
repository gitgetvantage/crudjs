// const { Router } = require("express");
const express = require("express");
// const alien = require("../models/alien");
// const alien = require("../models/alien");
const router = express.Router()
const Alien = require('../models/alien')

router.get('/',async(req, res ) =>{
    try{
        // fetch data from 
        const aliens = await Alien.find() 
        res.json(aliens)

    }
    catch(err){
        res.send('Error', err)

    }
})

router.get('/:id',async(req, res ) =>{
    try{
        // fetch data from 
        const alien = await Alien.findById(req.params.id) 
        res.json(alien)

    }
    catch(err){
        res.send('Error', err)

    }
})

router.post('/',async(req, res) =>{
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        const aliendata = await alien.save()
        res.json(aliendata)

    }
    catch(err){
        res.send('Error', err)

    }

})

// router.patch('/:id',async(req, res) =>{
//     try{
//         const alien = await Alien.findById(req.params.id)
//         alien.sub = req.body.sub
//         // alien.tech = req.body.tech,
//         // alien.name = req.body.name
//         const aliendata = await alien.save()
//         res.json(aliendata)

//     }
//     catch(err){
//         res.send('Error', err)

//     }
// })

module.exports = router