// 函数声明：
async function foo1() {
    
}

// 函数表达式：
const foo2 = async function() {

}

//对象方法：
let obj = { async foo3() {} };
obj.foo3().then(function () {
    //...
})

// class的方法
class Storage {
    constructor() {
        this.cachePromise = caches.open('avatars');
    }

    async getAvatar(name) {
        const cache = await this.cachePromise;
        return cache.match(`avatars/${name}.jpg`)
    }
}

const storage = new Storage();
storage.getAvatar('jake').then(function () {
    //...
})

// 箭头函数
const foo = async() => {};