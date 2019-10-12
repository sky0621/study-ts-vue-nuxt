function greet(name?: string): string {
    return `Hello, ${name}`
}
console.log(greet('Saburo'))
console.log(greet())

type State = {
    id: number
    name: string
}
const state: Readonly<State> = {
    id: 1,
    name: 'Siro'
}
// state.name = 'Hanako'

const s1 = '0'
const s2 = '0' as string
// const s3 = 0 as unknown as string
const s4 = '0' as {}
console.log(s4)
