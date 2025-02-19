function getSafeNodes(nodesList){
    const nets = [];

    // Iterate over each pair of nodes
    for(let i = 0; i < nodesList.length; i++){

        nets.push(new Set(nodesList[i]));

        // Compare each pair of nodes agains the other ones to get the networks
        for(let j = 0; j < nodesList.length; j++){
            if(i !== j){
                if(nets[i].has(nodesList[j][0]) || nets[i].has(nodesList[j][1])){
                    nets[i].add(nodesList[j][0]);
                    nets[i].add(nodesList[j][1]);
                }
            }
        }
        
    }

    // To get unique nets, sort each node values ascending and convert it to string, that way set will remove repeated items
    let uniqueNets = new Set(nets.map(net => Array.from(net).sort().join(',')));
    uniqueNets = Array.from(uniqueNets).map(net => net.split(','));// Turn nets into arrays
    
    const safeNets = Array.from(uniqueNets).filter(net => net.length < 3);// Get only safe nets, the ones with a length less than 3
    return 'submit ' + safeNets.flat().join(',');
}

// [4, 5]
console.log(getSafeNodes([[1, 2], [2, 3], [4, 5]]));

// []
console.log(getSafeNodes( [[1, 2], [2, 3], [3, 4]]));

// [4, 6, 7, 9]
console.log(getSafeNodes([[4, 6], [7, 9], [10, 12], [12, 16]]));


let network = [
    [
      1,
      2
    ],
    [
      2,
      3
    ],
    [
      3,
      4
    ],
    [
      5,
      6
    ],
    [
      7,
      8
    ],
    [
      9,
      10
    ],
    [
      11,
      12
    ],
    [
      13,
      14
    ],
    [
      15,
      16
    ],
    [
      17,
      18
    ],
    [
      19,
      20
    ],
    [
      21,
      22
    ],
    [
      23,
      24
    ],
    [
      25,
      26
    ],
    [
      27,
      28
    ],
    [
      31,
      32
    ],
    [
      33,
      34
    ],
    [
      35,
      36
    ],
    [
      37,
      38
    ],
    [
      39,
      40
    ],
    [
      41,
      42
    ],
    [
      43,
      44
    ],
    [
      45,
      46
    ],
    [
      47,
      48
    ],
    [
      49,
      50
    ],
    [
      71,
      72
    ],
    [
      73,
      74
    ],
    [
      75,
      76
    ],
    [
      77,
      78
    ],
    [
      79,
      80
    ],
    [
      81,
      82
    ],
    [
      83,
      84
    ],
    [
      85,
      86
    ],
    [
      87,
      88
    ],
    [
      155,
      156
    ],
    [
      157,
      158
    ],
    [
      175,
      176
    ],
    [
      177,
      178
    ],
    [
      179,
      180
    ],
    [
      181,
      182
    ],
    [
      183,
      184
    ],
    [
      195,
      196
    ],
    [
      197,
      198
    ],
    [
      198,
      199
    ],
    [
      199,
      200
    ],
    [
      2,
      4
    ],
    [
      4,
      6
    ],
    [
      6,
      8
    ],
    [
      8,
      10
    ],
    [
      10,
      12
    ]
  ]


  console.log(getSafeNodes(network));