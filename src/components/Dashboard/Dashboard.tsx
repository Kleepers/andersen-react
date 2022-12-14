import React from 'react';
import s from "./Dashboard.module.css";


type Props = {
    name: string | null,
    handleLogout: () => void,
}

const Dashboard = ({name, handleLogout}: Props) => {
    return (
        <section className={s.dashboard}>
            <h1 className={s.dashboard__title}>Welcome to Dashboard</h1>
            <h4 className={s.dashboard__name}>{name}</h4>
            <button
                className={s.dashboard__button}
                type='button'
                onClick={handleLogout}
            >Logout</button>
        </section>
    );
};

export default Dashboard;