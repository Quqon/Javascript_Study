// 등차수열 혹은 등비수열 common 이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 작성하세요.

common = [3, 9, 27]

// 등비수열
const solution1 = common => {
    let answer;
    
    multiNumber = common[1] / common[0]

    answer = common[common.length - 1] * multiNumber

    return answer; 
}

solution1(common)

// 등차수열
const solution2 = common => {
    let answer;
    let plusNumber;
    
    plusNumber = common[1] - common[0]
    answer = parseInt(common[common.length - 1]) + plusNumber
    
    return answer; 
}

solution2(common)

// 위의 두 함수를 합치기 (정답)
const solution3 = common => {
    let answer;
    if(common[1] / common[0] == common[2] / common[1]) {
        let multiNumber;
        multiNumber = common[1] / common[0];
        answer = common[common.length - 1] * multiNumber;
    }
    else if(common[1] - common[0] == common[2] - common[1]) {
        let plusNumber;
        plusNumber = common[1] - common[0]
        answer = common[common.length - 1] + plusNumber
    }
    
    return answer; 
}

solution3(common)