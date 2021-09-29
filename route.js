const { Router } = require("express");
const controller = require('./src/controllerlocation')
const route = Router()
const banco = require('./banco.sqlite')
route.post('/crud-location',controller.index)

module.exports=route