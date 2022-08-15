(function() {
    //描述一个对象的类型
    type myType = {
        name: string,
        age: number
    }

    const obj: myType = {
        name: 'tom',
        age: 12
    }
    //接口可以重复声明， type不可以
    interface myInterface {
        name: string,
        age: number
    }
})();