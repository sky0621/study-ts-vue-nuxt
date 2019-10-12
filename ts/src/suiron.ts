let user = 'Taro'
// user = 123

const user2 = 'Jiro'
console.log(user2.length)

function wait(duration: number) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${duration}ms passed`), duration)
    })
}
wait(1000).then(res => {console.log('fin')})

function wait2(duration: number): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve(`${duration}ms passed2`), duration)
    })
}
wait2(2000).then(res => {console.log('fin2')})
