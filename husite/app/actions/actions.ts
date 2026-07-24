'use server';
import { neon } from "@neondatabase/serverless";

export type FormState = {
    success: boolean;
    message: string;
}

export async function submitRequest(prevState: FormState, formData: FormData): Promise<FormState> {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const requestName = formData.get("requestName");
    const description = formData.get("description");

    const sql = neon(process.env.DATABASE_URL!);

    // check if user already has an email in the database
    const usernameOfEmailIfExists = await sql `SELECT firstname FROM requests WHERE email = ${email};`;
    if (usernameOfEmailIfExists === null) {
        await sql `INSERT INTO requests (requestname, firstname, lastname, email, description) VALUES (${requestName}, ${firstName}, ${lastName}, ${email}, ${description});`;
        return { success: true, message: "Your request has been sent in! We'll reply to you asap with your provided email."};
    } else {
        return { success: false, message: "You've already sent in an request in progress. Due to our limited staff, we can't accept more than one request per person. Try again after your first site has been completed."};
    }
}