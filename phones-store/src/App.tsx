import Navbar from "./pages/Navbar"
import Main from "./pages/Main"
import Modal from "./components/Modal"
import { useSelector } from "react-redux"
import { modalType } from "./types/modalType"

const App = () => {
  const modal = useSelector((state: { modal: modalType }) => state.modal);
  return (
    <>
      <Navbar />
      <Main />
      {modal.visible && <Modal />}
    </>
  )
}

export default App