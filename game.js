const nextPosition = (squaresToMove, actualPosition = 1) => {
    if (actualPosition + squaresToMove === 100) {
      return 'Victory!' 
    } else if (actualPosition + squaresToMove < 100) {
      return actualPosition + squaresToMove
    } else {
      return actualPosition
    }
  };
  
  const rollDice = () => {
    return 1 + Math.floor(Math.random() * (6))
  }
  
  

  rollDice()

// UAT1

  console.log(nextPosition(0,1));
//UAT2
console.log(nextPosition(3,1));

// UAT3
console.log(nextPosition(4,nextPosition(3, 1)));
//US 2-------

//UAT1
console.log(nextPosition(3, 97));

//UAT2
console.log(nextPosition(50,nextPosition(5, 97)));
 
/// US 3---------

//UAT1
console.log(nextPosition(4, 1));


