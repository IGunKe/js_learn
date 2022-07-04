//旋转数组的最小数字
//把一个数组最开始的若干个元素搬到数组的末尾
/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    //二分法
    let left = 0;
    let right = numbers.length -1;
    while(left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (numbers[mid] < numbers[right]) {
            right = mid;
        } else if (numbers[mid] > numbers[right]) {
            left = mid + 1;
        } else {
            right--;
        }
    }
    return numbers[right];
};
console.log(minArray([1]));