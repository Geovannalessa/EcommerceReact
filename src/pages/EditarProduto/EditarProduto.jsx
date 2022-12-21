import styles from './EditarProduto.module.css'
const EditarProduto = ()=>{
    return (
        <div className={styles.tudo}>
            <section>
                <form className={styles.container} action="">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFZJREFUSEtjZKAxYKSx+QyjFhAMYVKD6D/URKL1Ea0QavCoBQTjbOgEEcylBL2EpgAj0eBKRTS3AJfLh04cjPoAHgKDriwiNV+M1miEQ4zUSCZsIpoKAFy0DhnDOA3uAAAAAElFTkSuQmCC" />
                    <div>
                        <label htmlFor="titulo">Título: </label>
                        <input type="text" value="CENOURA"/>
                    </div>
                    <div className={styles.descricao} >
                        <label htmlFor="endereçoImagem" >Endereço da imagem: </label>
                        <input type="text" value="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    </div>
                    <div className={styles.descricao} >
                        <label htmlFor="descrição">Descrição: </label>
                        <textarea name="" id="" cols="90" rows="3">As cenouras são grandes fontes de fibra dietética, antioxidantes, minerais e β-caroteno. Este último, responsável pela coloração alaranjada característica do vegetal, é uma provitamina A. Ele ajuda o desempenho dos receptores da retina, melhorando a visão</textarea>
                    </div>
                    <p>
                        <div className={styles.valor} >
                        <label htmlFor="valor">Valor: </label>
                        <input type="text" value="R$ 15.00" />
                        </div>
                    <div className={styles.botaoAdicionar}>
                    <button>Remover Produto</button>
                    </div>   
                    </p>
                        <button>Editar Produto</button>
                </form>
            </section>

        </div>
    )
    }
    export default EditarProduto