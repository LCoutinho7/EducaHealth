import Button from "@/components/Button/Button"
import styles from "./stylesNotFound.module.css";

export default function notFound(){
    return(
        <div className={styles.container}>
            <h1>Oops, página não encontrada!</h1>
            <Button redirect="/">Voltar para Tela Inicial</Button>
        </div>
    )
}