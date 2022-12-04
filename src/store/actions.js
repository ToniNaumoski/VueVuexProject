import axios from 'axios';


export const getProducts = ({commit}) => {
        axios.get('http://localhost:3000/products')
        .then(resposnse =>{
            commit('SET_PRODUCTS', resposnse.data)
            console.log(resposnse)
        })
    
}


export const getProduct = ({commit}, productId) => {
    axios.get(`http://localhost:3000/products/${productId}`)
    .then(resposnse =>{
        commit('SET_PRODUCT', resposnse.data)
        console.log(resposnse)
    })

}

