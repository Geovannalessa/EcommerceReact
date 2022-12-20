import styles from './Header.module.css'
import Logo from '../img/logo.png'
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <>
            <header className={styles.Header}>
                <div className={styles.logo}>
                    <img className={styles.logoImagem} src={Logo} alt="Logo do site" />
                </div>
                <nav className={styles.nav}>
                    <Link to='/'>Produtos</Link>
                    <Link to='/novoProduto'>Novo Produto</Link>
                    <Link to='/login' className={styles.user}>
                        <img src="https://www.reshot.com/preview-assets/icons/ZXFJAEQURK/user-ZXFJAEQURK.svg" />
                    </Link>
                </nav>
            </header>
        </>
    )
}
export default Header;