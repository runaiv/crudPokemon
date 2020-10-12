import mongoose, { model, mongo, Schema } from 'mongoose'


const PokemonsSchema = new mongoose.Schema({
  id: Number,
  name: String
})
module.exports = mongoose.model('Pokeman', PokemonsSchema)