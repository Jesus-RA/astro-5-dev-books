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

    const movements = {
        down: [[0, 0]],
        right: [[0, 0]],
    };

    let position;
    const maxRows = dream.length-1;
    const maxColumns = dream[0].length-1;
    
    position = [1,0];
    movements['down'].push(position);
    while(position[0] < (maxRows) || position[1] < (maxColumns)){
        position = getNextMovement(position, dream);
        movements['down'].push(position);
    }

    position = [0,1];
    movements['right'].push(position);
    while(position[0] < (maxRows) || position[1] < (maxColumns)){
        position = getNextMovement(position, dream);
        movements['right'].push(position);
    }
  
    // Total danger
    const damageDown = movements['down'].reduce((acc, [i, j]) => {
        acc += dream[i][j];
        return acc;
    }, 0);

    const damageRight = movements['right'].reduce((acc, [i, j]) => {
        acc += dream[i][j];
        return acc;
    }, 0);

    return Math.min(damageDown, damageRight);
  

    function getNextMovement(position, dream){
      const [i, j] = position;
      const maxRows = dream.length;
      const maxColumns = dream[0].length;

      // Bottom reached, only move right
      if((i + 1) >= maxRows){
        return [i, j+1];
      }

      // Right reached, only move bottom
      if((j + 1) >= maxColumns){
        return [i+1, j];
      }
  
      const down = dream[i+1][j];
      const right = dream[i][j+1];

      /*console.table({
        i,
        j,
        maxRows,
        maxColumns,
        down,
        right,
      })*/
  
      // Move right
      if(right <= down){
        return [i, j+1];
      }
  
      // Move down
      if(down < right){
        return [i+1, j];
      }


      // Figure out how to choose a path when down and right are equal
      // This might not be the optimal solution
      const nextI = getNextMovement([i+1, j], dream);
      const nextJ = getNextMovement([i, j+1], dream);

      if(nextI <= nextJ){
        return [i+1, j];
      }else{
        return [i, j+1];
      }
    }
  }

  const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ];
  //const res = findSafestPath(dream);
  //console.log(res);
  //console.log(findSafestPath([[1, 2], [3, 4], [6, 5], [7, 8]]))

  let d = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
  console.log(findSafestPath([[1, 1, 1], [1, 1, 1], [1, 1, 1]]))//5


  /*console.table({
        i,
        j,
        maxLength,
        down,
        right,
        cond1: (i + 1) < maxLength && right < down,
        cond2: (j + 1) < maxLength && down < right,
      })*/