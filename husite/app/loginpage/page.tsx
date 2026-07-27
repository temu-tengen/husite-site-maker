"use client";

import styles from './page.module.css';
import { useActionState } from 'react';
import { redirect } from 'next/navigation';

import { FormState, checkLogin } from "../actions/actions";

const initialState: FormState = {
    success: false,
    message: '',
}
export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(checkLogin, initialState);

    return (
        <div className={styles.container}>
            <h1 className={styles.pagetitle}>Admin Login</h1>

            <form action={formAction} className={styles.formContainer}>
                <input name="username" className={styles.textField} placeholder="username"></input>
                <input name="password" type="password" className={styles.textField} placeholder="password"></input>

                <button type="submit" className={styles.submitButton}>{isPending ? "Checking our Backend..." : "Login"}</button>
            </form>

            <p className={styles.errorMessage}>{state.message}</p>

            <div>
                <button onClick={() => redirect('/')} className={styles.submitButton}>Go Home</button>
            </div>

        </div>
    );
}
