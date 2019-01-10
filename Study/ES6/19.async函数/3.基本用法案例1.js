// async函数完全可以看作多个异步操作，
// 包装成的一个 Promise 对象，
// 而await命令就是内部then命令的语法糖。

// ex:
async function getStockPriceByName(name) {
    const symbol = await getStockSymbol(name);
    const stockPrice = await getStockPrice(symbol);
    return stockPrice;
}
getStockPriceByName('goog').then(function (result) {
    console.log(result);
})

function getStockSymbol(name) {
    if(name == 'goog') {
        return [10,1,29.3,19];
    }
    return [];
}

function getStockPrice(symbol) {
    return symbol.toString();
}