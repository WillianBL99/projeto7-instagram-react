export default function Posts() {
  return (
    <div className="posts">
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
  const {
    iconUser,
    nameUser,
    imgPost,
    iconUserLike,
    userLike,
    qtdLike
  } = props
  
  return (
    <div className="post">
      <PostTop img={iconUser} name={nameUser} />
      <PostCenter img={imgPost} />
      <PostBottom
        icon={iconUserLike}
        user={userLike}
        qtd={qtdLike}
      />
    </div>

  )
}

function PostTop(props) {
  const { img, name } = props
  return (
    <div className="topo">
      <div className="usuario">
        <img src={img} alt="" />
        {name}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  )
}

function PostCenter({ img }) {
  return (
    <div className="conteudo">
      <img src={img} alt="" />
    </div>
  )
}

function PostBottom(props) {
  const { icon, user, qtd } = props
  return (
    <div className="fundo">
      <PostActions />
      <PostLikeComment
        icon={icon}
        user={user}
        qtd={qtd}
      />
    </div>
  )
}

function PostActions() {
  return (
    <div className="acoes">
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
  const { icon, user, qtd } = props
  return (
    <div className="curtidas">
      <img src={icon} alt="" />
      <div className="texto">
        Curtido por <strong>{user}</strong> e <strong>outras {qtd} pessoas</strong>
      </div>
    </div>
  )
}