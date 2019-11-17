// 1

let iife = (function() {
  let input;
  return {
    setValue(parameter) {
      this.input = parameter;
    },
    showValue() {
      if (typeof this.input === "undefined" || this.input === null) {
        return "Wrong value! A number or a string should have been provided.";
      } else {
        return this.input;
      }
    },
    reverseValue() {
      if (typeof this.input === "string") {
        this.input = this.input
          .split("")
          .reverse()
          .join("");
      } else {
        this.input = this.input *= -1;
      }
    }
  };
})();

iife.showValue();
console.log(iife.showValue());

iife.setValue("Może jutro ta dama sama da tortu jeżom");
iife.reverseValue();
console.log(iife.showValue());

iife.setValue(6);
iife.reverseValue();
console.log(iife.showValue());

// 2

var add = (x, y) => x + y;
var sub = (x, y) => x - y;
var div = (x, y) => x / y;
var mult = (x, y) => x * y;

const calc = function() {
  return {
    x: "firstValue",
    y: "secondValue",
    operation: "operator",
    setOperation: function(a, b, c) {
      this.x = a;
      this.y = b;
      this.operation = c;
    },
    calculate: function() {
      return this.operation(this.x, this.y);
    }
  };
};

let math = calc();
math.setOperation(12, 7, add);
console.log(math.calculate());

// 3

let BaseObject = {
  X: 0,
  y: 0,
  sum: function() {
    return this.x + this.y;
  }
};

let myArray = [
  { x: 4, y: 2 },
  { x: -1, y: 3 },
  { x: 4, y: -2 },
  { x: -2, y: -7 }
];

for (let i = 0; i < myArray.length; i++) {
  let addNumbers = BaseObject.sum.bind(myArray[i]);
  console.log(addNumbers());
}

// 4

let newArray = [
  {
    x: 1,
    y: "object one value",
    //operation1: () => "Object one prefix " + this.x + " " + this.y,
    operation: function() {
      return "Object one prefix " + this.x + " " + this.y;
    }
  },
  {
    x: 2,
    y: "object two value",
    //operation1: () => "Object two prefix " + this.x + " " + this.y,
    operation: function() {
      return "Object two prefix " + this.x + " " + this.y;
    }
  },
  {
    x: 3,
    y: "object three value",
    //operation1: () => "Object three prefix " + this.x + " " + this.y,
    operation: function() {
      return "Object three prefix " + this.x + " " + this.y;
    }
  }
];

for (let i = 0; i < newArray.length; i++) {
  let nextIndex = i + 1;
  if (nextIndex >= newArray.length) {
    nextIndex = 0;
  }
  let resultOperation = newArray[i].operation.bind(newArray[nextIndex]);
  console.log(resultOperation());
}
