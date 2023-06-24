import PropTypes from "prop-types";

import style from "./Modal.module.css";
function Modal({ children, closeModal }) {
  return (
    <div className={style["modal-overlay"]} onClick={closeModal}>
      <div className={style["modal-body"]} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.element,
  closeModal: PropTypes.func,
};

export default Modal;
