function fn() {
    var objRef=new XMLHttpRequest()
    objRef.open('get','http://jsonplaceholder.typicode.com/users');
    objRef.send()
    objRef.onload = function() {
                var result = objRef.responseText
                console.log(result)
    }
    objRef.onerror = function() {
              alert("error")
    }
}