//但不确定类型时使用
function fn<T>(a: T): T {
    return a;
}

fn<string>('123');

//泛型约束， 先定义一个接口，泛型继承接口
interface fn1 {
    length: number;
}

function fn10<T extends fn1>(x: T): number {
    return x.length;
}

//泛型接口，规范
interface InspectFn {
    <T>(x: T, y: T): boolean;
}

