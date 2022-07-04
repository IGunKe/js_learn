//过滤数组中的唯一元素
//定义 arr 为一个数组。
//创建一个函数 unique(arr)，该函数返回一个由 arr 中所有唯一元素所组成的数组。
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

//console.log( unique(values) );

//过滤字谜（anagrams）
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // 将单词 split 成字母，对字母进行排序，之后再 join 回来
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );