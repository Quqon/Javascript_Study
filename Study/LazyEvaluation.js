Object.prototype.lazyMap = lazyMap;
Object.prototype.take = take;

function* lazyMap(callback) {
    for(const el of this) {
        yield callback(el);
    }
};

function take(n = Infinity) {
    const result = [];

    for (const el of this) {
        result.push(el); 

        if (result.length === n) break;
    }

    return result;
}

function callback(element) {
    console.log('callback called!')
    return element + 1
}

const arr = Array(10000).fill(1);

const mappedArr = arr.lazyMap(callback).take(2);

console.log(mappedArr)