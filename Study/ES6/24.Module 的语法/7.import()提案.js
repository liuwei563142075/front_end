/**
 * import和export命令只能在模块的顶层，不能
 * 在代码块中。这样的设计，固然有利于编译器提
 * 高效率，但也导致无法在运行时加载模块。在语
 * 法上，条件加载就不可能实现。如果import命令
 * 要取代 Node 的require方法，这就形成了一个
 * 障碍。因为require是运行时加载模块，
 * import命令无法取代require的动态加载功能。
 * */

const path = './' + fileName;
const myModual = require(path);
//上面的语句就是动态加载，require到底加载哪一个模块，只有运行时才知道。import命令做不到这一点。
//因此，有一个提案，建议引入import()函数，完成动态加载。
// import(specifier)