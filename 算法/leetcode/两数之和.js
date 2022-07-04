// 题目描述
// 给定一个整数数组 `nums`
// 和一个目标值 `target`，
// 请你在该数组中找出和为目标值的那 ** 两个 ** 整数， 并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。 但是， 你不能重复利用这个数组中同样的元素。
// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

//暴力枚举
function twoSum(arr, target) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j<len; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
}
const nums1 = [2, 7, 11, 15];
const target1 = 9;
const nums2 = [3, 2, 4], target = 6;

//利用map（）
const twoSum1 = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])];
        }
        map.set(nums[i], i);
    }
}
console.log(twoSum1(nums1,9));
