import Stories from "./Stories"
import Posts from "./Posts"
import Sidebar from "./Sidebar"

export default function Corpo() {
  return (
    <div className="corpo">
      <Conteudo />
      <Sidebar />
    </div>
  )
}

function Conteudo() {
  return (
    <div className="esquerda">
      <Stories />
      <Posts />
    </div>
  )
}