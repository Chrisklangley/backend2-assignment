const houses = require('./db.json')
let houseId = 4

module.exports  = {
getAllHouses: (req,res) => res.status(200).send(houses),

deleteHouse: (req,res) => {
    const {id} = req.params
for(let i = 0; i < houses.length; i++ ){
    if(houses[i].id === +id){
        houses.splice(i, 1);
        return res.status(200).send(houses);
}
    
    
}
res.status(400).send(houses)
},

createHouse: (req, res) =>{
    const {address, price, imageURL} = req.body
    houses.push({
        address,
        price,
        imageURL,
        id: houseId,

    })
    houseId++
    res.status(200).send(houses)
},
updateHouse: (req,res) => {
    const {id} = req.params
    const {type} = req.body
    let index = houses.findIndex(elem => +elem.id === +id)

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    }
}