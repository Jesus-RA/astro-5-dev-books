/*function escapePyramidHead(room) {
    console.log(room)

    const getLocation = (target, room) => {
        let n = room.length;
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                if(room[i][j] === target){
                    return [i, j];
                }
            }
        }
    }

    const WALL = '#';
    const TARGET = 'T';
    const EMPTY_SPACE = '.';

    const MAX_CELL = room.length;


    const chaserLocation = getLocation('▲', room);
    const targetLocation = getLocation(TARGET, room);

    console.log('Location ▲:', chaserLocation);
    console.log('Location T:', targetLocation);

    
    const distanceX = chaserLocation[0] - targetLocation[0];
    const distanceY = chaserLocation[1] - targetLocation[1];
    //console.table({distanceX, distanceY})

    let [chaserX, chaserY] = chaserLocation;
    let [targetX, targetY] = targetLocation;

    
    const PATHS = [];
    const VISITED = [];
    const pathsCosts = [];
    let path = [chaserLocation];
    let pathCost = 0;


    while(chaserX !== targetX || chaserY !== targetY){

        c

        const downVisited  = VISITED.some(step => canGoDown && step[0] === chaserX+1 && step[1] === chaserY);
        const upVisited    = VISITED.some(step => canGoUp && step[0] === chaserX-1 && step[1] === chaserY);
        const rightVisited = VISITED.some(step => canGoRight && step[0] === chaserX && step[1] === chaserY+1);
        const leftVisited  = VISITED.some(step => canGoLeft && step[0] === chaserX && step[1] === chaserY-1);

        if(downVisited && upVisited && rightVisited && leftVisited){
            return Math.min(pathsCosts);
        }

        if( (canGoRight && rightVisited) && (canGoLeft && leftVisited) && (canGoDown && downVisited) && (canGoUp && upVisited) ){
            return -1;
        }

        let stepTaken = null;
        
        // Go right
        if(chaserY < targetY && canGoRight && stepTaken === null){
            stepTaken = [chaserX, chaserY+1];
            chaserY++;
        }

        // Go left
        if(chaserY > targetY && canGoLeft && stepTaken === null){
            stepTaken = [chaserX, chaserY-1];
            chaserY--;
        }

        // Go down
        if(chaserX < targetX && canGoDown && stepTaken === null){
            stepTaken = [chaserX+1, chaserY];
            chaserX++;
        }

        // Go up
        if(chaserX > targetX && canGoUp && stepTaken === null){
            stepTaken = [chaserX-1, chaserY];
            chaserX--;
        }

        pathCost++;

        console.table({
            chaserX,
            chaserY,
            stepTaken,
            path,
            pathCost,
            VISITED,
        })

        if(stepTaken !== null){
            path.push(stepTaken);
        }
        
        if(stepTaken === null){
            PATHS.push(path);
            pathsCosts.push(pathCost);
            pathCost = 7;

            VISITED.push(path);
            //path = [];
            
            // Reset to start point
            path = [chaserLocation];
            [chaserX, chaserY] = chaserLocation;
        }

        console.table({
            chaserX,
            chaserY,
            stepTaken,
            path,
            pathCost,
            VISITED,
        })

        if(pathCost > 6){
            return;
        }

    }

    return pathCost;
}*/

function escapePyramidHead(room) {

    const getLocation = (target, room) => {
        let n = room.length;
        for(let i = 0; i < n; i++){
            for(let j = 0; j < n; j++){
                if(room[i][j] === target){
                    return [i, j];
                }
            }
        }
    }

    const findSafestPath = (row, column, target, currentCost, minCost) => {

        /*console.table({
            row,
            column,
            currentCost,
            minCost,
            value: room[row][column],
        })*/

        if(row === target[0] && column === target[1]){
            //console.table({currentCost, minCost})
            return Math.min(currentCost, minCost);
        }

        const canGoRight = (column + 1) < MAX_CELL && room[row][column+1] !== WALL;
        const canGoLeft  = (column - 1) >= 0 && room[row][column-1] !== WALL;
        const canGoDown  = (row + 1) < MAX_CELL && room[row+1][column] !== WALL;
        const canGoUp    = (row - 1) >= 0 && room[row-1][column] !== WALL;

        const rightVisited = VISITED.some(step => canGoRight && step[0] === row && step[1] === column+1);
        const leftVisited  = VISITED.some(step => canGoLeft && step[0] === row && step[1] === column-1);
        const downVisited  = VISITED.some(step => canGoDown && step[0] === row+1 && step[1] === column);
        const upVisited    = VISITED.some(step => canGoUp && step[0] === row-1 && step[1] === column);

        /*console.table({
            VISITED,
            canGoRight,
            canGoLeft,
            canGoDown,
            canGoUp,
            rightVisited,
            leftVisited,
            downVisited,
            upVisited,
        })*/

        // Go down
        if(row < target[0] && canGoDown && !downVisited){
            VISITED.push([row + 1, column]);
            minCost = findSafestPath(row + 1, column, target, currentCost+1, minCost);
        }

        // Go Up
        if(row > target[0] && canGoUp && !upVisited){
            VISITED.push([row-1, column]);
            minCost = findSafestPath(row-1, column, target, currentCost+1, minCost);
        }

        // Go Right
        if(column < target[1] && canGoRight && !rightVisited){
            VISITED.push([row, column+1]);
            minCost = findSafestPath(row, column+1, target, currentCost+1, minCost);
        }

        // Go Left
        if(column > target[1] && canGoLeft && !leftVisited){
            VISITED.push([row, column-1]);
            minCost = findSafestPath(row, column-1, target, currentCost+1, minCost);
        }

        return minCost;        
    }

    const WALL = '#';
    const TARGET = 'T';
    const EMPTY_SPACE = '.';

    const MAX_CELL = room.length;


    const chaserLocation = getLocation('▲', room);
    const targetLocation = getLocation(TARGET, room);

    let [chaserX, chaserY] = chaserLocation;

    const VISITED = [chaserLocation];

    /*console.table({
        chaserLocation,
        targetLocation,
        chaserX,
        chaserY,
    })*/

    const result = findSafestPath(chaserX, chaserY, targetLocation, 0, Infinity);
    return result === Infinity ? -1 : result;
}

const room = [
    ['.', '.', '#', '.', '▲'],
    ['#', '.', '#', '.', '#'],
    ['.', '.', '.', '.', '.'],
    ['#', '#', '#', '.', '#'],
    ['T', '.', '.', '.', '.'],
]

// -> 8
console.log(escapePyramidHead(room))

const room2 = [
    ['T', '.', '#', '.'],
    ['.', '.', '.', '.'],
    ['▲', '.', '.', '#'],
    ['.', '#', '#', '#'],
]

// -> 2
console.log(escapePyramidHead(room2))

const room3 = [
    ['#', '#', '#'],
    ['▲', '.', '#'],
    ['.', '#', 'T'],
]

// -> null
console.log(escapePyramidHead(room3))

// 1
console.log(escapePyramidHead([
    ['.', '.', '.'],
    ['T', '▲', '.'],
    ['.', '.', '.']
]))

// 5
console.log(escapePyramidHead([
    ['.', '.', '#', '.', '▲'],
    ['.', '#', '.', '.', '.'],
    ['.', 'T', '.', '#', '.'],
    ['.', '.', '.', '#', '.'],
    ['.', '.', '.', '.', '.'],
]))