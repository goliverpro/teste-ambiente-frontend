import {Knex} from 'knex';
export async function up(knex : Knex){
    return knex.schema.createTable('usuarios', table => {
        table.increments('id').primary();
        table.string('nome').notNullable ();
        table.string('telefone').notNullable ();
        table.string('cpf').notNullable ();
        table.string('cep').notNullable ();
        table.string('logradouro').notNullable();
        table.string('cidade').notNullable();
        table.string('estado').notNullable ();
    })
}
export async function down(knex : Knex){
    return knex.schema.dropTable('usuarios');   
}




