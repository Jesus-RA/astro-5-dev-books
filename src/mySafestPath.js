function findSafestPath(dream) {
    if(!dream.length){
        return 0;
    }

    if(dream.length === 1){
        return dream[0].reduce((total, danger) => {
            total+= danger

            return total;
        }, 0);
    }

    const paths = [];
    const pathsWithTotals = {};

    let iter = 0;
    let path;
    do{
        //console.log(' ----------- getPath ----------- ')
        path = getPath([0, 0], dream, [[0,0]])
        //console.table(path);
        if(path !== false){
            paths.push(path);

            const pathTotal = path.reduce((acc, [i, j]) => {
                acc += dream[i][j];

                return acc;
            }, 0);
            pathsWithTotals[pathTotal] = path;
        }
        iter++;
    }while(path);

    //const path = getPath([0, 0], dream, [[0,0]]);
    console.table(paths);
    console.table(pathsWithTotals);

    return Math.min(...Object.keys(pathsWithTotals))
  

    function getPath(position, dream, path = []){
      const [i, j] = position;
      const maxRows = dream.length - 1;
      const maxColumns = dream[0].length - 1;

      /*console.table({
        i,
        j,
        maxRows,
        maxColumns,
        path,
      })*/

      // If end reached, return the path
      if(i === maxRows && j === maxColumns){
        return path;
      }

      // Bottom reached, only move right
      if((i + 1) > maxRows){
        //return [i, j+1];
        path.push([i, j+1]);
        return getPath([i, j+1], dream, path);
      }

      // Right reached, only move bottom
      if((j + 1) > maxColumns){
        //return [i+1, j];
        path.push([i+1, j]);
        return getPath([i+1, j], dream, path);
      }
  
      const down = dream[i+1][j];
      const right = dream[i][j+1];

      const downVisited = paths.some(path => path[1] && path[1][0] === i+1 && path[1][1] === j);
      const rightVisited = paths.some(path => path[1] && path[1][0] === i && path[1][1] === j+1);

      /*console.table({
        downVisited,
        rightVisited,
      })*/

      // All paths have been visited
      if(downVisited && rightVisited){
        return false;
      }

      if(downVisited){
        path.push([i, j+1]);
        return getPath([i, j+1], dream, path);
      }

      if(rightVisited){
        path.push([i+1, j]);
        return getPath([i+1, j], dream, path);
      }
      
  
      // Move right
      if(right < down){
        path.push([i, j+1]);
        return getPath([i, j+1], dream, path);
      }
  
      // Move down
      if(down < right){
        path.push([i+1, j]);
        return getPath([i+1, j], dream, path);
      }


      path.push([i, j+1]);
      return getPath([i, j+1], dream, path);
    }
  }

  
// 7
//console.time('7')
console.log(findSafestPath([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
]))
//console.timeEnd('7')

//5
//console.time('5')
console.log(findSafestPath([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]))
//console.timeEnd('5')

//console.time('findSafestPath')
//20
console.log(findSafestPath([[1, 2], [3, 4], [6, 5], [7, 8]]))
//console.timeEnd('findSafestPath')

// 11
console.log(findSafestPath([[5, 9], [4, 2]]))

// 10
console.log(findSafestPath([[1, 2, 3], [3, 2, 1], [4, 4, 4]]))

// 21
console.log(findSafestPath([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// 7
console.log(findSafestPath([
  [1, 1, 1],
  [1, 1, 3],
  [3, 2, 2]  
]))

console.log(findSafestPath([
  [1, 3],
  [2, 1]
]));