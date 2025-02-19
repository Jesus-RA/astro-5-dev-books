function findSafestPath(dream) {

    const findSafestPath = (row, column, currentCost, minCost) => {

        console.table({
            maxRows,
            maxColumns,
            row,
            column,
            damage: dream[row][column]
        })

        if(row === maxRows - 1 && column === maxColumns - 1){
            return Math.min(currentCost, minCost);
        }

        // Go down
        if(row + 1 < maxRows && currentCost <= minCost){
            minCost = findSafestPath(row + 1, column, currentCost + dream[row+1][column], minCost);
        }

        // Go Right
        if(column + 1 < maxColumns && currentCost <= minCost){
            minCost = findSafestPath(row, column+1, currentCost + dream[row][column+1], minCost);
        }
        
        return minCost;
        
    }

    const maxRows = dream.length;
    const maxColumns = dream[0].length;

    return findSafestPath(0, 0, dream[0][0], Infinity);
}

/*function findSafestPath(dream) {
    function backtrack(x, y, currentCost, minCost) {

        // Si llegamos a la esquina inferior derecha
        if (x === dream.length - 1 && y === dream[0].length - 1) {
            console.log({currentCost, minCost})
            console.log('----- Min found -----')
            return Math.min(currentCost, minCost);
        }

        // Mover hacia la derecha
        if (y + 1 < dream[0].length) {
            minCost = backtrack(x, y + 1, currentCost + dream[x][y + 1], minCost);
        }

        // Mover hacia abajo
        if (x + 1 < dream.length) {
            minCost = backtrack(x + 1, y, currentCost + dream[x + 1][y], minCost);
        }

        console.log('----- About to return min cost -----')
        return minCost;
    }

    if (!dream || dream.length === 0 || dream[0].length === 0) {
        return 0;
    }

    // Iniciar el backtracking desde la esquina superior izquierda
    return backtrack(0, 0, dream[0][0], Infinity);
}*/

// 7
console.log(findSafestPath([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
]))