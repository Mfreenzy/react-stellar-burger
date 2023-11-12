import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import CloseButton from "../CloseButton/CloseButton";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { useNavigate } from "react-router-dom";

const mRoot = document.getElementById("react-modals");

const Modal = ({ header, children }) => {

    const navigate = useNavigate();

    const handleCloseModal = useCallback(() => {
       navigate(-1);
    }, []);

    useEffect(() => {
        const closeByUseEsc = (evt) => {
            evt.key === "Escape" && handleCloseModal();
        };

        document.addEventListener("keydown", closeByUseEsc);

        return () => {
            document.removeEventListener("keydown", closeByUseEsc);
        };
    }, [handleCloseModal]);

    return ReactDOM.createPortal(
        <>
            <div className={styles.modal}>
                <section className={`${styles.modalContainer}`}>
                    <h2 className={`${styles.modalTitle} pt-10 pr-10 pl-10`}>
                        <p className={`text text_type_main-large`}>{header}</p>
                        <CloseButton onClick={handleCloseModal} />
                    </h2>
                    {children}
                </section>
            </div>
            <ModalOverlay onClick={handleCloseModal} />
        </>,
        mRoot
    );
};




export default Modal;
