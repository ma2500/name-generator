const names = [ 
  'Eve', 
  'Nyx', 
];

function generate() {
  var r = Math.random() * names.length,
      idx = Math.floor(r);

  return
 	names[idx]
}

// default export
module.exports = generate;
