
 const getSales = async ()=>{
    return await fetch('http://localhost:8080/sales').then(res=> res.json())
}

export default getSales