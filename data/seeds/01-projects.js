
exports.seed = function(knex) {

  return knex('projects').truncate()
    .then(function() {

      return knex('projects').insert([
        {
          name: 'Get a Job',
          description: 'Steps to take following Lambda in order to get a job',
          completed: 0,
        },
        {
          name: 'Finish School',
          description: 'Steps to take in order to finish up at Lambda',
          completed: 0,
        },

      ]);

  });
};