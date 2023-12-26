import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import CloseButton from "../CloseButton/CloseButton";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { ModalProps } from "../../types/types";

const mRoot = document.getElementById("react-modals");
const Modal = ({ header, closeModal, children }: ModalProps) => {

    const handleCloseModal = useCallback(() => {
       closeModal();
    }, [closeModal]);

    useEffect(() => {
        const closeByUseEsc = (evt: KeyboardEvent) => {
            evt.key === "Escape" && handleCloseModal();
        };

        document.addEventListener("keydown", closeByUseEsc);

        return () => {
            document.removeEventListener("keydown", closeByUseEsc);
        };
    }, [handleCloseModal]);

    if (mRoot === null) {
        // Handle the case where the element does not exist.
        // You may want to throw an error or ensure that the element is created.
        console.error('The element #modal-root does not exist in the DOM.');
        return null; // Or handle this situation in a way that fits your application.
      }

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
