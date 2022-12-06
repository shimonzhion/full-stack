const getUsers = async ()=>{
    try{
    return await fetch('http://localhost:8080/users').then(res=> res.json()).then(data=>{
      console.log(data);
    })
  }
  catch(error){
    console.log(error);
  }
  }

  export default getUsers
  