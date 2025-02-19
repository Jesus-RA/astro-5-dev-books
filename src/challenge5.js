let nodes = [13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,155,156,157,158,175,176,177,178,179,180,181,182,183,184,195,196];

function isPrime(num){
    if(num <= 1){
        return false;
    }

    const sqrt = Math.round(Math.sqrt(num));
    let all = true;
    for(let i = 2; i <= sqrt; i++){
        if(num%i === 0){
            return false;
        }
    }

    return true;
}

function isCandidateToHide(num){
    if(!isPrime(num)){
        return false;
    }


    const digits = num.toString().split('');
    const digitsSum = digits.reduce((acc, digit) => {
        acc += Number(digit);

        return acc;
    }, 0);

    return isPrime(digitsSum);
}

const result = nodes.reduce((data, num) => {
    if(isCandidateToHide(num)){
        data.total++;

        if(data.total === 3){
            data.third = num;
        }
    }

    return data;

}, { total: 0, third: null })

console.log(`submit ${result.total}-${result.third}`)