// 在一个长度为 n 的数组 nums 里的所有数字都在 0～ n - 1 的范围内。 数组中某些数字是重复的，
// 但不知道有几个数字重复了， 也不知道每个数字重复了几次。 请找出数组中任意一个重复的数字。
// 输入：
//     [2, 3, 1, 0, 2, 5, 3]
// 输出： 2 或 3
var findRepeatNumber1 = function (nums) {
    const set = new Set();
    const hasArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            hasArr.push(nums[i]);
        }
        set.add(nums[i]); 
    }
    return hasArr.join();
    
};
const nums = [2, 3, 1, 0, 2, 5, 3];
console.log(findRepeatNumber(nums));

//首先对数组进行排序，然后遍历数组，如果出现相邻元素相等，则返回即可
var findRepeatNumber2 = function (nums) {
    nums.sort();
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            return nums[i];
        }
    }
};
