# study-ts-vue-nuxt

## Target
Ubuntu

## SetUp

### TypeScriptのインストール
npm install -g typescript

### node-typescriptのインストール
sudo apt install node-typescript

### tsconfig.jsonの雛形作成
tsc --init

## Command

### TypeScript -> JavaScript
tsc

## Examples

### array
let list: number[] = [1, 2, 3]
let list: Array<number> = [4, 5, 6]

### tuple
let x: [string, number]
x = ["Hello", 123]

### void
function logger(msg: string): void {
    console.log(msg)
}

### never
function error(msg: string): never {
    throw new Error(msg)
}
function infiniteLoop(): never {
    while(true){}
}

### object
let objType: object

### Intersection Types(交差)
type Dog = {
    tail: Tail
    bark: () => void
}
type Bird = {
    wing: Wing
    fly: () => void
}
type Kimera = Dog & Bird

### Union Types(共用体)
let value: boolean | number | string
value = true
value = 123
value = 'test'
// value = {}

### Literal Types
let signal: 'Red' | 'Yellow' | 'Green'
signal = 'Yellow'
// signal = 'Blue'

