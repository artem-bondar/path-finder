function indexToID(i, j) {
    return ((i < 10) ? "0" : "") + i +
        ((j < 10) ? "0" : "") + j;
}

function IDtoIndex(id) {
    return { i: parseInt(id.slice(0, 2)), j: parseInt(id.slice(2)) };
}

function calculateNodeLength(graph) {
    var i = 0;
    for (var node = graph.nodes[0];
        i < graph.nodes.length; node = graph.nodes[i + 1], i += 1) {
        node.length = lengthWeight(graph, node.start, node.end);
    }
}

function generateSpeedFor(nodes) {
    var seed = 1;

    for (var i = 0; i < nodes.length; i++)
        if (nodes[i].speed == undefined) {
            var random = Math.sin(seed++) * 10000;
            var speed = 10 + 90 * (random - Math.floor(random));
            nodes[i].speed = Math.floor(speed);
        }
}

function findDjkstraPath(graph, start, end, weight) {
    initDjkstraValues(graph, start, end);
    var vertex = getCheapestVertex(graph.vertices);
    while (vertex != undefined) {
        calculateDjkstarMarks(graph, vertex, weight);
        vertex = getCheapestVertex(graph.vertices);
    }
    return graph.vertices[end].path;
}

function getCheapestVertex(vertices) {
    var index = undefined;
    var cost = Infinity;
    for (var i = 0; i < vertices.length; i++) {
        if (!vertices[i].seen && vertices[i].mark < cost) {
            index = i;
            cost = vertices[i].mark;
        }
    }
    return index;
} 

function lengthWeight(graph, start, end) {
    return Math.sqrt(
        Math.pow(Math.abs(graph.vertices[end].x - graph.vertices[start].x), 2) +
        Math.pow(Math.abs(graph.vertices[end].y - graph.vertices[start].y), 2));
}

function timeWeight(graph, start, end) {
    var nodeParams = getNodeParams(graph.nodes, start, end);
    return nodeParams.length / nodeParams.speed;
}

function initDjkstraValues(graph, start) {
    for (var i = 0; i < graph.vertices.length; i++) {
        graph.vertices[i].path = [];
        graph.vertices[i].mark = Infinity;
        graph.vertices[i].seen = false;
    }
    
    graph.vertices[start].path = [start];
    graph.vertices[start].mark = 0;
}

function calculateDjkstarMarks(graph, start, weight) {
    var neighbours = getNeighbours(graph, start);

    for (var i = 0; i < neighbours.length; i++) {
        var pathLength = graph.vertices[start].mark + weight(graph, start, neighbours[i]);
        if (pathLength < graph.vertices[neighbours[i]].mark) {
            graph.vertices[neighbours[i]].mark = pathLength;
            graph.vertices[neighbours[i]].path = graph.vertices[start].path.concat(neighbours[i]);
        }
    }
    graph.vertices[start].seen = true;
}

function getNodeParams(nodes, start, end) {
    for (var i = 0; i < nodes.length; i++)
    {
        if ((nodes[i].start == start && nodes[i].end == end) ||
        (nodes[i].end == start && nodes[i].start == end)) {
            return { length: nodes[i].length, speed: nodes[i].speed };
        }
    }
}

function getNeighbours(graph, vertex) {
    var neighbours = [];

    for (var i = 0; i < graph.nodes.length; i++)
    {
        if (graph.nodes[i].start == vertex)
            neighbours.push(graph.nodes[i].end);
        if (graph.nodes[i].end == vertex)
            neighbours.push(graph.nodes[i].start);  
    }
    return neighbours;
}
