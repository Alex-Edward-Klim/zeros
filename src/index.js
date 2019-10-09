module.exports = function zeros(expression) {
  
  let singleArr = expression.match(/\d+(?!((\!\!))|\d+)/g);
  if (Array.isArray(singleArr)) {
    singleArr = singleArr.map(function(elem) {
      return Number(elem);
    });
  }

  let doubleEvenArr = null;
  let doubleOddArr = null;

  let doubleArr = expression.match(/\d+(?=\!\!)/g);
  if (Array.isArray(doubleArr)) {

    doubleArr = doubleArr.map(function(elem) {
      return Number(elem);
    });

    doubleEvenArr = doubleArr.reduce(function(acc, elem) {
      if (elem%2 == 0) {
        acc.push(elem);
      }
      return acc;
    }, []);
  
    doubleOddArr = doubleArr.reduce(function(acc, elem) {
      if (elem%2 != 0) {
        acc.push(elem);
      }
      return acc;
    }, []);

  }

  let five = 0;
  let evenNumberFactor = 0;

  if (Array.isArray(singleArr)) {
    for (let i = 0; i < singleArr.length; i++) {
      let n = 1;
      while (singleArr[i] / Math.pow(5, n) >= 1) {
        five = five + Math.floor(singleArr[i] / Math.pow(5, n));
        n++;
      }
      
      evenNumberFactor = evenNumberFactor + Math.floor(singleArr[i] / 2);
    }
  }

  if (Array.isArray(doubleEvenArr)) {
    for (let i = 0; i < doubleEvenArr.length; i++) {
      let n = 1;
      while (doubleEvenArr[i] / Math.pow(5, n) >= 1) {
        five = five + Math.floor(Math.floor(doubleEvenArr[i] / Math.pow(5, n)) / 2);
        n++;
      }
      evenNumberFactor = evenNumberFactor + (doubleEvenArr[i] / 2);
    }
  }

  if (Array.isArray(doubleOddArr)) {
    for (let i = 0; i < doubleOddArr.length; i++) {
      let n = 1;
      while (doubleOddArr[i] / Math.pow(5, n) >= 1) {
        five = five + Math.round(Math.floor(doubleOddArr[i] / Math.pow(5, n)) / 2);
        n++;
      }
    }
  }

  return Math.min(evenNumberFactor, five);
}
