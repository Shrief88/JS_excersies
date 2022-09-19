function isValidMove(point){
    if(point[0]>7 || point[0]<0 || point[1]>7 || point[1]<0){
        return false;
    }
    return true;
}


const knightMoves = (point1,point2)=>{
    let depth = Array(8);
    let parent = Array(8);
    for(let i=0;i<8;i++){
        depth[i] = Array(8).fill(Infinity);
        parent[i] = Array(8).fill(null);
    }

    let q = [];
    q.push(point1);
    depth[point1[0]][point1[1]] = 0;
    parent[point1[0]][point1[1]] = point1;

    while(q.length != 0){
        let curNode = q[0];
        q.shift();

        let children = [];
        children.push([curNode[0]+2,curNode[1]+1])
        children.push([curNode[0]+1,curNode[1]+2]);
        children.push([curNode[0]-2,curNode[1]-1]);
        children.push([curNode[0]-1,curNode[1]-2]);
        children.push([curNode[0]+2,curNode[1]-1]);
        children.push([curNode[0]+1,curNode[1]-2]);
        children.push([curNode[0]-2,curNode[1]+1]);
        children.push([curNode[0]-1,curNode[1]+2]);

        for(let i=0;i<8;i++){
            if(isValidMove(children[i]) && depth[children[i][0]][children[i][1]] == Infinity){
                q.push(children[i]);
                depth[children[i][0]][children[i][1]] = depth[curNode[0]][curNode[1]] + 1;
                parent[children[i][0]][children[i][1]] = curNode;
            }

            if(JSON.stringify(children[i]) === JSON.stringify(point2)){
                q = [];
                break;
            }
        }
    }

    let ptr = depth[point2[0]][point2[1]]+1;
    let solution = Array(ptr);
    solution[--ptr] = point2;
    while(ptr>0){
        let curNode = solution[ptr];
        let parentNode = parent[curNode[0]][curNode[1]];
        solution[--ptr] = parentNode;
    }
    return solution;

}



let sol = knightMoves([0, 0], [7, 7]);

console.log(`You made it in ${sol.length-1} moves!  Here's your path:`)
for(let i=0;i<sol.length;i++){
    console.log(sol[i]);
}








