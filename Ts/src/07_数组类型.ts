//类型+[]
let num: number[] = [1, 2, 3];
let num2: string[] = ['1', '2'];

//数组泛型
let num3: Array<number> = [1];

//接口  常用来表示类数组
interface Num4 {
    [index: number]: number
}

let num4: Num4 = [1]