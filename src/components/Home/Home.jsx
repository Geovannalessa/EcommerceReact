import styles from './Home.module.css'

const Home = ()=>{
    return(
        <section>
            <article className={styles.principal}>
            <form>
            <input className={styles.campo} type="text"/>
            <button className={styles.botao}>
                <img src='https://www.reshot.com/preview-assets/icons/Z45ULFPVWG/search-Z45ULFPVWG.svg'/>
            </button>
            </form>
            </article>
            <article className={styles.cards}>
                <section>
                    <img src="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                </section>
                <section>
                    <img src="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                </section>
                <section>
                    <img src="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                </section>
                <section>
                    <img src="https://images.pexels.com/photos/1435301/pexels-photo-1435301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                </section>
                <section>
                    <img src="https://images.pexels.com/photos/1435301/pexels-photo-1435301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                </section>
                <section>
                    <img src="https://images.pexels.com/photos/1435301/pexels-photo-1435301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                </section>
                <section>
                    <img src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                </section>
                <section>
                    <img src="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                </section>
            </article>
            <footer>
                footer
            </footer>
        </section>
    )
}
export default Home;