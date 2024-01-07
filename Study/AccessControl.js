// public, private example1
const pukuba = (() => {
    const a = 1
    const b = () => 2
    const public = {
        c : 2,
        d : () => 3
    }
    return public
    // public만 노출됨.
})()
console.log(pukuba)
console.log(pukuba.a)

// public, private example2
const MyModule = (function() {
    let privateVariable = 'This is a private variable';

    function privateFunction() {
        console.log('This is a private function');
    }

    function publicFunction() {
        console.log('This is a public function');
    }

    return {
        publicFunction: publicFunction
        // publicFunction만 public으로 노출 된다.
    };
})(); 

console.log(MyModule)
console.log(MyModule.privateFunction)