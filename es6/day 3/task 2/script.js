function* fib1(n) {
  
    let n1 =0, n2=1;
    let next;
    for (let i = 0; i < n; i++) {
      yield n1;
      next = n1+n2;
      n1 = n2
      n2 = next
      
    }
  }

  console.log(fib1(7))

  for(ele of fib1(7)){
    console.log(ele)
  }
  


  function *fibMax(num){
    let n1 =0, n2=1;
    let next;
    while(n1<=num){
      yield n1;
      next = n1+n2;
      n1 = n2
      n2 = next
    }
      
    }
console.log("----------")
    for(ele of fibMax(7)){
        console.log(ele)
    }
    

