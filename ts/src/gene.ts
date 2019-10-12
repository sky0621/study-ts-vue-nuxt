interface Box<T> {
    value: T
}
const b0: Box<string> = {value: 'test'}

function boxed<T>(p: T) {
    return {value: p}
}
console.log(boxed<string>('Goro'))
