var objName = {
    a:5,
  
}



 function fn(x,y) {
     
     var o = x
     var p = y
     console.log(this.a + o + p)
    
 }
 
//   fn.call(objName)
//  fn.apply(objName,[2,3])
   var fn33 = fn.bind(objName)
    fn33(2,3)
