let trai = document.getElementById("ent")

let saludo = document.getElementById("reg");

saludo.addEventListener ("submit", arranca);

let flag = true;

function arranca (e){
    
    e.preventDefault();

    let fff = e.target

    console.log(fff[2].value)
    
    
    trai.innerText = "Hola " + fff[2].value + " vamos a entrenar"

    document.body.append(sal)
    console.log(e)
                 
}

let precioT = 0

let age = document.getElementById("inputNombre")

/*
if (edad >= 18) {
    alert('podes inscribirte')
    let cantClases = prompt('cuantas clases te interesan')


    for (let i = 0; i < cantClases; i++){

        let clase = prompt('a que clase te queres sumar: \n- k\n- f ')
        let dias = parseInt (prompt('cuantos dias queres entrenar:'))
        let precioxdia = 2500;

        if (clase == 'k'){
            precioT += dias * precioxdia
            alert('el valor seria de $' + (dias * precioxdia))
        }else if (clase == 'f'){
            precioT += dias * precioxdia
            alert('el valor seria de $' + (dias * precioxdia))
        
        } else {
            alert('no hay mas clases disponibles')
        }
    }

} else {
    alert('necesitas autorizacion')
}

function desc(precio){
    return precio * 0.9
}

let precioEfectivo = desc(precioT)


alert('si pagas en efectivo el total seria de $' + precioEfectivo)
alert('si pagas con tarjeta el total seria de $' + precioT)

let num = parseInt(prompt ('pone tu numero de cliente'))*/

const produc = [
    {
        nombre: "2k",
        precio: 6500

    },
    {
        nombre: "1k",
        precio: 3400

    },
    {
        nombre: "500g",
        precio: 1800

    },
    {
        nombre: "250g",
        precio: 1000

    }
]

const resultado = produc.filter ((tama) => tama.nombre.includes("g"))
console.log(resultado)

//me gustaria que una ves que se inscriban al gym, se ejecute lo que sigue

class cliente {
    constructor(nombre, edad){
        this.nombre = nombre.toUpperCase();
        this.edad = parseFloat(edad);
        this.num = parseFloat(num)
    }
}

const clientes = [];
const id = []

clientes.push(new cliente(nombre, edad, num));


for (const refe of clientes){
    console.log(refe.nombre)
    console.log(refe.edad)
    console.log(refe.num)
}

