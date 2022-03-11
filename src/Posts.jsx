export default function Posts(){
    return (
      <div class="posts">
        <Post
          iconUser="./img/meowed.svg" nameUser="meowed"
          imgPost="./img/gato-telefone.svg" iconUserLike="./img/respondeai.svg"
          userLike="respondeai" qtdLike="101.523"
        />
  
        <Post
          iconUser="./img/barked.svg" nameUser="barked"
          imgPost="./img/dog.svg" iconUserLike="./img/adorable_animals.svg"
          userLike="adorable_animals" qtdLike="99.159"
        />
      </div>
    )
}

function Post(props) {
  return (
    <div class="post">
      <PostTop img={props.iconUser} name={props.nameUser} />
      <PostCenter img={props.imgPost} />
      <PostBottom
        icon={props.iconUserLike}
        user={props.userLike}
        qtd={props.qtdLike}
      />
    </div>

  )
}

function PostTop(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={props.img} alt="" />
        {props.name}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  )
}

function PostCenter(props) {
  return (
    <div class="conteudo">
      <img src={props.img} alt="" />
    </div>
  )
}

function PostBottom(props) {
  return (
    <div class="fundo">
      <PostActions />
      <PostLikeComment
        icon={props.icon}
        user={props.user}
        qtd={props.qtd}
      />
    </div>
  )
}

function PostActions() {
  return (
    <div class="acoes">
      <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
  )
}

function PostLikeComment(props) {
  return (
    <div class="curtidas">
      <img src={props.icon} alt="" />
      <div class="texto">
        Curtido por <strong>{props.user}</strong> e <strong>outras {props.qtd} pessoas</strong>
      </div>
    </div>
  )
}