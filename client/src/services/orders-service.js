

 const getOrders = async ()=>{
    return await fetch('http://localhost:8080/orders').then(res=> res.json()).then(result=>{
        console.log(result);
    })
}

export default getOrders