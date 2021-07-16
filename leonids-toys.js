const toyToFind = 3

const toys = [{
    id: 1,
    name: "Barbie",
    producer: "Mattel",
    quantity: 8,
    price: 7.00
},
{
    id: 2,
    name: "Hot Wheels",
    producer: "Mattel",
    quantity: 10,
    price: 4.00
},
{
    id: 3,
    name: "Volleyball",
    producer: "Mattel",
    quanity: 12,
    price: 10.00
}

]
const Frisbee = {
    id: 4,
    name: "Frisbee",
    producer: "Mattel",
    quantity: 5,
    price: 3.00
}

const Bike = {
    id: 5,
    name: "Bike",
    producer: "Mattel",
    quantity: 6,
    price: 50.00
}

toys.push(Frisbee)
toys.push(Bike)



for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price = toy.price * 1.05

        console.log(`The ${toy.producer} ${toy.name} costs ${toy.price}`)
    }
}








