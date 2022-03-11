export default function Corpo() {
  return (
    <div class="corpo">
      <Conteudo />
      <Sidebar />
    </div>
  )
}

function Conteudo() {
  return (
    <div class="esquerda">
      <Stories />
      <Posts />
    </div>
  )
}

function Stories() {
  return (
    <div class="stories">
      <div class="story">
        <div class="imagem">
          <img src="./img/9gag.svg" alt="" />
        </div>
        <div class="usuario">
          9gag
        </div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="./img/meowed.svg" alt="" />
        </div>
        <div class="usuario">
          meowed
        </div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="./img/barked.svg" alt="" />
        </div>
        <div class="usuario">
          barked
        </div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="./img/nathanwpylestrangeplanet.svg" alt="" />
        </div>
        <div class="usuario">
          nathanwpylestrangeplanet
        </div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="./img/wawawicomics.svg" alt="" />
        </div>
        <div class="usuario">
          wawawicomics
        </div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="./img/respondeai.svg" alt="" />
        </div>
        <div class="usuario">
          respondeai
        </div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="./img/filomoderna.svg" alt="" />
        </div>
        <div class="usuario">
          filomoderna
        </div>
      </div>

      <div class="story">
        <div class="imagem">
          <img src="./img/memeriagourmet.svg" alt="" />
        </div>
        <div class="usuario">
          memeriagourmet
        </div>
      </div>

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}

function Posts() {
  return (
    <div class="posts">
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src="./img/meowed.svg" alt="" />
            meowed
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src="./img/gato-telefone.svg" alt="" />
        </div>

        <div class="fundo">
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

          <div class="curtidas">
            <img src="./img/respondeai.svg" alt="" />
            <div class="texto">
              Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src="./img/barked.svg" alt="" />
            barked
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src="./img/dog.svg" alt="" />
        </div>

        <div class="fundo">
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

          <div class="curtidas">
            <img src="./img/adorable_animals.svg" alt="" />
            <div class="texto">
              Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <div class="sidebar">
      <div class="usuario">
        <img src="./img/catanacomics.svg" alt="" />
        <div class="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        <div class="sugestao">
          <div class="usuario">
            <img src="./img/bad.vibes.memes.svg" alt="" />
            <div class="texto">
              <div class="nome">bad.vibes.memes</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>

        <div class="sugestao">
          <div class="usuario">
            <img src="./img/chibirdart.svg" alt="" />
            <div class="texto">
              <div class="nome">chibirdart</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>

        <div class="sugestao">
          <div class="usuario">
            <img src="./img/razoesparaacreditar.svg" alt="" />
            <div class="texto">
              <div class="nome">razoesparaacreditar</div>
              <div class="razao">Novo no Instagram</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>

        <div class="sugestao">
          <div class="usuario">
            <img src="./img/adorable_animals.svg" alt="" />
            <div class="texto">
              <div class="nome">adorable_animals</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>

        <div class="sugestao">
          <div class="usuario">
            <img src="./img/smallcutecats.svg" alt="" />
            <div class="texto">
              <div class="nome">smallcutecats</div>
              <div class="razao">Segue você</div>
            </div>
          </div>

          <div class="seguir">Seguir</div>
        </div>
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
    </div>
  )
}