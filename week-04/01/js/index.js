/**
 * @param {Object} oldArr
 * @param {Object} num
 * */
const splitArray = (oldArr, num) => {
  // TODO：请补充代码实现功能
  let newArr = [];
  let oldArr2 = [...oldArr.sort((a, b) => a - b)];
  const len = oldArr2.length;
  for (let i = 0, j = 0; i < len; i += num, j++) {
    newArr[j] = oldArr2.splice(0, num);
  }
  return newArr;
};
module.exports = splitArray; // 检测需要，请勿删除
