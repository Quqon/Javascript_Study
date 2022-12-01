class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this
        }
        return Singleton.instance
    }
    getInstance() {
        return this.instance                    //getInstance를 안줘 되는데 왜 선언했는지 모르겠다.
    }
}
const a = new Singleton()
const b = new Singleton()

console.log(a === b)                            //True
console.log(a === b.getInstance())              //False