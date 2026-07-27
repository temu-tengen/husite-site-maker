'use server';

import { cookies } from 'next/headers';
import styles from './page.module.css';
import { redirect } from 'next/navigation';

import { logout } from '../actions/actions';

export default async function AdminConsolePage() {

    const cookieStore = await cookies();
    const session = cookieStore.get('session')?.value;

    if (!session) {
        redirect('/');
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.pageheader}>Admin Console</h1>
            <button className={styles.button} onClick={logout}>Logout</button>

        </div>
    );
}