import styles from './Header.module.css'
import Logo from '../img/logo.png'
const Header = () => {
    return (
        <>
            <header className={styles.Header}>
                <div className={styles.logo}>
                    <img className={styles.logoImagem} src={Logo} alt="Logo do site" />
                </div>
                <ul className={styles.nav}>
                    <li>Produtos</li>
                    <li>Novo Produto</li>
                    <li className={styles.user}>
                        <img src="https://www.reshot.com/preview-assets/icons/ZXFJAEQURK/user-ZXFJAEQURK.svg" />
                    </li>
                </ul>
            </header>
        </>
    )
}
export default Header;