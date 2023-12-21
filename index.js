const getAreaPath = './areas'

module.exports = {
    ////////////
    // Areas //
    //////////
    circleGetArea: require(`${getAreaPath}/circle`),
    coneGetArea: require(`${getAreaPath}/cone`),
    rectangleGetArea: require(`${getAreaPath}/rectangle`),
    regularpolygonGetArea: require(`${getAreaPath}/regularpolygon`),
    rhombusGetArea: require(`${getAreaPath}/rhombus`),
    sphereGetArea: require(`${getAreaPath}/sphere`),
    squareGetArea: require(`${getAreaPath}/square`),
    trapezoidGetArea: require(`${getAreaPath}/trapezoid`),
    triangleGetArea: require(`${getAreaPath}/triangle`)
};