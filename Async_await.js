function f1() {
    return new Promise(function(a,b){
          setTimeout(function(){          // created Promise Object and in that calling one
                                           //  setTimeout() Function
             a("A2N")
          },3000)
    })
}

  async function fn() {
     var obj =await f1()                       // Calling the f1() from fn() to get the result and print it
     console.log(obj)
  }
   fn()