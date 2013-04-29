bfs.js
======

Simple BFS in JavaScript for trees. The idea here is to be able to find a leaf in a tree from a root, without `document.getElementById()`

<pre>
// Create a root for a tree.
var root = document.createElement("div");

// Grow the tree.
root.appendChild(document.createElement("div"));
root.appendChild(document.createElement("div"));
root.children[1].appendChild(document.createElement("div"));
root.children[1].appendChild(document.createElement("div"));
root.children[1].children[1].appendChild(document.createElement("div"));
root.children[1].children[1].appendChild(document.createElement("div"));
root.children[1].children[1].appendChild(document.createElement("div"));
root.children[1].children[1].children[1].id = "myDiv";

// Get a node in the tree by it's ID
root.getElementById("myDiv");
</pre>
