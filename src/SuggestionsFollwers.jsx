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
        <div className="sugestoes">
            <Title />
            {
                followers.map(({ icon, nameUser, reason },id) =>
                    <Follower key={id} icon={icon} nameUser={nameUser} reason={reason} />
                )
            }
        </div>
    )

}

function Title() {
    return (
        <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    )
}

function Follower(props) {
    const { icon, nameUser, reason } = props;
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={icon} alt="" />
                <div className="texto">
                    <div className="nome">{nameUser}</div>
                    <div className="razao">{reason}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}