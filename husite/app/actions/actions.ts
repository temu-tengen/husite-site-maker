'use server';
import { neon } from "@neondatabase/serverless";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export type FormState = {
    success: boolean;
    message: string;
}

export async function checkLogin(prevState: FormState, formData: FormData): Promise<FormState> {
    const cookieStore = await cookies();
    const sql = neon(process.env.DATABASE_URL!);

    const username = formData.get("username");
    const password = formData.get("password");

    const usersMatching = await sql`
    SELECT username FROM logintable WHERE username = ${username} AND password = ${password};
    `;

    if (usersMatching.length > 0) {
        cookieStore.set({
            name: 'session',
            value: JSON.stringify(username),
            httpOnly: true,
            secure: true,
            path: '/',
            maxAge: 60 * 60 * 42,
        });

        redirect('/admin');
        return { success: true, message: 'Successfully Logged In'};
    } else {
        return { success: false, message: "Our bad! It seems your account isn't an admin account we have registered in our system. If you want to request a site, you don't need an account. Just follow the site! "}
    }

}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('session');

    redirect('/');
}

export async function returnHome() {
    redirect('/');
}

export async function submitRequest(prevState: FormState, formData: FormData): Promise<FormState> {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const requestName = formData.get("requestName");
    const description = formData.get("description");

    const sql = neon(process.env.DATABASE_URL!);

    // check if user already has an email in the database
    const usernameOfEmailIfExists = await sql`SELECT firstname FROM requests WHERE email = ${email};`;
    if (usernameOfEmailIfExists.length === 0) {
        await sql`INSERT INTO requests (requestname, firstname, lastname, email, description) VALUES (${requestName}, ${firstName}, ${lastName}, ${email}, ${description});`;
        return { success: true, message: "Your request has been sent in! We'll reply to you asap with your provided email." };
    } else {
        return { success: false, message: "You've already sent in an request in progress. Due to our limited staff, we can't accept more than one request per person. Try again after your first site has been completed." };
    }
}

export async function getRequests() {
    const sql = neon(process.env.DATABASE_URL!);

    return sql`
    SELECT * FROM requests;
    `;
}