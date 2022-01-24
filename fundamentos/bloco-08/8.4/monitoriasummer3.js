/**
* Dado um array de votantes em potencial,
* retorne um objeto com as seguintes chaves:
* youngPeople: numero total de pessoas com idade entre 18 e 25
* youngVotes: numero total de pessoas nessa faixa que votou
* midPeople: numero total de pessoas com idade entre 26 e 55
* midVotes: numero total de pessoas nessa faixa que votou
* oldPeople: numero total de pessoas com mais de 55 anos
* oldVotes: numero total de pessoas nessa faixa que votou
*/

const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:65, voted:true},
  {name:'Tami' , age: 64, voted:true},
  {name: 'Mary', age: 41, voted: false},
  {name: 'Becky', age: 53, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
  ];
  
  function voterResults(arr) {
    return arr.reduce((acc, curr) => {
      if (curr.age > 17 && curr.age < 26) {
        acc['youngPeople'] += 1 
        if (curr.voted) {
          acc.youngVotes += 1
        }
      } else if (curr.age > 25 && curr.age < 56) {
        acc.midPeople += 1 
        if (curr.voted) {
          acc.midVotes += 1
        }
      } else {
        acc.oldPeople += 1 
        if (curr.voted) {
          acc.oldVotes += 1
        }
      }
      return acc
    }, {
      youngPeople: 0,
      youngVotes: 0,
      midPeople: 0,
      midVotes: 0,
      oldPeople: 0,
      oldVotes: 0,
    })
    
  }
  
  console.log(voterResults(voters))