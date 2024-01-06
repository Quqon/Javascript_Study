const num = new Object(42);
const str = new Object('a');
num.constructor.name;
str.constructor.name;

class Latte {
    constructor() {
        this.name = 'latte'
    }
};
class Espresso {
    constructor() {
        this.name = "Espresso"
    }
};

class LatteFactory {
    static createCoffee() {
        return new Latte()
    }
};
class EspressoFactory {
    static createCoffee() {
        return new Espresso()
    }
};

// 정적 메소드는 생성자 함수로 인스턴스를 생성하지 않아도 호출할 수 있는 메소드를 말함.
// 때문에 정적 메소드는 클래스로 호출이 가능. 
LatteFactory.createCoffee();

const factoryList = {LatteFactory, EspressoFactory};

class CoffeeFactory {
    static createCoffee(type) {
        const factory = factoryList[type]
        return factory.createCoffee()
    }
}
const main = () => {
    const coffee = CoffeeFactory.createCoffee("LatteFactory")
    console.log(coffee.name)
}
main()