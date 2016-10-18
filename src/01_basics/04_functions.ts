// TODO: map
function map(list, mapper) {
  return [];
}

function testMap() {
  var names:string[] = ["Bob", "Ed", "Kate"];
  var mapper:Function = function (name:string) {
    return "Hello, " + name;
  };
  var greetings:string[] = map(names, mapper);
  console.log("map:", greetings);
}

// TODO: filter
function filter(list, filteringAlgorithm) {
  return [];
}

function testFilter() {
  var names:string[] = ["Bob", "Ed", "Brian", "Ben", "Kate"];
  var startingWithB:Function = function (name, i) {
    //return name[0].toUpperCase() === "B";
    return i % 2 === 0;
  };
  var namesStartingWithB:string[] = filter(names, startingWithB);
  console.log("filter:", namesStartingWithB);
}

// TODO: reduce
function reduce(list, iterator, startMemo) {
}

function testReduce() {
  var result = reduce([1, 4, 8], function (memo, el) {
    return memo + el;
  }, 5);
  
  var sumFn:Function = function (memo:any, item:any, index:number, list:any[]):any {
    if (index % 2 == 0)
      return memo + item;
    else
      return memo - item;
  };
  // should return => -6
  console.log("reduce 1:", reduce([2, 5, 7], sumFn, -10));


  var strReducer:Function = function (memo:any, item:any):any {
    return memo + item;
  };

  var res = reduce(["Ala ", "ma ", "kota!"], strReducer, "XXX: ");
  // should return => "XXX: Ala ma kota!"
  console.log("reduce 2:", res);

  var arrReducer:Function = function (memo:any, arr:any):any {
    return memo.concat(arr);
  };
  // should return => ["z", "y", "a", "b"]
  console.log("reduce 3:", reduce([["a"], ["b"]], arrReducer, ["z", "y"]));
}


// TODO: all
function all(list, test) {
}

function testAll() {
// should return => false
  var greaterThanZero:Function = function (item:any, index:number):boolean {
    return item > 0;
  };
  console.log("all 1:", all([3, 5, -1, 9], greaterThanZero));

// should return => true
  var firstLetterIsB:Function = function (item:any, index:number):boolean {
    return item[0] === "B";
  };
  console.log("all 2:", all(["Bob", "Ben", "Beth"], firstLetterIsB));
}

// TODO: pluck
function pluck(list, propertyName) {
}

function testPluck() {
  var people:Object[] = [
    {name: "Bob", age: 12, sex: "M"},
    {name: "Kate", age: 22, sex: "F"},
    {name: "Ed", age: 34, sex: "M"}
  ];
  // should return => ["Bob", "Kate", "Ed"]
  console.log("pluck 1:", pluck(people, "name"));

  // should return => ["M", "F", "M"]
  console.log("pluck 2:", pluck(people, "sex"));
}

// TODO: groupBy
function groupBy(list, iterator) {
}

function testGroupBy() {
  var names:string[] = ["Bob", "Ed", "Kate", "Bo", "Ann", "Eve"];

  // should return => {2: ["Ed", "Bo"], 3: ["Bob", "Ann", "Eve"], 4: ["Kate"]}
  var byLength:Function = function (item:any):number {
    return item.length;
  };
  console.log("groupBy 1:", groupBy(names, byLength));

  // should return => {A: ["Ann"], B: ["Bob", "Bo"], E: ["Ed", "Eve"], K: ["Kate"]}
  var byFirstLetter:Function = function (item:any):string {
    return item[0];
  };
  console.log("groupBy 2:", groupBy(names, byFirstLetter));
}

function eachSlice(list: any[], iteratorFn: Function, sliceSize: number) {
    list
        .reduce((slices: any[][], elem: any) => {
            let slice: any[] = slices[slices.length - 1];
            if (slice.length < sliceSize) {
                slice.push(elem);
            } else {
                slices.push([elem]);
            }
            return slices;
        }, [[]])
        .map(iteratorFn);
}

function eachSliceTest() {
  var arr:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var fn = function (slice:any[], index:number):void {
    console.log("slice:", slice, "index:", index);
  };

  eachSlice(arr, fn, 3);
  //
  // => slice: [1, 2, 3] index: 0
  // => slice: [4, 5, 6] index: 1
  // => slice: [7, 8, 9] index: 2
  // => slice: [10] index: 3

  eachSlice(arr, fn, 6);
  // => slice: [1, 2, 3, 4, 5, 6] index: 0
  // => slice: [7, 8, 9, 10] index: 1
}

