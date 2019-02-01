/**
 * 注意区分Object和Map，只有模拟现实世界的实体对象时，
 * 才使用Object。如果只是需要key:value的数据结构，使用Map结构。
 * 因为Map有内建的遍历机制。
 * */
let map = new Map(arr);

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}
for (let item of map.entries()) {
    console.log(item[0], item[1]);
}