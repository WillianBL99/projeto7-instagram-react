export default function FundoMobile() {
    const icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
    return (
        <div className="fundo-mobile">
            {
                icons.map(icon =>
                    <ion-icon key={icon.toString} name={icon}></ion-icon>)
            }
        </div>
    )
}