export default function Stories(){
    return (
      <div class="stories">
        <Story img="./img/9gag.svg" name="9gag" />
        <Story img="./img/meowed.svg" name="meowed" />
        <Story img="./img/barked.svg" name="barked" />
        <Story img="./img/nathanwpylestrangeplanet.svg" name="nathanwpylestrangeplanet" />
        <Story img="./img/wawawicomics.svg" name="wawawicomics" />
        <Story img="./img/respondeai.svg" name="respondeai" />
        <Story img="./img/filomoderna.svg" name="filomoderna" />
        <Story img="./img/memeriagourmet.svg" name="memeriagourmet" />
  
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    )
}

function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img} alt="" />
      </div>
      <div class="usuario">
        {props.name}
      </div>
    </div>
  )
}