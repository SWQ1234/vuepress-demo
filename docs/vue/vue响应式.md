---
title: 数据响应式
date: '2021-09-01'
---
### 什么是数据响应？

数据响应式是 vue 实现 UI的核心原理，当用户改变数据 data ，UI 自动更新。

### 怎么做？

数据代理     数据劫持

Vue 2 的数据响应式，通过设置 `options.data` 。首先，会被 Vue 监听原有数据对象。第二，通过 Vue 实例代理。使用 `Object.defineProperty` 将所有的 property 全部转为 `getter/setter` 。每次对 data 的读写操作，都会被 Vue 监听，Vue 在 data 改变时更新 UI 。



Vue 2 则是通过 `Object.defineProperty` 来实现数据响应式的。

 优点：用户不需要操作 DOM 去完成 UI 制作

缺点：vue 用的这个 api 是有缺陷的，导致 vue 对新增的属性没有办法做到响应式。没有办法监听

解决方法：vue3 通过  Proxy    解决了 `Object.defineProperty` 无法监听新增属性的问题。





### Object.defineProperty 的问题

由于 JavaScript 的限制，Vue 不能检测数组和对象的增加和删除变化。

#### 对象中：

给data中的对象动态新增的属性，不能够有响应式的效果，也就是说不能触发视图更新。

解决方法：

1. ​	在对象中提前把属性声明好。
2. ​    如果确实需要动态的给 person 对象添加 age 属性，那么我们可以用到vue中提供的 $set 方法 
3. 或者可以使用 `Vue.set(object, propertyName, value)` 方法来实现

两者的作用：

- 新增 key
- 自动创建代理和监听（如果没有创建过）
- 触发 UI 更新（但不会立刻更新）

```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>数据响应式</title>
</head>
<body>
    <div id="app">
        <div>姓名：<span>{{person.name}}</span></div>
        <div>性别：<span>{{person.sex}}</span></div>
        <div>年龄：<span>{{person.age}}</span></div>
        <button @click = addAge></button>
    </div>
    <script src="./public/vue.js"></script>
    <script>
        const vm = new Vue({
            el: '#app',
            data: {
                person: {
                    name: 'A',
                    sex: 'man'
                }
            },
            methods: {
                addAge() {
                    // 给data中的对象动态新增的属性，不能够有响应式的效果
                    // this.person.age = 20

                    // this.$set(this.person, 'age', 20)   // this 指向 vm
                    // 或 
                    Vue.set(this.person, 'age', 20)
                }
            }
        })
    </script>
</body>
</html>
```



#### 对于数组

​		数组通过索引直接修改索引对应的内容，是无法实现响应式的效果

解决方案：

​		依然可以使用 `Vue.set(object, propertyName, value)` 和 `vm.$set`

```js
// Vue.set
Vue.set(vm.items, indexOfItem, newValue)

// vm.$set
vm.$set(vm.items, indexOfItem, newValue)
```

修改数组长度，数组的增加和删除

```js
vm.items.splice(indexOfItem, 1, newValue)

vm.items.splice(newLength)
```

Vue 篡改了数组的 API ，参考[变更方法](https://cn.vuejs.org/v2/guide/list.html#变更方法) 

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

```js
class VueArray extends Array{
    push(...args){
        const oldLength = this.length // 记录当前数组长度
        super(...args)
        for(let i = oldLength; i < this.length; i++){
            Vue.set(this, i, this[i]) // 通知 Vue 每个新增的 key
        }
    }
}
```




参考链接：https://juejin.cn/post/6903372514177908749