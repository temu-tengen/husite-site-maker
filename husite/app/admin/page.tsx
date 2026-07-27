'use server';

import { cookies } from 'next/headers';
import styles from './page.module.css';
import { redirect } from 'next/navigation';

import { logout, getRequests, returnHome } from '../actions/actions';

export default async function AdminConsolePage() {

    const cookieStore = await cookies();
    const session = cookieStore.get('session')?.value;

    if (!session) {
        redirect('/');
    }

    const requests = await getRequests();

    return (
        <div className={styles.container}>
            <h1 className={styles.pageheader}>Admin Console</h1>
            <button className={styles.submitButton} onClick={logout}>Logout</button>
            <button className={styles.submitButton} onClick={returnHome}>Go Home</button>

            <div className={styles.tableContainer}>
                <table className={styles.customTable}>
                    <thead>
                        <tr>
                            <th>Request Name</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => (
                            <tr key={request.id}>
                                <td>{request.requestname}</td>
                                <td>{request.firstname}</td>
                                <td>{request.lastname}</td>
                                <td>{request.email}</td>
                                <td>{request.description}</td>
                                <td>{request.id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}