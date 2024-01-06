// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

const solution = (num, total) => {
    let answer = [];
    let sum;
    
    if (num == 1) {
        answer.push(total);
        return answer;
    }

    for (let i = total - 1; i > -90; i--) {
        answer.push(i)
        sum = 0;
        if (answer.length == num) {
            answer.forEach((e) => {
                sum += e
            })
        }
        if (sum > total && answer.length == num) {
            answer = answer.filter((e) => {
                return e < 0
            })
            continue;
        }
        else if (sum < total && answer.length == num) {
            answer.sort()
            for (let j = 0; j < 100; j++) {
                answer = answer.slice(1, answer.length)
                answer.push(answer[answer.length - 1] + 1)
                sum = 0;
                answer.forEach((e) => {
                    sum += e
                })
                if (sum == total) {
                    if (answer[0] < 0 && answer[num - 1] < 0) {
                        answer.reverse()
                    }
                    return answer
                }
                else {
                    continue
                }
            } 
        }
        else if (sum == total && answer.length == num) {
            answer.sort();
            return answer
        }
    }
}

// const solution = (num, total) => {
//     let answer = [];
//     let sum;

//     if (num == 1) {
//         answer.push(total)
//         console.log(answer)
//         return answer
//     }

//     for (let i = total - 1; i > -90; i--) {
//             answer.push(i)
//             sum = 0;
//             console.log(i)
//             if (answer.length == num) {
//                 console.log("////////////////")
//                 answer.forEach((e) => {
//                     sum += e
//                 })
//                 console.log(sum, "sum")
//             }
//             if (sum > total && answer.length == num) {
//                 console.log("-----------------",  answer)
                
//                 answer = answer.filter((e) => {
//                     // console.log(e, "eeeeeeeee")
//                     return e < 0
//                 })
                
//                 continue;
//             }
//             else if (sum < total && answer.length == num) {
//                 answer.sort()
//                 console.log(answer, "~~~~~~~~~~~~")
//                 for (let j = 0; j < 101; j ++) {
//                     // console.log("****************")
                    
//                     // console.log(answer, "@@@@@@@@@@@@@")
//                     answer = answer.slice(1, answer.length)
//                     answer.push(answer[answer.length - 1] + 1)
//                     console.log(answer, "#############")
//                     sum = 0;
//                     answer.forEach((e) => {
//                         sum += e
//                     })
//                     console.log(sum)
                        
//                     if (sum == total) {
//                         console.log(answer, " $$$$$$$$$$$$$")
//                         if (answer[0] < 0 && answer[num - 1] < 0) {
                            
//                             answer.reverse()
//                             console.log(answer, "*****************")
//                         }
//                         answer.sort()
//                         console.log(answer, "!!!!!!!!!!!!!")
//                         return answer
//                     }
//                     else {
//                         continue
//                     }
//                 }

                
//             }
//             else if (sum == total && answer.length == num) {
//                 console.log("==========")
//                 answer.sort();
//                 console.log(answer)
//                 return answer
//             }
            
//         }
//     }
num = 100
total = 150

solution(num, total)