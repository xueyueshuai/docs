---
sidebar: false
---
# 缩放+居中
```js
// 获取屏幕的w,h
console.log(document.body.clientWidth)
console.log(document.body.clientHeight)

// 子元素
let son_width = 1300
let son_height = 800

// 缩放比例
let scale_w = document.body.clientWidth / son_width
let scale_h = document.body.clientHeight / son_height
console.log(scale_w)
console.log(scale_h)
let s = Math.min(scale_w, scale_h) * 0.95
console.log(s)

setTimeout(() => {
    this.$refs.pcWindow.style.transform = 'scale(' + s + ')'
    this.$refs.pcWindow.style.transformOrigin = 'left top'
    this.$refs.pcWindow.style.position = 'absolute'
    this.$refs.pcWindow.style.left = ((document.body.clientWidth - son_width * s) / 2) + 'px'
    this.$refs.pcWindow.style.top = ((document.body.clientHeight - son_height * s) / 2) + 'px'
}, 1000)
```