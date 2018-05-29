var canvas = document.getElementById("graph-canvas");
var canvasSizes = canvas.getBoundingClientRect();

canvas.height = Math.floor(canvasSizes.height);
canvas.width  = Math.floor(canvasSizes.width);
canvas.addEventListener("click", handleCanvasClick);

var graph = createGraph();
calculateNodeLength(graph);
generateSpeedFor(graph.nodes);
initializeSelectors(graph.vertices.length);
renderGraph(graph);
