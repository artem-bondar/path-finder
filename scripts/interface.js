function renderGraph(graph) {
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "black";
    context.strokeStyle = "black";
    context.lineWidth = 1;

    drawVertices(graph.vertices);
    var i = 0;
    for (var node = graph.nodes[0];
        i < graph.nodes.length; node = graph.nodes[i + 1], i += 1) {
        var start = graph.vertices[node.start];
        var end   = graph.vertices[node.end];
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.moveTo(end.x + graph.vertexRadius, end.y);
        context.stroke();
    }
    if (graph.showWeights)
        drawWeights(graph);
    if (graph.djkstraPath != undefined)
        drawPath(graph, graph.djkstraPath, "orange", 2);
    if (graph.timePath != undefined)
        drawPath(graph, graph.timePath, "green", 2);
}

function drawVertices(vertices) {
    var context = canvas.getContext("2d");
    context.font = "12px Arial";
    context.fillStyle = "black";

    for (var i = 0; i < vertices.length; i++) {
        context.moveTo(vertices[i].x, vertices[i].y);
        context.arc(vertices[i].x, vertices[i].y,
            graph.vertexRadius, 0, 2 * Math.PI);
        context.fill();
        context.fillText(i, vertices[i].x + (graph.vertexRadius + 1), vertices[i].y - (graph.vertexRadius) + 1);
    }
}

function drawWeights(graph) {
    var context = canvas.getContext("2d");
    context.font = "10px Arial";
    context.fillStyle = "gray";

    var i = 0;
    for (var node = graph.nodes[0];
        i < graph.nodes.length; node = graph.nodes[i + 1], i += 1) {
        var start = graph.vertices[node.start];
        var end   = graph.vertices[node.end];
        context.fillText(Math.floor(node.length) + "/" + node.speed,
            ((start.x < end.x) ? start.x : end.x) + Math.abs(end.x - start.x) / 2,
            ((start.y < end.y) ? start.y : end.y) + Math.abs(end.y - start.y) / 2);
    }
}

function drawPath(graph, path, color, width) {
    var context = canvas.getContext("2d");
    context.strokeStyle = color;
    context.lineWidth = width;

    for (var i = 0; i < path.length - 1; i++) {
        var start = graph.vertices[path[i]];
        var end   = graph.vertices[path[i + 1]];
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.moveTo(end.x + graph.vertexRadius, end.y);
        context.stroke();
    }
}

function initializeSelectors(nodesAmount) {
    var start = document.getElementById("select-start");
    var end   = document.getElementById("select-end");
    var text = "";

    for (var i = 0; i < nodesAmount; i++)
        text += '<option value="' + i + '">' + i + '</option>';
    start.innerHTML = text;
    end.innerHTML = text;
}

function getPathDetails() {
    var start = document.getElementById("select-start");
    var end   = document.getElementById("select-end");
    return { start: start.options[start.selectedIndex].value,
             end:   end.options[end.selectedIndex].value }
}
