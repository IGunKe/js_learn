const binaryInsertionSort = arr => {
    const length = arr.length;
    if (length <= 1) return;

    let current, low, high, m;
    for (let i = 1; i < length; i++) {
        low = 0;
        high = i - 1;
        current = arr[i];
        //寻找交换点
        while (low <= high) {
            m = Math.floor((low + high) / 2);
            if (arr[m] <= arr[i]) {
                low = m + 1;
            } else {
                high = m - 1;
            }
        }

        //移动交换点后的元素
        for (let j = i; j > low; j--) {
            arr[j] = arr[j - 1];
        }
        //放入交换点
        arr[low] = current;
    }
    console.log(arr);
}

const array2 = [5, 4, 3, 2, 1];

binaryInsertionSort(array2);