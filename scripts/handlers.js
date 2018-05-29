function findShortestPath() {
    var pathDetails = getPathDetails();
    if (pathDetails.start != pathDetails.end)
    {
        graph.djkstraPath = findDjkstraPath(graph, parseInt(pathDetails.start), parseInt(pathDetails.end), lengthWeight);
        graph.timePath = findDjkstraPath(graph, parseInt(pathDetails.start), parseInt(pathDetails.end), timeWeight);
    }
    renderGraph(graph);
}

function handleCanvasClick(event) {
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;
    console.log("{ x: " + x + ", y: " + y + " }");
}

function handleWeightSwitch(event) {
    graph.showWeights = !graph.showWeights;
    renderGraph(graph);
}