import { Client } from 'faunadb'

/* CONFIGURAÇÃO DO FAUNA */

export const fauna = new Client({
    secret: process.env.FAUNA_DB_KEY
})


