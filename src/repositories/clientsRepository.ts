import { db } from "../config/db.js";
import { Client, ClientWithDevelopment } from "../types/clientsTypes.js";

export const clientRepository = {
    async getAll(): Promise<Client[]> {
        const result = await db.execute(`SELECT * FROM clients`);
        return result.rows as unknown as Client[];
    },
    async getById(id: number) {
        const result = await db.execute({
            sql: `SELECT * FROM clients WHERE id = :id`,
            args: { id }
        });
        return result.rows[0];
    },
    async create(client: any) {
        // Nota: Também poderia ser feito utilizando "?" com um array, 
        // mas argumentos nomeados (:campo) com objetos são mais seguros contra erros de ordem em queries grandes.
        const result = await db.execute({
            sql: `INSERT INTO clients (name, phone, email, cpf, zip_code, street, number, neighborhood, city, state, developments_id, created_at) VALUES (:name, :phone, :email, :cpf, :zip_code, :street, :number, :neighborhood, :city, :state, :developments_id, :created_at) RETURNING *`,
            args: { name: client.name, phone: client.phone, email: client.email, cpf: client.cpf, zip_code: client.zip_code, street: client.street, number: client.number, neighborhood: client.neighborhood, city: client.city, state: client.state, developments_id: client.developments_id, created_at: new Date().toISOString() }
        });
        return result.rows[0];
    },
    async update(id: number, client: any) {
        const result = await db.execute({
            sql: `UPDATE clients SET name = :name, phone = :phone, email = :email, cpf = :cpf, zip_code = :zip_code, street = :street, number = :number, neighborhood = :neighborhood, city = :city, state = :state, developments_id = :developments_id WHERE id = :id RETURNING *`,
            args: { id, name: client.name, phone: client.phone, email: client.email, cpf: client.cpf, zip_code: client.zip_code, street: client.street, number: client.number, neighborhood: client.neighborhood, city: client.city, state: client.state, developments_id: client.developments_id }
        });
        return result.rows[0];
    },
    async delete(id: number) {
        const result = await db.execute({
            sql: `DELETE FROM clients WHERE id = :id RETURNING *`,
            args: { id }
        });
        return result.rows[0];
    },
    async getClientsWithDevelopments(): Promise<ClientWithDevelopment[]> {
        const result = await db.execute(`SELECT c.id, c.name, c.phone, c.email, c.cpf, c.zip_code, c.street, c.number, c.neighborhood, c.city, c.state, c.created_at, d.name as development_name FROM clients c LEFT JOIN developments d ON c.developments_id = d.id ORDER BY c.created_at DESC`);
        return result.rows as unknown as ClientWithDevelopment[];
    }
};