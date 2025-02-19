const getPassword = (numbers, movements) => {
    let index = 0;
    let password = numbers.split('').map(val => Number(val));
    //console.table(password)
    
    movements.split('').forEach(move => {

        //console.log({move, index, index, item: password[index]})

        if(move === 'R'){
            index = index < password.length -1 ? index+1 : 0;
        }

        if(move === 'L'){
            index = index > 0 ? index-1 : password.length -1;
        }

        if(move === 'U'){
            password[index] = password[index] < 9 ? password[index]+1 : 0;
        }

        if(move === 'D'){
            password[index] = password[index] > 0 ? password[index]-1 : 9;

        }
    });

    return password.join('');
}

// 119
//console.log(getPassword('000', 'URURD'))
// 4411
//console.log(getPassword('1111', 'UUURUUU'))
// 8000
console.log(getPassword('9999', 'LULULULD'))
console.assert(getPassword('9999', 'LULULULD') === '8000', "%o", 'Failed')

//console.log(getPassword('528934712834', 'URDURUDRUDLLLLUUDDUDUDUDLLRRRR'))
//console.assert(getPassword('528934712834', 'URDURUDRUDLLLLUUDDUDUDUDLLRRRR'))
