const calculateSteps = (line) => {

    const instructions = line.split(' ');

    // When first value is a negative one
    if(instructions[0] < 0){
        return 1;
    }

    let steps = null;
    let totalSteps = 0;

    for(let i = 0; i < instructions.length; ){

        steps = Number(instructions[i]);// Get steps to move
        instructions[i]++;// Increment current step value
        i += steps;// Move indicated steps
        
        totalSteps++;// Increase steps counter
        
        // Already run away if moving to a negative position
        if(i < 0){
            break;
        }

    }

    return totalSteps;
}

/*
// 5
console.log(calculateSteps('1 2 4 1 -2'))

// 6
console.log(calculateSteps('0 1 2 3 -1'))

// 2
console.log(calculateSteps('1 -2 5'))

// 1
console.log(calculateSteps('-1 -2 5'))*/

ADMIN_PRIVATE_KEY=e3b0c44298fc1c149afbf4c8996fb

const ghosttxt = `En el sistema hay un fantasma que se multiplica sin cesar.
 Algunos lo llaman la sombra de los procesos, otros, el virus de los clones. Este fantasma no se ve
  a simple vista, pero cuando se activa, crece y crece hasta consumir todo a su
   alrededor, llevándose al sistema al borde de la extinción. Los que entienden la
    terminal saben que está compuesto por dos mitades que se reflejan y que, una vez juntas, desatan el caos.`;

const trace = [
    '1 2 4 1 -2',
    '0 1 2 3 -1',
    '0 1 1 1',
    '1 2 3 4 -1',
    '0 0 1 1 1',
    '2 -1 0 2 1',
    '0 1 0 1',
    '3 0 -2 1',
    '1 1 1 1 1 1',
    '1 2 3 4 -1',
    '0 0 1 1 1',
    '2 -1 0 2 1',
    '0 1 0 1',
    '3 0 -2 1',
    '1 1 1 1 1 1',
    '-1 0 1 -2 2',
    '1 2 4 1 -2',
    '0 1 2 3 -1',
    '0 1 1 1',
    '-1 0 1 -2 2',
    '1 2 4 1 -2',
    '0 1 2 3 -1',
    '0 1 1 1',
    '1 2 3 4 -1',
    '0 0 1 1 1',
    '2 -1 0 2 1',
    '0 1 0 1',
    '3 0 -2 1',
    '1 1 1 1 1 1',
    '-1 0 1 -2 2',
    '1 2 4 1 -2',
    '0 1 2 3 -1',
    '0 1 1 1',
    '1 2 3 4 -1',
    '0 0 1 1 1',
    '2 -1 0 2 1',
    '0 1 0 1',
    '3 0 -2 1',
    '1 1 1 1 1 1',
    '-1 0 1 -2 2',
    '1 2 4 1 -2',
    '0 1 2 3 -1',
    '-1 0 1 -2 2',
    '1 2 4 1 -2',
    '0 1 2 3 -1',
    '0 1 1 1',
    '1 2 3 4 -1',
    '0 0 1 1 1',
    '2 -1 0 2 1',
    '0 1 0 1',
    '3 0 -2 1',
    '1 1 1 1 1 1',
    '-1 0 1 -2 2',
    '1 2 4 1 -2',
    '0 1 2 3 -1',
    '0 1 1 1',
    '0 1 1 1',
    '1 2 3 4 -1',
    '0 0 1 1 1',
    '2 -1 0 2 1',
    '0 1 0 1',
    '3 0 -2 1',
    '1 1 1 1 1 1',
    '-1 0 1 -2 2',
    '1 2 4 1 -2',
    '0 1 2 3 -1',
    '0 1 1 1',
    '1 2 3 4 -1',
    '0 0 1 1 1',
    '2 -1 0 2 1',
    '0 1 0 1',
    '3 0 -2 1',
    '1 1 1 1 1 1',
    '-1 0 1 -2 2',
    '1 2 4 1 -2',
    '0 1 2 3 -1',
    '0 1 1 1',
    '1 2 3 4 -1',
    '0 0 1 1 1',
    '2 -1 0 2 1',
    '-1 0 1 -2 2',
    '1 2 4 1 -2',
    '0 1 2 3 -1',
    '0 1 1 1',
    '1 2 3 4 -1',
    '0 0 1 1 1',
    '2 -1 0 2 1',
    '0 1 0 1',
    '3 0 -2 1',
    '1 1 1 1 1 1',
    '-1 0 1 -2 2',
    '1 2 4 1 -2',
    '0 1 2 3 -1',
    '0 1 1 1',
    '0 1 0 1',
    '3 0 -2 1',
    '1 1 1 1 1 1',
    '1 0 1 0 1 0 1 0 1 4 5 6 7 8',
];


const totalSteps = trace.reduce((totalSteps, instructionsLine) => {

    totalSteps += calculateSteps(instructionsLine);

    return totalSteps;
}, 0);
const lastLineSteps = calculateSteps(trace[trace.length - 1]);

console.log(`submit ${totalSteps}-${lastLineSteps}`)