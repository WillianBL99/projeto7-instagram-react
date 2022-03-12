import SuggestionsFollwers from "./SuggestionsFollwers"

export default function Sidebar() {
    const user = {icon:"./img/catanacomics.svg" ,userName:"catanacomics" ,name:"Catana" }
    return (
        <div class="sidebar">
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
        <div class="usuario">
            <img src={icon} alt="" />
            <div class="texto">
                <strong>{userName}</strong>
                {name}
            </div>
        </div>
    )
}

function FooterLinks() {
    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    )
}

function FooterCopyright() {
    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}