
let movies = ["Twilight", "My Fault", "SEction E", "Rain in epaslon"];
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}
for (let index in movies) {
  console.log(movies[index]);
}
for (let movie of movies) {
  console.log(movie);
}

// remove firat and last ele
movies.shift();
movies.pop();
console.log(movies);

// reverse
for(let i=movies.length;i>=0;i--){
    console.log(movies[i]);
}

let a=[12,3,5,6,22,56,29];
let evsum=0;
let oddsum=0;
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        evsum+=a[i];
    }else{
        oddsum+=a[i];
    }
}
console.log("even sum:"+evsum);
console.log("odd sum:"+oddsum);

let arr1 = ["apple", "banana", "mango", "banana", 3, 4, 5, 6, true, {name: "object"}];
let num = [];
let str = [];
let bool = [];
let obj = [];
for (let i = 0; i < arr1.length; i++) {
  if (typeof arr1[i] === "number") {
    num.push(arr1[i]);
  } else if (typeof arr1[i] === "string") {
    str.push(arr1[i]);
  } else if (typeof arr1[i] === "boolean") {
    bool.push(arr1[i]);
  } else if (typeof arr1[i] === "object") {
    obj.push(arr1[i]);
  }
}
console.log("num =", num);
console.log("str =", str);
console.log("bool =", bool);
console.log("obj =", obj);


let sports=["swimming","cricket","football","volleyball"];
let hobbies=["reading","dancing","singing","cooking"];
let combined=sports.concat(hobbies);
console.log(combined);

let n=[1,2,3,4,5,6,7,8,9,10];
console.log("Original array:",n);
n.splice(3, 3, 40, 50, 60);
console.log("After removing elements from index 4 to 6:",n);

let week=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
console.log(week);
let weekday=week.slice(0,5);
console.log("Weekdays:",weekday);

let ex=["hi","hello","how","are","you","?"];
let joined=ex.join(" ");
console.log(joined);

let nums=[2,31,37,5,12,78,45,98,13];
let sorted=nums.sort((a,b)=>a-b);
console.log("Sorted array:",sorted);
