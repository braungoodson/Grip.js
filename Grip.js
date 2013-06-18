/*

Pseudo Code From Wiki
procedure BFS(G,v):
	create a queue Q
	enqueue v onto Q
	mark v
	while Q is not empty:
		t ← Q.dequeue()
		if t is what we are looking for:
			return t
		for all edges e in G.adjacentEdges(t) do
		    u ← G.adjacentVertex(t,e)
		    if u is not marked:
		        mark u
		        enqueue u onto Q
	return none

*/

// BFS
// O(|E|+|V|)
// +JS Optimization
function bfs (id) {
	var Q = [];
	Q.push(this);
	var guid = Math.floor(Math.random()*10000000);
	this.marked = guid;
	var Ql = Q.length;
	while (Ql) {
		var t = Q.shift();
		if (t.id == id) {
			return t;
		} else {
			var tl = t.children.length;
			var u = null;
			for (var i = 0; i < tl; i++) {
				u = t.children[i];
				if (u.marked != guid) {
					u.marked = guid;
					Q.push(u);
				}
			}
		}
		ql = Q.length;
	}
	return null;
}

Element.prototype.getElementById = bfs;
