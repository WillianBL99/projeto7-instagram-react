export default function Sidebar() {
    return (
        <div class="sidebar">
            <User icon="./img/catanacomics.svg" userName="catanacomics" name="Catana" />

            <div class="sugestoes">
                <Title />

                <Followers icon="./img/chibirdart.svg" nameUser="chibirdart" reason="Segue você" />
                <Followers icon="./img/bad.vibes.memes.svg" nameUser="bad.vibes.memes" reason="Segue você" />
                <Followers icon="./img/chibirdart.svg" nameUser="chibirdart" reason="Segue você" />
                <Followers icon="./img/razoesparaacreditar.svg" nameUser="razoesparaacreditar" reason="Novo no Instagram" />
                <Followers icon="./img/adorable_animals.svg" nameUser="adorable_animals" reason="Segue você" />
                <Followers icon="./img/smallcutecats.svg" nameUser="smallcutecats" reason="Segue você" />
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function User(props) {
    return (
        <div class="usuario">
            <img src={props.icon} alt="" />
            <div class="texto">
                <strong>{props.userName}</strong>
                {props.name}
            </div>
        </div>
    )
}

function Title() {
    return (
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    )
}

function Followers(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.icon} alt="" />
                <div class="texto">
                    <div class="nome">{props.nameUser}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}