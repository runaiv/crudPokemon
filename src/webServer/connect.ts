import { reject } from "lodash"
import { PromiseProvider } from "mongoose"
import { error, info, success } from '../helpers/display'
const express = require('express')
const app = express()

export default function connect_web(webserverUri: string){
    try {
        app.listen(process.env.webserverUri, () => {
        success(`Example app listening at  http://localhost:8080`)
      })
    }catch(err){
       error(err)
    };
}