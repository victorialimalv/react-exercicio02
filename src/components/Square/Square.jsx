import styles from './Square.module.css'

export function Square() {

    return(
        <div>
            <h1>Forma Geométrica: Quadrado</h1>
            <h2>Quantidades de Lados: 4</h2>

            <div className={styles.square}></div>

            <br />
        </div>
    );

}