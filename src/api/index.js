export const getProduct = () => fetch("hppt://chst.vip:8081/data/index.json")
    .then(body => body.json())
    .then(res => res)
    .catch(err => {
    throw new Error(err)
})