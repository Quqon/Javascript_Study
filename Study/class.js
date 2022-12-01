class car {
    construct(){}
    wheels = 4
}

class bmw extends car {
    construct(name, color){
        this.name = name
        this.color = color
    }
    engine = "엔진"
} 

const x5 = new bmw("x5" ,"red")
console.log(x5)
