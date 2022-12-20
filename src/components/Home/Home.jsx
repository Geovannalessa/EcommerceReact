import styles from './Home.module.css'

const Home = () => {
    return (
        <section>
            <article className={styles.principal}>
                <form>
                    <input className={styles.campo} type="text" />
                    <button className={styles.botao}>
                        <img src='https://www.reshot.com/preview-assets/icons/Z45ULFPVWG/search-Z45ULFPVWG.svg' />
                    </button>
                </form>
            </article>
            <article className={styles.cards}>
                <section className={styles.card}>
                <img src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                    <div className={styles.bloco}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARJJREFUSEvdle0RwUAQhp9UgArogBLohA7ogA50gEoogQ7oQAfMa3Jmc/m4u5Ax435lks37tTt7GR2frGN8vkWwBB7AAbhb0T7BFNgBo4CzBbAH+sARmOT1Z2BmSXyCKzBsAX7J/xkDBRKfQDZ1QtFZ5QKXc50TIJIVsK0CiiGoi0V4Lq4NsG5D4CsXhotFz+qFc/RqdkpEoViEVwBPIagCl8K69+85iXGQCq6YNEmV0+I3uQ24Gj2IJZASNdFm2xSLYuvZ3oYico6kKCbz0pjHEqgu2NB8HxWGJ5bAbo/SKJqPrR04jCZw1SQTBPZe6fPvCdyYpSq39Td7n1RdOLpIQndCnQCBz/O1HbX3P3HyJwRPUqJjGRVuJEcAAAAASUVORK5CYII=" alt='icone de lapis para editar o produto' />
                        <p className={styles.titulo}>
                            CENOURA
                        </p>
                        <p className={styles.descricao}>
                            Descrição: As cenouras são grandes fontes de fibra dietética, antioxidantes, minerais e β-caroteno. Este último, responsável pela coloração alaranjada característica do vegetal, é uma provitamina A. Ele ajuda o desempenho dos receptores da retina, melhorando a visão
                        </p>
                        <p className={styles.valor}>
                            R$ 15.00
                        </p>
                    </div>
                </section>
                <section className={styles.card}>
                    <img src="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                    <div className={styles.bloco}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARJJREFUSEvdle0RwUAQhp9UgArogBLohA7ogA50gEoogQ7oQAfMa3Jmc/m4u5Ax435lks37tTt7GR2frGN8vkWwBB7AAbhb0T7BFNgBo4CzBbAH+sARmOT1Z2BmSXyCKzBsAX7J/xkDBRKfQDZ1QtFZ5QKXc50TIJIVsK0CiiGoi0V4Lq4NsG5D4CsXhotFz+qFc/RqdkpEoViEVwBPIagCl8K69+85iXGQCq6YNEmV0+I3uQ24Gj2IJZASNdFm2xSLYuvZ3oYico6kKCbz0pjHEqgu2NB8HxWGJ5bAbo/SKJqPrR04jCZw1SQTBPZe6fPvCdyYpSq39Td7n1RdOLpIQndCnQCBz/O1HbX3P3HyJwRPUqJjGRVuJEcAAAAASUVORK5CYII=" alt='icone de lapis para editar o produto' />
                        <p className={styles.titulo}>
                            UVA NIÁGARA
                        </p>
                        <p className={styles.descricao}>
                            Descrição: Essa uva é bem conhecida e possui um tom rosado. Devido à essa coloração rosada, também é conhecida como uva rosa. É uma uva de sabor doce sendo muito usada na produção de vinhos e sucos.
                        </p>
                        <p className={styles.valor}>
                            R$ 10.00
                        </p>
                    </div>
                </section>
                <section className={styles.card}>
                <img src="https://images.pexels.com/photos/1435301/pexels-photo-1435301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                    <div className={styles.bloco}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARJJREFUSEvdle0RwUAQhp9UgArogBLohA7ogA50gEoogQ7oQAfMa3Jmc/m4u5Ax435lks37tTt7GR2frGN8vkWwBB7AAbhb0T7BFNgBo4CzBbAH+sARmOT1Z2BmSXyCKzBsAX7J/xkDBRKfQDZ1QtFZ5QKXc50TIJIVsK0CiiGoi0V4Lq4NsG5D4CsXhotFz+qFc/RqdkpEoViEVwBPIagCl8K69+85iXGQCq6YNEmV0+I3uQ24Gj2IJZASNdFm2xSLYuvZ3oYico6kKCbz0pjHEqgu2NB8HxWGJ5bAbo/SKJqPrR04jCZw1SQTBPZe6fPvCdyYpSq39Td7n1RdOLpIQndCnQCBz/O1HbX3P3HyJwRPUqJjGRVuJEcAAAAASUVORK5CYII=" alt='icone de lapis para editar o produto' />
                        <p className={styles.titulo}>
                            MORANGO
                        </p>
                        <p className={styles.descricao}>
                            Descrição: O morango é também uma fruta rica em antioxidantes, como antocianinas e o ácido elágico, que conferem outros benefícios para a saúde, tias como combater o envelhecimento da pele, ajudar a prevenir doenças cardiovasculares, melhorar a capacidade mental, prevenir o câncer e ajudar a combater inflamações.
                        </p>
                        <p className={styles.valor}>
                            R$ 9.00
                        </p>
                    </div>
                </section>
                <section className={styles.card}>
                <img src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                    <div className={styles.bloco}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARJJREFUSEvdle0RwUAQhp9UgArogBLohA7ogA50gEoogQ7oQAfMa3Jmc/m4u5Ax435lks37tTt7GR2frGN8vkWwBB7AAbhb0T7BFNgBo4CzBbAH+sARmOT1Z2BmSXyCKzBsAX7J/xkDBRKfQDZ1QtFZ5QKXc50TIJIVsK0CiiGoi0V4Lq4NsG5D4CsXhotFz+qFc/RqdkpEoViEVwBPIagCl8K69+85iXGQCq6YNEmV0+I3uQ24Gj2IJZASNdFm2xSLYuvZ3oYico6kKCbz0pjHEqgu2NB8HxWGJ5bAbo/SKJqPrR04jCZw1SQTBPZe6fPvCdyYpSq39Td7n1RdOLpIQndCnQCBz/O1HbX3P3HyJwRPUqJjGRVuJEcAAAAASUVORK5CYII=" alt='icone de lapis para editar o produto' />
                        <p className={styles.titulo}>
                            CENOURA
                        </p>
                        <p className={styles.descricao}>
                            Descrição: As cenouras são grandes fontes de fibra dietética, antioxidantes, minerais e β-caroteno. Este último, responsável pela coloração alaranjada característica do vegetal, é uma provitamina A. Ele ajuda o desempenho dos receptores da retina, melhorando a visão
                        </p>
                        <p className={styles.valor}>
                            R$ 15.00
                        </p>
                    </div>
                </section>
                <section className={styles.card}>
                    <img src="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                    <div className={styles.bloco}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARJJREFUSEvdle0RwUAQhp9UgArogBLohA7ogA50gEoogQ7oQAfMa3Jmc/m4u5Ax435lks37tTt7GR2frGN8vkWwBB7AAbhb0T7BFNgBo4CzBbAH+sARmOT1Z2BmSXyCKzBsAX7J/xkDBRKfQDZ1QtFZ5QKXc50TIJIVsK0CiiGoi0V4Lq4NsG5D4CsXhotFz+qFc/RqdkpEoViEVwBPIagCl8K69+85iXGQCq6YNEmV0+I3uQ24Gj2IJZASNdFm2xSLYuvZ3oYico6kKCbz0pjHEqgu2NB8HxWGJ5bAbo/SKJqPrR04jCZw1SQTBPZe6fPvCdyYpSq39Td7n1RdOLpIQndCnQCBz/O1HbX3P3HyJwRPUqJjGRVuJEcAAAAASUVORK5CYII=" alt='icone de lapis para editar o produto' />
                        <p className={styles.titulo}>
                            UVA NIÁGARA
                        </p>
                        <p className={styles.descricao}>
                            Descrição: Essa uva é bem conhecida e possui um tom rosado. Devido à essa coloração rosada, também é conhecida como uva rosa. É uma uva de sabor doce sendo muito usada na produção de vinhos e sucos.
                        </p>
                        <p className={styles.valor}>
                            R$ 10.00
                        </p>
                    </div>
                </section>
                <section className={styles.card}>
                <img src="https://images.pexels.com/photos/1435301/pexels-photo-1435301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                    <div className={styles.bloco}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARJJREFUSEvdle0RwUAQhp9UgArogBLohA7ogA50gEoogQ7oQAfMa3Jmc/m4u5Ax435lks37tTt7GR2frGN8vkWwBB7AAbhb0T7BFNgBo4CzBbAH+sARmOT1Z2BmSXyCKzBsAX7J/xkDBRKfQDZ1QtFZ5QKXc50TIJIVsK0CiiGoi0V4Lq4NsG5D4CsXhotFz+qFc/RqdkpEoViEVwBPIagCl8K69+85iXGQCq6YNEmV0+I3uQ24Gj2IJZASNdFm2xSLYuvZ3oYico6kKCbz0pjHEqgu2NB8HxWGJ5bAbo/SKJqPrR04jCZw1SQTBPZe6fPvCdyYpSq39Td7n1RdOLpIQndCnQCBz/O1HbX3P3HyJwRPUqJjGRVuJEcAAAAASUVORK5CYII=" alt='icone de lapis para editar o produto' />
                        <p className={styles.titulo}>
                            MORANGO
                        </p>
                        <p className={styles.descricao}>
                            Descrição: O morango é também uma fruta rica em antioxidantes, como antocianinas e o ácido elágico, que conferem outros benefícios para a saúde, tias como combater o envelhecimento da pele, ajudar a prevenir doenças cardiovasculares, melhorar a capacidade mental, prevenir o câncer e ajudar a combater inflamações.
                        </p>
                        <p className={styles.valor}>
                            R$ 9.00
                        </p>
                    </div>
                </section>
                <section className={styles.card}>
                <img src="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                    <div className={styles.bloco}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARJJREFUSEvdle0RwUAQhp9UgArogBLohA7ogA50gEoogQ7oQAfMa3Jmc/m4u5Ax435lks37tTt7GR2frGN8vkWwBB7AAbhb0T7BFNgBo4CzBbAH+sARmOT1Z2BmSXyCKzBsAX7J/xkDBRKfQDZ1QtFZ5QKXc50TIJIVsK0CiiGoi0V4Lq4NsG5D4CsXhotFz+qFc/RqdkpEoViEVwBPIagCl8K69+85iXGQCq6YNEmV0+I3uQ24Gj2IJZASNdFm2xSLYuvZ3oYico6kKCbz0pjHEqgu2NB8HxWGJ5bAbo/SKJqPrR04jCZw1SQTBPZe6fPvCdyYpSq39Td7n1RdOLpIQndCnQCBz/O1HbX3P3HyJwRPUqJjGRVuJEcAAAAASUVORK5CYII=" alt='icone de lapis para editar o produto' />
                        <p className={styles.titulo}>
                            CENOURA
                        </p>
                        <p className={styles.descricao}>
                            Descrição: As cenouras são grandes fontes de fibra dietética, antioxidantes, minerais e β-caroteno. Este último, responsável pela coloração alaranjada característica do vegetal, é uma provitamina A. Ele ajuda o desempenho dos receptores da retina, melhorando a visão
                        </p>
                        <p className={styles.valor}>
                            R$ 15.00
                        </p>
                    </div>
                </section>
                <section className={styles.card}>
                    <img src="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="frutas" />
                    <div className={styles.bloco}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARJJREFUSEvdle0RwUAQhp9UgArogBLohA7ogA50gEoogQ7oQAfMa3Jmc/m4u5Ax435lks37tTt7GR2frGN8vkWwBB7AAbhb0T7BFNgBo4CzBbAH+sARmOT1Z2BmSXyCKzBsAX7J/xkDBRKfQDZ1QtFZ5QKXc50TIJIVsK0CiiGoi0V4Lq4NsG5D4CsXhotFz+qFc/RqdkpEoViEVwBPIagCl8K69+85iXGQCq6YNEmV0+I3uQ24Gj2IJZASNdFm2xSLYuvZ3oYico6kKCbz0pjHEqgu2NB8HxWGJ5bAbo/SKJqPrR04jCZw1SQTBPZe6fPvCdyYpSq39Td7n1RdOLpIQndCnQCBz/O1HbX3P3HyJwRPUqJjGRVuJEcAAAAASUVORK5CYII=" alt='icone de lapis para editar o produto' />
                        <p className={styles.titulo}>
                            UVA NIÁGARA
                        </p>
                        <p className={styles.descricao}>
                            Descrição: Essa uva é bem conhecida e possui um tom rosado. Devido à essa coloração rosada, também é conhecida como uva rosa. É uma uva de sabor doce sendo muito usada na produção de vinhos e sucos.
                        </p>
                        <p className={styles.valor}>
                            R$ 10.00
                        </p>
                    </div>
                </section>
            </article>
            <footer>
                footer
            </footer>
        </section>
    )
}
export default Home;