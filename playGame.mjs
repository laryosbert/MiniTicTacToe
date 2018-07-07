import {
    initNet,
    setPosition,
    getWinerPositions
} from "./gameRule"


//设置已有棋子的棋盘
function SetExistsNet(net, gameIndex) {
    // someFunction(
    //     ‘x’,    
    //     [ [‘o’, ‘e’, ‘e’],    
    //       [‘o’, ‘x’, ‘o’],    
    //       [‘x’, ‘x’, ‘e’] ]    
    //     )    
    // return [ [2, 2], [0, 1], [0, 2] ]
    if (gameIndex == "A") {
        setPosition("x", net, [
            [1, 1],
            [2, 0],
            [2, 1]
        ]);
        setPosition("o", net, [
            [0, 0],
            [1, 0],
            [1, 2]
        ]);
    }

    // someFunction(
    //     ‘x’,        
    //     [ [‘x’, ‘o’, ‘o’],        
    //         [‘x’, ‘x’, ‘e’],        
    //         [‘e’, ‘o’, ‘e’] ]        
    //     )        
    // return [ [2, 2], [1, 2], [2, 0] ]
    if (gameIndex == "B") {
        setPosition("x", net, [
            [0, 0],
            [1, 0],
            [1, 1]
        ]);
        setPosition("o", net, [
            [0, 1],
            [0, 2],
            [2, 1]
        ]);
    }

    // someFunction(
    //     ‘x’,        
    //     [ [‘x’, ‘x’, ‘o’],        
    //         [‘e’, ‘e’, ‘e’],        
    //         [‘e’, ‘e’, ‘e’] ]        
    //     )        
    // return [ ]
    if (gameIndex == "C") {
        setPosition("x", net, [
            [0, 0],
            [0, 1]
        ]);
        setPosition("o", net, [
            [0, 2]
        ]);
    }
}

//游戏输出
function startPlay(gameIndex) {
    console.log("Game " + gameIndex);
    let size = 3;
    let net = initNet(size);

    SetExistsNet(net, gameIndex);

    for (let i = 0; i < size; i++)
        console.log(net[i]);

    let winResx = getWinerPositions("x", net);
    console.log("x Win Result:");
    console.log(winResx);

    let winResy = getWinerPositions("o", net);
    console.log("o Win Result:");
    console.log(winResy);
}

//开始游戏
startPlay("A");
startPlay("B");
startPlay("C");