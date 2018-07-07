//存储获胜方式结果
let psSets;

//初始化棋盘
export const initNet = (size = 3) => {
    psSets = new Array();

    let temp = new Array(size).fill(0);

    let net = new Array(size);
    for (let i = 0; i < size; i++) {
        net[i] = [...temp];
    }
    return net;
}

//设置已有棋子到棋盘
export const setPosition = (user = "x", sourceArray, xArray) => {
    if (!xArray || !Array.isArray(xArray) || xArray.length == 0)
        return;
    let userValue = user == "x" ? 1 : -1;
    for (let x of xArray) {
        sourceArray[x[0]][x[1]] = userValue;
    }
}

//棋盘大小
let saLen = 0;
//计算指定玩家获胜位置
export const getWinerPositions = (user, sourceArray) => {
    psSets = new Array();
    let crtPostion = [0, 0];
    saLen = sourceArray.length;
    let i = 0;
    let sumtemp = 0;
    let tempWinPot;

    //向右下斜线

    sumtemp = 0;
    for (i = 0; i < saLen; i++) {
        sumtemp += sourceArray[i][i];
        if (sourceArray[i][i] == 0)
            tempWinPot = [i, i];
    }
    if ((user == "x" && sumtemp == 2) || (user == "o" && sumtemp == -2))
        psSets.push(tempWinPot);

    //向右上斜线
    sumtemp = 0;
    for (i = 0; i < saLen; i++) {
        sumtemp += sourceArray[i][saLen - 1 - i];        
        if (sourceArray[i][saLen - 1 - i] == 0)
            tempWinPot = [i, saLen - 1 - i];
    }
    if ((user == "x" && sumtemp == 2) || (user == "o" && sumtemp == -2))
        psSets.push(tempWinPot);

    RecCalcWinerPosition(sourceArray, crtPostion, user);

    return psSets;
}

//递归横向和纵向移动
const RecCalcWinerPosition = (sourceArray, crtPostion, user) => {
    let i = 0;
    let sumtemp = 0;
    let tempWinPot;
    //横向
    if (crtPostion[0] == 0) {
        sumtemp = 0;
        for (i = 0; i < saLen; i++) {
            sumtemp += sourceArray[i][crtPostion[1]];
            if (sourceArray[i][crtPostion[1]] == 0)
                tempWinPot = [i, crtPostion[1]];
        }
        if ((user == "x" && sumtemp == 2) || (user == "o" && sumtemp == -2)) {
            psSets.push(tempWinPot);
        }
    }
    //纵向
    if (crtPostion[1] == 0) {
        sumtemp = 0;
        for (i = 0; i < saLen; i++) {
            sumtemp += sourceArray[crtPostion[0]][i];
            if (sourceArray[crtPostion[0]][i] == 0)
                tempWinPot = [crtPostion[0], i];
        }
        if ((user == "x" && sumtemp == 2) || (user == "o" && sumtemp == -2)) {
            psSets.push(tempWinPot);
        }
    }
    //横向移动一格
    if (crtPostion[1] == 0 && crtPostion[0] < saLen - 1) {
        let mvPos = Array.from(crtPostion);
        mvPos[0] = mvPos[0] + 1;
        RecCalcWinerPosition(sourceArray, mvPos, user);
    }
    //纵向移动一格
    if (crtPostion[0] == 0 && crtPostion[1] < saLen - 1) {
        let mvPos = Array.from(crtPostion);
        mvPos[1] = mvPos[1] + 1;
        RecCalcWinerPosition(sourceArray, mvPos, user);
    }
}