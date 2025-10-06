const net = require('net');
const readline = require('readline-sync')
const server={
    port:3000,
    host:'localhost'
}

const client = net.createConnection(server);

client.on('connect', ()=>{
    console.log('Cliente conectado al servidor');
    client.write("Hola desde el cliente!");
})

client.on('data', (data)=>{
    console.log('El servidor dice', data.toString())
})

client.on('error', (err)=>{
    console.log('Error', err)
})

const mensaje = readline.question('Escribe un mensaje para el servidor: ')
client.write(mensaje)
