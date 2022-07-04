const bubbleSort = arr => {
    const length = arr.length;
    if (length <= 1) {
        return;
    }
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[i])
            {
                const temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    console.log(arr);
}
const arr = [7, 8, 4, 5, 6, 3, 2, 1];
const arr2 = [7, 8, 4, 5, 6, 3, 2, 1];
bubbleSort(arr);
bubbleSort(arr2);