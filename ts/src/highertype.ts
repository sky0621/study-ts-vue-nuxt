// Intersection Types

type Tail = {}
type Wing = {}

type Dog = {
    tail: Tail
    bark: () => void
}
type Bird = {
    wing: Wing
    fly: () => void
}

type Kimera = Dog & Bird


// Union Types
let value: boolean | number | string
value = true
value = 123
value = 'test'
// value = {}

let signal: 'Red' | 'Yellow' | 'Green'
signal = 'Yellow'
// signal = 'Blue'
