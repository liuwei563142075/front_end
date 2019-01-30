// 其他模块加载该模块时，import命令可以为该匿名函数指定任意名字
import customName from './export/default'
// 不在使用大括号

customName();


// 如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面这样。
// import _,{each,foreach} from 'lodash'
// 上面代码输出了一个默认的变量【default】，和两个命名变量