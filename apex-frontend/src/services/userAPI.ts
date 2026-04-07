import type { User } from "../types/user";



export async function getUsers(): Promise<User[]> {
    const response = await fetch("http://localhost:3000/api/users");

    if (!response.ok) {
        throw new Error("Failed to fetch Users");
    }

    return (await response.json()) as User[];
}
export async function getUser(): Promise<User> {
    const response = await fetch("http://localhost:3000/api/user");

    if (!response.ok) {
        throw new Error("Failed to fetch User");
    }

    return (await response.json()) as User;
}
export async function createUser(params:type) {
    
}