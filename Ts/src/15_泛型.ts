//但不确定类型时使用
function fn<T>(a: T): T {
    return a;
}

fn<string>('123');
