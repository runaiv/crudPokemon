import { error, info, success } from './helpers/display'
import checkEnv from './helpers/checkEnv'
import { connect } from './database'
import connect_web from './webServer/connect'

const express = require('express')
const pokemons = require('json-pokemon');
const getPokemons = require('json-pokemon/getPokemon');
const app = express()


async function main() {
  try {
    checkEnv(['PORT', 'HOST', 'DATABASE_URI'])
    info('Server initialization...')
    await connect(process.env.DATABASE_URI as string)
    success('Database successfully connected!')
    }catch (e) {
    error(e.message)
  }

  app.use(express.json())

  const router =  require('./router')
  //console.log(router)
  app.use('/pokemons', router)

  /* try {
    connect_web(process.env.SERVER_URI as string)
   }catch(e){
     error(e.message)
   } */
 app.listen(8082, () => console.log('server started'))
}

// Entry point 😎
main()
