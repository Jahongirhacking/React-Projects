import { useDispatch, useSelector } from "react-redux"
import { modalType } from "../../types/modalType"
import { makeInvisible } from "../../features/modalSlice"
import "./style.scss"

const Modal = () => {
    const modal = useSelector((state: { modal: modalType }) => state.modal)
    const dispatch = useDispatch();

    const handleUserChoice = (isUserAccepted: boolean) => {
        if (isUserAccepted) modal.func();
        dispatch(makeInvisible());
    }
    return (
        <div className="overlay">
            <section className="modal">
                <h2>{modal.heading}</h2>
                <hr />
                <p>{modal.paragraph}</p>
                <div className="btn-container">
                    <button onClick={() => { handleUserChoice(false) }}>Cancel</button>
                    <button onClick={() => { handleUserChoice(true) }}>Clear All</button>
                </div>
            </section>
        </div>
    )
}

export default Modal