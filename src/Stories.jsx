export default function Stories() {
  const stories = [
    {img: "./img/9gag.svg", name: "9gag"},
    {img: "./img/meowed.svg", name: "meowed"},
    {img: "./img/barked.svg", name: "barked"},
    {img: "./img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet"},
    {img: "./img/wawawicomics.svg", name: "wawawicomics"},
    {img: "./img/respondeai.svg", name: "respondeai"},
    {img: "./img/filomoderna.svg", name: "filomoderna"},
    {img: "./img/memeriagourmet.svg", name: "memeriagourmet"},
  ]
  return (
    <div className="stories">
      {stories.map(({img,name}, id) =>
        <Story key={id} img={img} name={name} />
      )}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}

function Story(props) {
  const { img, name } = props
  return (
    <div className="story">
      <div className="imagem">
        <img src={img} alt="" />
      </div>
      <div className="usuario">
        {name}
      </div>
    </div>
  )
}

