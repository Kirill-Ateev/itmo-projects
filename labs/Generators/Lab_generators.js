function* iterable2(...args) {
    yield 'hello';
    yield 'world';
    }
    
    const myiter2 = iterable2()
    
    console.log(myiter2.next().value)
    console.log(myiter2.next().value)
    console.log(myiter2.next().value)
    console.log('************')
    
   const myiter3 = iterable2(1,2,3,4)
   for (let val of myiter3) {
     console.log(val);
   }
    
    const myiter4 = iterable2(1,2,3,4)
    console.log(...myiter4)