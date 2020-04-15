
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        // ID 1,2,3,4,5,6,7,8,
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        // LIGAÇÃO COM A TABELA ONGS
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
