import SuggestionsFollwers from "./SuggestionsFollwers"

export default function Sidebar() {
    const user = {icon:"./img/catanacomics.svg" ,userName:"catanacomics" ,name:"Catana" }
    return (
        <div className="sidebar">
            <User icon={user.icon} userName={user.userName} name={user.name} />

            <SuggestionsFollwers />

            <FooterLinks />
            <FooterCopyright />

        </div>
    )
}

function User(props) {
    const { icon, userName, name } = props
    return (
        <div className="usuario">
            <img src={icon} alt="" />
            <div className="texto">
                <strong>{userName}</strong>
                {name}
            </div>
        </div>
    )
}

function FooterLinks() {
    return (
        <div className="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    )
}

function FooterCopyright() {
    return (
        <div className="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}