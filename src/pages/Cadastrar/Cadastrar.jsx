import styles from './Cadastrar.module.css'
import { Link } from "react-router-dom"
const Cadastrar = () => {
    return (
        <div className={styles.tudo}>
            <section>
                <form className={styles.container} action="">
                    <img src="https://www.reshot.com/preview-assets/icons/ZXFJAEQURK/user-ZXFJAEQURK.svg" />
                    <div>
                        <label htmlFor="Nome">Nome: </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="Email">Email: </label>
                        <input type="email" />
                    </div>
                    <div>
                        <label htmlFor="Senha">Senha: </label>
                        <input type="password" />
                    </div>
                    <div>
                        <label htmlFor="Confirmar Senha">Confirmar Senha: </label>
                        <input type="password" />
                    </div>
                        <Link to='/login'>
                           Já possui uma conta? 
                        </Link >
                    <button>Cadastrar</button>
                </form>
            </section>

        </div>
    )
}
export default Cadastrar