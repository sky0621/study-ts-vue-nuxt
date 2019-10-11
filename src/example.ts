function expo2(amount: number) {
    return amount ** 2
}

console.log(expo2(1000))
// console.log(expo2('1000'))

function taxed(amount: number): number {
    return amount * 1.1
}
console.log(taxed(150))

let list: number[] = [1, 2, 3]
let list2: Array<number> = [4, 5, 6]

let x: [string, number]
x = ["Hello", 123]
// x = [10, "Hey"]

function error(msg: string): never {
    throw new Error(msg)
}

function infiniteLoop(): never {
    while(true){}
}

let objType: object
// object = true
objType = {"key": 123}
