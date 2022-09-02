const user = {id: 28, name: 'Shalam', job: 'student'}
const stringified = JSON.stringify(user)
// console.log(stringified)
// console.log(user)

const shop = {
    name: 'Alia store',
    address: 'Mumbai road',
    profit: 20000,
    owner: {name: 'Salman', profession: 'Actors'},
    products: ['laptop', 'mobile', 'smart watch'],
    isExpensive: false
}

const shopStringi = JSON.stringify(shop)
console.log(shopStringi)
// console.log(shop)
const convert = JSON.parse(shopStringi)
console.log(convert.owner.profession)
