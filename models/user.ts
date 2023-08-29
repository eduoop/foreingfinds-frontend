export type User = {
    id: number,
    email: string,
    name?: string,
    phone?: string,
    role: string,
    surname?: string,
    created_at: string,
    updated_at: string,
    avatar?: {
        file_url: string;
    }
}