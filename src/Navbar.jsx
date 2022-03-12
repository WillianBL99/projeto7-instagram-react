
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <Logo />
                <LogoMobile />
                <InstagramName />
                <Iput />
                <Icones />
                <IconeMobile />

            </div>
        </div>
    )
}

function InstagramName() {
    return (
        <div className="instagram-mobile">
            <img src="./img/logo.png" alt="" />
        </div>
    )
}

function Iput() {
    return (
        <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    )
}

function IconeMobile() {
    return (
        <div className="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    )
}

function Icones() {
    const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];
    return (
        <div className="icones">
            {
                icons.map((icon,id) =>
                    <ion-icon key={id} name={icon}></ion-icon>)
            }
        </div>
    )
}

function LogoMobile() {
    return (
        <div className="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
    )
}

function Logo() {
    return (
        <div className="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="separador"></div>
            <img src="./img/logo.png" alt="" />
        </div>
    )
}