'use server';

export type FormState = {
    success: boolean;
    message: string;
}

export async function submitRequest(prevState: FormState, formData: FormData): Promise<FormState> {

}