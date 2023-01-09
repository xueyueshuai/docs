---
# navbar: false
sidebar: auto
---

# web

## 网络请求必须有loading效果
请求发起时开始loading,
请求响应时候结束loading(异常响应也要结束loading)


## css相关
### 文字的显示
:::danger 文字的显示,要考虑超出隐藏 
```html
<style>
    /* 单行文本隐藏 */
    .abc{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }

    /* 多行行文本隐藏 */
    .abcd{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
</style>
```
:::

### 图片的显示 
:::danger 注意
1. 要考虑图片的大小(图片要在保证清晰的前提下,磁盘占用尽量小,利于网络传输尽快显示,尤其是首页要求图片加载必须快)
2. 要考虑是否变形(正确选择 object-fit属性的值) 

- 身份证,营业执照...等 信息需要全部需要展示的 多用 contain
- 头像,封面...等 多用cover 
```html
<style>
    /* 单行文本隐藏 */
    .logo{
        width:100px;
        height:100px;
        object-fit:cover;
    }
</style>
```

object-fit属性的可选值:
- fill	默认，不保证保持原有的比例，内容拉伸填充整个内容容器。	尝试一下 »
- contain	保持原有尺寸比例。内容被缩放。	尝试一下 »
- cover	保持原有尺寸比例。但部分内容可能被剪切。	尝试一下 »
- none	保留原有元素内容的长度和宽度，也就是说内容不会被重置。	尝试一下 »
- scale-down	保持原有尺寸比例。内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。	尝试一下 »
- initial	设置为默认值，关于 initial	
- inherit	从该元素的父元素继承属性。 关于 inherit
:::

### BFC
:::tip  
#### bfc(Block Formatting Context 块级格式化上下文)
在官方文档到中是这么介绍的：一个BFC区域包含创建该上下文元素的所有子元素，但是不包括创建了新的BFC的子元素的内部元素，BFC是一块块独立的渲染区域，可以将BFC看成是元素的一种属性，拥有了这种属性的元素就会使他的子元素与世隔绝，不会影响到外部其他元素
- 解决垂直塌陷(外边距的塌陷问题)
- 解决包含塌陷
- 清除了浮动

#### 怎样使一个元素变成BFC区域(下面任意一种)
- 设置浮动，不包括none
- 设置定位，absoulte或者fixed
- 行内块显示模式，inline-block
- 设置overflow，即hidden，auto，scroll
- 表格单元格，table-cell
- 弹性布局，flex
:::


## Chinese Layout布局

[Chinese Layout布局](./../../case/ChineseLayout)
