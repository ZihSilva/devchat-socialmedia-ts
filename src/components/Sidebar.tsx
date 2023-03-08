import styles from "./Sidebar.module.css"
import { PencilLine } from "phosphor-react";
import {Avatar} from "./Avatar";

export function Sidebar() {
    return (

        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=50"
            />

            <div className={styles.profile}>
                <Avatar src="http://github.com/ZihSilva.png"/>
                <strong>Zimarlen Silva</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>

    )
}