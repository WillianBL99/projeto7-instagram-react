export default function Posts() {
  const posts = [
    {
      icon: "./img/meowed.svg",
      name: "meowed",
      img: "./img/gato-telefone.svg",
      infoLike: { icon: "./img/respondeai.svg", user: "respondeai", qtd: "101.523" }
    },
    {
      icon: "./img/barked.svg",
      name: "barked",
      img: "./img/dog.svg",
      infoLike: { icon: "./img/adorable_animals.svg", user: "adorable_animals", qtd: "99.159" }
    },
    {
      icon: "./img/catanacomics.svg",
      name: "Catana",
      img: "./img/gatoMeme.png",
      infoLike: { icon: "./img/respondeai.svg", user: "respondeai", qtd: "558.159" }
    }
  ]
  return (
    <div className="posts">
      {posts.map(({ icon, name, img, infoLike }, id) => {
        const {icon:iconUserLike, user:nameUserLike, qtd:qtdlikes} = infoLike
        return <Post
          key={id}
          iconUser={icon} 
          nameUser={name}
          imgPost={img} 
          iconUserLike={iconUserLike}
          userLike={nameUserLike} 
          qtdLike={qtdlikes}
        />
      })}
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