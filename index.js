const names = [
  'Eve',
  'Nyx',
];

function generate() {
  const r = Math.random() * names.length;
  const idx = Math.floor(r);

  return names[idx];
}

// default export
module.exports = generate;
