export interface Development {
    id?: number;
    name: string;
    status: string;
    status_progress: string;
    created_at?: Date;
}

export interface DevelopmentWithClientCount extends Development {
    total_clients: number;
}