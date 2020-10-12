const express = require('express')
import { Request, Response, NextFunction, RequestHandler } from "express";
const router  = express.Router()
const Pokemon = require('./database/schemas/pokemon')

//console.log('eee')

//get ALL
router.get('/', async(req: Request, res: Response) => {
try{
    //console.log('enterd')
    const pokemons = await Pokemon.find()
    res.json(pokemons)
}
catch(e){
    res.status(500).json({message: e.message})
}} )


//Get One
router.get('/:id', getPokemons, (req: Request, res: Response) => {
    res.send(req.params.id)
} )

//creating One
router.post('/', async(req: Request, res: Response) => {
    console.log('eeee')
    const pokemon = new Pokemon({
        id: req.body.id,
        name:req.body.name,    })
        try{
            const newPokemon = await pokemon.save()
            res.status(201).json(newPokemon)
        }catch(e){
            res.status(400)
        }
} )


//Updating 
router.patch('/:id', getPokemons, (req: Request, res: Response) => {
    
} )


//deleteing one
router.delete('/id', getPokemons, (req: Request, res: Response) => {
    
} )

async function getPokemons(req: Request, res: Response, next: NextFunction) {
    let pokemon: Object[]
    try {
        pokemon = await Pokemon.findById(req.params.id)
      if (pokemon == null) {
        return res.status(404).json({ message: 'Cannot find subscriber' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.pokemon = pokemon
    next()
}

module.exports = router