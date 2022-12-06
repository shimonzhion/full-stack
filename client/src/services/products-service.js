const getProducts = async ()=>{
    return await fetch('http://localhost:8080/products').then(res=> res.json()).then(result=>{
        console.log(result);
    })
}

export default getProducts