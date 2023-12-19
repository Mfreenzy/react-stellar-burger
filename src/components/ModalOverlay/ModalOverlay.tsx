import React from "react";
import styles from "./ModalOverlay.module.css";


interface ModalOverlayProps {
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

function ModalOverlay({ onClick }: ModalOverlayProps) {
    return (
        <div className={styles.overlay} onClick={onClick}>

        </div>
    )
}


export default ModalOverlay