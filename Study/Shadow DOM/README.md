Shadow DOM必读网站：https://developers.google.cn/web/fundamentals/web-components/shadowdom

注意：
必须使用h5的querySelect获取的元素才能使用createShadowRoot，jquery获取的元素不行==详情查看
网址中：历史记录和浏览器支持






###1. Shadow DOM 出现的原因：
    Shadow DOM 解决了构建网络应用的脆弱性问题。脆弱性是由 HTML、CSS 和 JS 的全局性引起的。 多年以来，
我们发明了多个工具来规避这些问题。例如，使用新的 HTML id/类时，无法了解是否与页面所使用的现有名称
冲突。微小错误渐渐增多，CSS 特异性成为一个大问题（!important 所有的事情！），样式选择器变得失控以
及性能可能受损，不一而足。

Shadow DOM 修复了 CSS 和 DOM。它在网络平台中引入作用域样式。 无需工具或命名约定，您即可使用原生
JavaScript 捆绑 CSS 和标记、隐藏实现详情以及编写独立的组件。

###2. Shadow DOM简介：
    Shadow DOM 是四大网络组件标准之一：HTML 模板、Shadow DOM、自定义元素以及 HTML 导入。
    您无需编写使用 shadow DOM 的网络组件。但是如果您有编写，可充分利用其各种优势（CSS 作用域、DOM
    封装和组合），并构建可重复使用的自定义元素，这些元素具有弹性、高度可配置且高度可重用。如果自定
    义元素是创建新 HTML（通过 JS API）的方式，shadow DOM 则是创建其 HTML 和 CSS 的方式。这两种 API
     组合使用，通过独立的 HTML、CSS 和 JavaScript 来创建组件。

    Shadow DOM 这款工具旨在构建基于组件的应用。因此，可为网络开发中的常见问题提供解决方案：

           隔离 DOM：组件的 DOM 是独立的（例如，document.querySelector() 不会返回组件 shadow DOM 中
           的节点）。
           作用域 CSS：shadow DOM 内部定义的 CSS 在其作用域内。样式规则不会泄漏，页面样式也不会渗入。
           组合：为组件设计一个声明性、基于标记的 API。
           简化 CSS： - 作用域 DOM 意味着您可以使用简单的 CSS 选择器，更通用的 id/类名称，而无需担心命
           名冲突。
           效率： - 将应用看成是多个 DOM 块，而不是一个大的（全局性）页面。

###3. 什么是Shadow DOM？
    影子中的 DOM：
        Shadow DOM 与普通 DOM 相同，但有两点区别：1) 创建/使用的方式；2) 与页面其他部分有关的行为方
        式。 通常，您创建 DOM 节点并将其附加至其他元素作为子项。 借助于 shadow DOM，您可以创建作用域
        DOM 树，该 DOM 树附加至该元素上，但与其自身真正的子项分离开来。这一作用域子树称为影子树。
        被附着的元素称为影子宿主。 您在影子中添加的任何项均将成为宿主元素的本地项，包括 <style>。
        这就是 shadow DOM 实现 CSS 样式作用域的方式。

###4. 组合和slot:
        在网络开发世界中，组合是指我们如何使用 HTML 来通过声明构建应用。 不同的构建块（<div>、
        <header>、<form>、<input>）共同构成应用。 某些标记甚至还相互合作。 组合是 <select>、
        <details>、<form> 和 <video> 等原生元素如此灵活的原因所在。 这些标记中的每个标记接受特定的
         HTML 作为子项，并且加以特殊处理。 例如，<select> 知道如何将 <option> 和 <optgroup> 渲染为
         下拉和多选小部件。<details> 元素将 <summary> 渲染为可展开的箭头。 甚至 <video> 知道如何处
         理特定的子项：<source> 元素未进行渲染，但却会影响视频的行为。多么神奇！

         <slot> 元素
         Shadow DOM 使用 <slot> 元素将不同的 DOM 树组合在一起。Slot 是组件内部的占位符，用户_可以_使用
         自己的标记来填充。通过定义一个或多个 slot，您可将外部标记引入到组件的 shadow DOM 中进行渲染。
         这相当于您在说“在此处渲染用户的标记”。如果 <slot> 引入了元素，则这些元素可“跨越”
         shadow DOM 的边界。 这些元素称为分布式节点。从概念上来看，分布式节点似乎有点奇怪。
         Slot 实际上并不移动 DOM；它们在 shadow DOM 内部的其他位置进行渲染。
         组件可在其 shadow DOM 中定义零个或多个 slot。Slot 可以为空，或者提供回退内容。
         如果用户不提供 light DOM 内容，slot 将对其备用内容进行渲染。

###5. 设定样式：【组件自身还是受到外界影响的，但组件影子根中样式的不受外界影响，只受组件内部css影响】
        有多种方式可设定网络组件的样式。使用 shadow DOM 的组件可通过主页来设定样式，定义其自己的样式
        或提供钩子（以 CSS 自定义属性的形式）让用户替换默认值。

        组件定义的样式
            请记住，shadow DOM 最有用的功能是作用域 CSS：
                外部页面中的 CSS 选择器不应用于组件内部。
                内部定义的样式也不会渗出。它们的作用域仅限于宿主元素。
        shadow DOM 内部使用的 CSS 选择器在本地应用于组件。。实践中，这意味着我们可再次使用一般的
        id/类名称，而无需担心在页面其他位置有冲突。
        最佳做法是在 Shadow DOM 内使用更简单的 CSS 选择器。 它们在性能上也不错。

###6. Shadow DOM 事件模型
