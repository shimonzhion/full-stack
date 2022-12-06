






const registration= async (data)=>{
    try{
    
  return  await fetch('http://localhost:8080/users/register',{
   method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user:data})
  })}

    catch(error){
        console.log(error);
    }
}

const login= async (data)=>{
  try{

    await fetch('http://localhost:8080/users/login',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'},
            body: JSON.stringify({user:data})
        

    })
  }
  catch(error){
    console.log(error);
  }

}
export {registration,login}

