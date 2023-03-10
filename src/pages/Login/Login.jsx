import styles from './Login.module.css'
import { Link } from "react-router-dom"
const Login = () => {
    return (
        <div className={styles.tudo}>
            <section>
                <form className={styles.container} action="">
                    <img src="https://www.reshot.com/preview-assets/icons/ZXFJAEQURK/user-ZXFJAEQURK.svg" />
                    <div>
                        <label htmlFor="Email">Email: </label>
                        <input type="email" />
                    </div>
                    <div>
                        <label htmlFor="Senha">Senha: </label>
                        <input type="password" />
                    </div>
                        <Link to='/cadastro'>
                           Criar Conta 
                        </Link >
                    <button>Login</button>
                </form>
            </section>

        </div>
    )
}
export default Login