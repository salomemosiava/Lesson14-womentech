// 1.
let myArray = [5, 25, 89, 120, 36];
myArray.push("javascript", "python")
myArray.unshift('html', 'css');
console.log(myArray.length);

myArray.pop;
myArray.shift;
console.log(myArray);


// 2.
let arr = ['ფორთოხალი', 'ბანანი', 'მსხალი']
console.log(arr.length)
arr.push('ვაშლი', 'ანანასი')
arr.unshift('საზამთრო');
console.log(arr.length)

arr.splice(2, 0, 'მანგო')
console.log(arr)
arr.pop;
arr.shift;
console.log(arr.length)


// 3.
let array = [12, 25, 3, 6, 8, 14, 7, 23];
let newArray = array.map( x => x/3 );
console.log(newArray);


// 4.
let array2 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let newArray2 = array2.filter(x => typeof(x) == 'number');
console.log(newArray2)


// 5.
let languages = ['html', 'css', 'javascript', 'python', 'php'].filter(x => x.length > 3);
console.log(languages);

// 6.1
let acad = ['academy', 'of', 'digital', 'industries'].reduce((result, value) => {
    return result + value;
})
console.log(acad)

// 6.2
let acad2 = ['academy', 'of', 'digital', 'industries'].map(x => x.charAt(0).toUpperCase() + x.substring(1));
console.log(acad2.join(' '));

// 7.
let item = [12, 'google', 32, null, 'yahoo', 25];
let newItem = item.map(x => typeof(x) == 'number' ? x*x :
    typeof(x) == "string" ? x.toUpperCase() : x
);

console.log(newItem)


// 8.
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'].filter(x => x.includes('m') || x.includes('M'));
console.log (words)



//  The End!