
export default function Navbar() {
    return (
        <div class="navbar">
            <div class="container">
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
        <div class="instagram-mobile">
            <img src="./img/logo.png" alt="" />
        </div>
    )
}

function Iput() {
    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    )
}

function IconeMobile() {
    return (
        <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    )
}

function Icones() {
    return (
        <div class="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    )
}

function LogoMobile() {
    return (
        <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
    )
}

function Logo() {
    return (
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="./img/logo.png" alt="" />
        </div>
    )
}