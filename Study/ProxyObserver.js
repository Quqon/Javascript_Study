const createReactiveObject = (target, callback) => {
    const proxy = new Proxy(target, {
        set(obj, prop, value) {
            if (value !== obj[prop]) {
                const prev = obj[prop]
                obj[prop] = value
                callback(`${prop}가 [${prev}] >> [${value}]로 변경`)
            }
            return true
        }
    })
    return proxy
}
const a = {
    "aa" : "ss"
}
const b = createReactiveObject(a, console.log)
b.aa = "ss"
b.aa = "cc"