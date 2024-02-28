export function createuser(userData){
  return new Promise(async(resolve)=>{
    const response=await fetch('http://localhost:8080/auth',{
      method:'POST',
      body:JSON.stringify(userData),
      headers:{'content-type':'application/JSON'}
      
    })
    const data=await response.json();
    // todo:on server we will return some info of user (not password);
    
    resolve({data});
  })
}
export function checkUser(logininfo){
  return new Promise(async(resolve,reject)=>{
   try{
    const response=await fetch('http://localhost:8080/auth/login',{
      method:'POST',
      body:JSON.stringify(logininfo),
      headers:{'content-type':'application/JSON'}
        

    })
    if(response.ok){
      const data=await response.json();
      console.log(data);
      resolve({data});

    }
    else{
      const err=await response.json();
      console.log(err);
      reject(err);
    }
  }
   catch(err){
    console.log(err);
    reject(err);
   }
   
  })  // todo:on server we will return some info of user (not password);
}  
   

export function signOut(userId){
  return new Promise((resolve, reject) => {
    //  todo:on server we will remove user session info;
    resolve({data:'success'});
  })
}