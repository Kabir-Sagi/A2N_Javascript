// function fnArray() {
//     var data = [9,8,"sbddj",true,78.9,9]
//     console.log(data.length)
//     data.push("Delhi")
//     console.log(data)
//     data.pop()
//     console.log(data)
//     data.unshift("Harayana")
//     console.log(data)
//     data.shift()
//     console.log(data)
//   var val =  data.indexOf(78.9)
//   console.log(val)
//   var val1 =  data.indexOf(100)
//   console.log(val1)
//   var val2 =  data.indexOf(9)
//   console.log(val2)
//   var val3 =  data.lastIndexOf(9)
//   console.log(val3)

//   var result =data.includes(29)
//   console.log(result)

//  var strData = data.join('_')
//  console.log(strData)

// }

// fnArray()

//  function arrayMethods() {
//      var info = [20,4,5,8,9]
//      info.forEach(function(value,index){
//           console.log(value + 1)
//      })
//  }

//  arrayMethods()

//  function fnFilter() {
//      var data = [40,20,7,100,78,98,44]
// //    var filteredData =   data.filter(function(value,index){
// //           return value < 50

// //       })
// //       console.log(filteredData)
//   console.log(data.slice(0,5))
//  }

//  fnFilter()


   function fnSplice() {
       var data = [2,3,4,5,6]
    //  console.log(  data.splice(1,3))
    //   [2,6]
      console.log(data.splice(2,2,1000,"sagar"))
      console.log(data)
   }
fnSplice()
