import NextAuth from "next-auth/next";

declare module 'next-auth' {
    interface Session {
        user: {
            id: number;
            email: string;
            name?: string;
            phone?: string;
            avatar?: {
                file_url: string;
                file_name: string
            }
        }
    }
}