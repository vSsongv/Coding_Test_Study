class DirectedGraph {
    constructor() {
        this.edges = {};
    }
    // 정점 추가
    addVertex(vertex) {
        this.edges[vertex] = {};
    }

    // 간선 추가
    addEdge(originVertex, destVertex, weight) {
        if (weight === undefined) {
            weight = 0;
        }
        this.edges[originVertex][destVertex] = weight;
    }
}

function makeGraph(n, edges, m) {
    let graph = new DirectedGraph();
    for (let i = 0; i < n; i++) {
        graph.addVertex(edges[i][0]);
    }
    for (let j = 0; j < n; j++) {
        graph.addEdge(edges[j][0], edges[j][1], edges[j][2])
    }
    return graph;
}


console.log(makeGraph(6, [[1, 2, 12], [1, 3, 4], [2, 1, 2], [2, 3, 5], [2, 5, 5], [3, 4, 5], [4, 2, 2], [4, 5, 5], [6, 4, 5]], 5));