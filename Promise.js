function fn() {




    return  new Promise(function(resolve,reject){
           resolve("sagar")
        // reject("error")
         
    })
    
     
}

 fn().then(function(response){    // handling the promise
      console.log(response)
 },function(error){
     console.log(error)
 })