function fnsetTimeout() {
     console.log("First Line")
    //  setTimeout(function(){
    //    console.log("After 2 seconds")

    //  },5000)
   var clearRef= setInterval(function(){
        console.log("Printing for every 2 sec")
    },2000)
    
   setTimeout(function(){
       clearRef.clearInterval()
   },10000)

}

fnsetTimeout()