/* 
思路

选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间。但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。

步骤

1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置。
2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
3. 重复第二步，直到所有元素均排序完毕。 
*/

const selectionSort = srr => {
    const length = arr.length;

    if (length <= 1) return;

    let minIndex, tmp;

    for (let i = 0; i < length; i++) {
        minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }
    return arr;
}
const array = [5, 4, 3, 2, 1];
console.log(selectionSort(array));