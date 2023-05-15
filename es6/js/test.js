const Foo = {
    say() {
        console.log('hello man');
    }
}

// 将其他对象合并到实例的原型身上
function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}

// 给类添加一个静态属性
function testDecorator(target) {
    console.log(target);
    target.isEdit = false
}

// 浏览器无法识别
@testDecorator
class Demo {
    constructor() {

    }
}




console.log(new Demo());