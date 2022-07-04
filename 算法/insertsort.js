const insertionSort = arr => {
    const length = arr.length;
    if (length <= 1) return;

    let preIndex, current;
    for (let i = 1; i < length; i++) {
        preIndex = i - 1;//待比较元素下标
        current = arr[i];//当前元素
        while (preIndex >= 0  && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }

        if (preIndex + 1 != i) {
            arr[preIndex + 1] = current;
            //console.log(arr);
        }
    }
    console.log(arr);
}
const array = [5, 4, 3, 2, 1];
insertionSort(array);