import Stories from "./Stories"
import Posts from "./Posts"
import Sidebar from "./Sidebar"

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