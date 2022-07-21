# vue3_test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### vue3  setup()作用
```
将vue2中的数据，方法等配置项都写在setup()中
用于存放组合api，vue2语法可以向下兼容
1. 在beforeCreate钩子之前执行一次，this为undefined
说明在setup中用不了this
2. 参数：props， context
3. context中包含attrs，emit，slots
```
### vue3 ref函数
```
可以定义数据响应式
1. 基础数据与vue2相似，object.defineProperty()的get和set完成
2. 引用数据类型通过reactive函数完成
```
### vue3 reactive函数
```
定义一个对象类型的响应式数据,
成功的解决了vue2中的响应式问题，可以直接修改不用借助set api
```