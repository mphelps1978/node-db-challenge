
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
            { name: 'Applications', description: 'Fill out applications' },
            { name: 'Computer', description: 'The thing most developers need' },
            { name: 'Office', description: 'Where the work gets done' },
            { name: 'Telephone', description: 'Likely how you do your initial interview'},
            { name: 'TK', description: 'The training kit that Lambda students use'},
          ]);
  });
}
