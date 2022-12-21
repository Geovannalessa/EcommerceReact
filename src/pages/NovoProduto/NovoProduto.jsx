import styles from './NovoProduto.module.css'
const NovoProduto = () => {
    return (
        <div className={styles.tudo}>
            <section>
                <form className={styles.container} action="">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFZJREFUSEtjZKAxYKSx+QyjFhAMYVKD6D/URKL1Ea0QavCoBQTjbOgEEcylBL2EpgAj0eBKRTS3AJfLh04cjPoAHgKDriwiNV+M1miEQ4zUSCZsIpoKAFy0DhnDOA3uAAAAAElFTkSuQmCC" />
                    <div>
                        <label htmlFor="titulo">Título: </label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="endereçoImagem">Endereço da imagem: </label>
                        <input type="text" />
                    </div>
                    <div className={styles.descricao} >
                        <label htmlFor="descrição">Descrição: </label> 
                        <textarea name="" id="" cols="90" rows="3"></textarea>
                        </div>
                    <div className={styles.valorButton}>
                        <div className={styles.valor}>
                            <label htmlFor="valor">Valor: </label>
                            <input type="text" />
                        </div>
                        <button></button>
                    </div>
                   
                </form>
            </section>

        </div>
    )
}
export default NovoProduto