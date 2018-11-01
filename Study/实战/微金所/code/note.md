###学习笔记
1. 制作顶部通栏的块分割竖线，使用div+div的方式选取除了第一个元素外的所有元素在使用border-left

2.制作按钮的网站：http://blog.koalite.com/bbg/

3.引入外界的文字使用:
@font-face {
    font-family: 'itcast';
    src: url(../font/MiFie-Web-Font.eot) format('embedded-opentype');
    ...
}

4.一个将svg文件生成字体图标的网站：https://icomoon.io/app/#/select

5.我不知道为什么.topbar类不能给高???，如果给了高就会出现导航栏不在一条水平线上，出现bug的原因是由于
#header > .topbar > .container .row > div没指定高，导致里面元素溢出，导航栏布局混乱

6.制作轮播图：要求在屏幕设备在中大型设备上用大图片[背景]，在小型设备上用小图片[img]