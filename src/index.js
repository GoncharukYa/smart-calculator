class SmartCalculator {
  constructor(initialValue) {
    this.expression = [];
    this.expression.push(initialValue);
  }

  add(number) {
    this.expression.push("+");
    this.expression.push(number);
    return this;
  }
  
  subtract(number) {
    this.expression.push("-");
    this.expression.push(number);
    return this;
  }

  multiply(number) {
    this.expression.push("*");
    this.expression.push(number);
    return this;
  }

  devide(number) {
    this.expression.push("/");
    this.expression.push(number);
    return this;
  }

  pow(number) {
    this.expression.push("^");
    this.expression.push(number);
    return this;
  }

  valueOf() {
    let arr = this.expression;
    console.log(arr);
    let index = arr.lastIndexOf("^");
    while (index > 0) {
      arr.splice(index - 1, 3, Math.pow(arr[index -1] , arr[index + 1])); 
      index = arr.lastIndexOf("^");
      console.log(arr);
    }
    
    index = arr.indexOf("/");
    while (index > 0) {
      arr.splice(index - 1, 3, Math.floor(arr[index -1] / arr[index + 1])); 
      index = arr.indexOf("/");
      console.log(arr);
    }

    index = arr.indexOf("*");
    while (index > 0) {
      arr.splice(index - 1, 3, arr[index -1] * arr[index + 1]); 
      index = arr.indexOf("*");
      console.log(arr);
    }

    

    index = arr.indexOf("-");
    while (index > 0) {
      arr.splice(index - 1, 3, arr[index -1] - arr[index + 1]); 
      index = arr.indexOf("-");
      console.log(arr);
    }

    index = arr.indexOf("+");
    while (index > 0) {
      arr.splice(index - 1, 3, arr[index -1] + arr[index + 1]); 
      index = arr.indexOf("+");
      console.log(arr);
    }

    return arr[0];


  }
}

module.exports = SmartCalculator;
