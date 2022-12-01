let subway = ["1 2 3 4 5 6 7 8 9 10", "2 8"]
let start = 1
let end = 10
function solution(subway, start, end) {
    var answer = 0;

    let result = (e) => {
        e == end.toString()
        return 0;
    }

    
    for(let i = 0; i < subway.length; i++) {
        let h = []
        h.push(subway[i].split(" "))
        console.log(h)
        h[0].forEach((e, i) => {
            
            if(e[0] == start.toString()) {
                h.find(result)
            }
        })
        
    }
    
    return answer;
}

solution(subway, start, end)
