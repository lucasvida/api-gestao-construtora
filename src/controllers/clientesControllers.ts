import { db } from "../config/db.js";
import { Request, Response } from "express";
import maskInfo from "../helpers/maskInfo.js";

interface Cliente {
    id?: number;
    nome: string;
    telefone: string;
    email: string;
    cpf: string;
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    emprendimento_id: number;
}

export const getClientes = async (req: Request, res: Response) => {
    try {
        const result = await db.execute(`
            SELECT 
                c.id, 
                c.nome, 
                c.telefone, 
                c.email, 
                c.cpf, 
                c.cep, 
                c.rua,
                c.numero, 
                c.bairro, 
                c.cidade, 
                c.estado, 
                c.emprendimento_id,
                e.nome as nome_emprendimento 
            FROM clientes c
            LEFT JOIN empreendimentos e ON c.emprendimento_id = e.id
        `);
        res.status(200).json(result.rows.map((dadosCliente: any) => ({
            ...dadosCliente,
            cpf: maskInfo.maskCpf(dadosCliente.cpf),
            email: maskInfo.maskEmail(dadosCliente.email)
        })));
    } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        res.status(500).json({ message: "Error fetching clients" });
    }
};

export const createCliente = async (req: Request, res: Response) => {
    try {
        const { 
            nome, 
            telefone, 
            email, 
            cpf,
            cep, 
            rua, 
            numero,
            bairro, 
            cidade, 
            estado, 
            emprendimento_id 
        }: Cliente = req.body;

        if (!nome || !email || !telefone || !emprendimento_id) {
            return res.status(400).json({ message: "Missing required fields (nome, email, telefone, emprendimento_id)" });
        }

        await db.execute({
            sql: "INSERT INTO clientes (nome, telefone, email, cpf, cep, rua, numero, bairro, cidade, estado, emprendimento_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            args: [nome, telefone, email, cpf, cep, rua, numero, bairro, cidade, estado, emprendimento_id],
        }); 

        res.status(201).json({ 
            message: "Cliente created successfully", 
            data: { nome, email } 
        });
    } catch (error: any) {
        if (error.code === 'SQLITE_CONSTRAINT' || error.message?.includes("UNIQUE constraint failed: clientes.email")) {
            return res.status(409).json({ message: "Client already exists with this email" });
        }
        res.status(500).json({ message: "Error creating client" });
    }
};