import styles from './Footer.module.css'

const Footer = ()=>{
    return(
        <footer>
                <div>
                   <strong>Contatos:</strong><br/>
                    Telefone: (00)0000-0000 <br/>
                    Email: fruitsecommerce@gmail.com
                </div>
                <div className={styles.icones}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUdJREFUSEvdleExBEEQhb+LgAzIABEgAkTgRIAIEAEhyAARkAGXAREgAuq7mrmanZuZ29uq/XNTdX92ut/r97qnb8LIZzIyPptHsA38rLDNmEvgFNgHPoFH4C7k+f05YuQWGWzAR4PkDTgs3Jsj4TXwUCLw8j0oOAMEyk+MqfFLMgsE8yJzBX9JplUoO7VMdU8Ndb/BgUVxOYHenWQAfvOnfQfAfYPgJRAsQlICm7cbwHYGvg8V36a5OcH3QOCY1mlwqQfaMLR68bSwM4F5D5wSG7Q1QMlXsLiTWloVTsp53qwehEv2lCzy2xHw2gMwDbF61S9tgdqycxJu1iA5rjzM5jZ1bH1s2tU6F2EXFWNqCrQpLrQauK/2qgWe90BQK97rYY0vVnDHunlKCqah0TYtkrnAbGC6NlZhz+837x+tl+x1gka36B/CnzgZFPaBJAAAAABJRU5ErkJggg==" alt='icone do twitter'/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAX1JREFUSEvNlU0yBEEQhb+5gZUtToATYGOLA4jgBm6AEwg7O5zAWFrhBDgB4QJ+LkB8olLUVJTumkXHyIiKmumuypf5MvP1iIFtNLB/ZgawCBwCK2l1JfoIuE7TPnG2lsEecJ5O3QPvtYvpvQHMAWvp/z5wkSOUAF54AHS8nZy3lMmMx8AysJoHVAKIrmMvGHmf7QLHwAewAzwDl4As/FgJ8AK41iueBTZCTc6vgU3gBngFFoC7tC/9BfCVinWQAcjxbaXYOjsDPoH5FLnPrMdv4GUGApjyUQZgtFJm2vKsmY10Wq+N7OzUADq6SvyG8/AX3Sb38W5qADNxHmrtLHVvRcb/D2BwiqIlbUE5tzU1f58AT0VLN1GkppRt6sWYgShybdp7AfoGTSmJrMqu8rkAtrSrOsn29hbgJLZIRT7wOu2VihA7I1EZzajFdO68eL9T7KKAIdcCdcl1aFbsvXId0RqJhfaiHdRlKqmBOJTKyoTN7JPZwnvTmcEz+AZJz2cZU1H38wAAAABJRU5ErkJggg==" alt='icone do instagram'/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbRJREFUSEvNleExBEEQRt9lQATIQAbIgAgQASJABIiADMiAiwARkAEioN5V99aYnZ37dVXXVVNXtzvTX/fr7tkZK7bZiv2zFgL7wDGwG+sbeANegHn8ToLoZbAN3AMK/BRON0JoL7w+AaeAwiObEjDaZ1ggvAWuJkI8B27C+VErm5aAEX5E1IcRea8XDOYB2AJ26kxaAqYsFpesFXR9dlQUeQU8ayaD1QK58TqwWAcPytfoepa4FFBoYbWAvM+AzXCah9xrIUXRs1/gDvBcU8DW08SjlQL/IptQqc+PMpCzm07CgYgsuIjMaplJwJkZ9taIFLCwdk9aZiEeMfXMdr4s0dcCoxTDm86NzN8LIIfQYso8h8z/NorvmzXIItsxdVvmO5250kl2nA59rkgiHtUgmZeHSiQWXwx5TXiF5Lzo1KvloJzo1qBNYSqFDMRlvTIb5+W96MAmIh+OenlJYWVu5GLNbIYjdQZ2z2MU8isOWIuykHnY68OhtMv0M3LuxqlJbgUtOsVEYtQ5jH4T5N+8q2oBmeaw6dD/sjbKbD8j97nLjsmaNUmuxSdz2fXQfb/yDP4AZJloGU7UfncAAAAASUVORK5CYII=" alt='icone do whatsApp'/>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMdJREFUSEvtle8NQUEQxH+vAkpQgg7QiRKoABWIilABOlACFZCROzb+xMvbvRcfbHLJfbmZm5nb24rCVRXGp3WCDTBwqhLGKGM8K7g4wV9wvQQH4JRQ+0An7e+4TQm2wBg4GsXWXhfBGeiZm2eOMALdfmhsWZp9N8KiFTBJQHNg9uZhuCxaAAJWhRJMgX0KNoerLLRUa6OkkQI1j4L8VLaHwgnUAzuvgny+WAZ/gpsDdX7T386gzsD5psD+Ve2PzKCB9oApPvSvbT04GeqYidwAAAAASUVORK5CYII=" alt='icone do facebook'/>
                </div>
            </footer>
    )
}
export default Footer