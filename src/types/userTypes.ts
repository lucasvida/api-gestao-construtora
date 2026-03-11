export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface DecodedToken {
    id: number;
    role: string;
}