import styles from './Triangle.module.css'

export function Triangle() {

    return(
        <div>
            <h1>Forma Geométrica: Triangulo</h1>
            <h2>Quantidades de Lados: 3</h2>
            <div className={styles.triangle}></div>
            
            <br /> 
        </div>
    );    

}