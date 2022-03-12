export default function SuggestionsFollwers() {
    const followers = [
        { icon: "./img/chibirdart.svg", nameUser: "chibirdart", reason: "Segue você" },
        { icon: "./img/bad.vibes.memes.svg", nameUser: "bad.vibes.memes", reason: "Segue você" },
        { icon: "./img/chibirdart.svg", nameUser: "chibirdart", reason: "Segue você" },
        { icon: "./img/razoesparaacreditar.svg", nameUser: "razoesparaacreditar", reason: "Novo no Instagra" },
        { icon: "./img/adorable_animals.svg", nameUser: "adorable_animals", reason: "Segue você" },
        { icon: "./img/smallcutecats.svg", nameUser: "smallcutecats", reason: "Segue você" }
    ]


    return (
        <div class="sugestoes">
            <Title />
            {
                followers.map(({ icon, nameUser, reason }) =>
                    <Follower icon={icon} nameUser={nameUser} reason={reason} />
                )
            }
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

function Follower(props) {
    const { icon, nameUser, reason } = props;
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={icon} alt="" />
                <div class="texto">
                    <div class="nome">{nameUser}</div>
                    <div class="razao">{reason}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
        </div>
    )
}