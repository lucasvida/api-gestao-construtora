export interface Client {
    id?: number;
    name: string;
    phone: string;
    email: string;
    cpf: string;
    zip_code: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    developments_id?: number;
    created_at?: string;
}

export interface ClientWithDevelopment extends Client {
    development_name?: string;
}