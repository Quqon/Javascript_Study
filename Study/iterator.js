// iterable한 객체
const mp = new Map();
mp.set('a', 1);
mp.set('b', 2);
mp.set('c', 3);

let iterMp = mp[Symbol.iterator]();
while (true) {
    let iterMpResult = iterMp.next();
    if (iterMpResult.done === true) break;
    let iterMpV = iterMpResult.value
    console.log(iterMpV)
}

// for / of 문 사용
const mp2 = new Map();
mp2.set('a', 1);
mp2.set('b', 2);
mp2.set('c', 3);

const st = new Set();
st.add(1);
st.add(2);
st.add(3);

for (let a of mp2) console.log(a)
for (let a of st) console.log(a)

