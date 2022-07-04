// 思想

//排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就都有序了。

const mergeSort = (arr) => {
    //采用自上而下的递归方法
    const len = arr.length;
    if (len < 2) return arr;
    let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }

    return result;
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(mergeSort(arr));