const express = require('express')
const Contenedor = require('./Contenedor.js')
const server = express()
const port = 8000

const vehiculos = new Contenedor('productos.txt')

const servidor = server.listen(port, ()=>{
    console.log(`servidor en el http://localhost:${port}`)
})

server.get('/', (req,res)=>{
    res.send('inicio del servidor express')
})

server.get('/productos', async (req,res)=>{
    const automovil = await vehiculos.getAll()
    res.send(automovil)
})
server.get('/productosRandom', async(req,res)=>{
    const automovil = await vehiculos.getAll()
    const vehiculoRandom = parseInt(Math.random() *automovil.length)
    console.log(vehiculoRandom)
    res.send(automovil[vehiculoRandom])
})
servidor.on('error', error=> console.log(`error ${error}`))