import { createContext, useContext, useState } from "react";
import ProyectModal from "../components/ProyectModal.jsx";


const ModalContext = createContext(null)

export function ModalProvider({ children }) {


    const [show, setShow] = useState(false)
    const [images, setImages]= useState([])

    const [content, setContent] = useState({
        title: '',
        description: '',
        images: []
    });

    const closeModal = () => setShow(false);

    // Función unificada para abrir el modal con datos
    const openModal = (data) => {
        setContent({
            title: data.title || '',
            description: data.description || '',
            images: data.images || []
        });
        setShow(true);
    };

    return (
        <ModalContext.Provider
            value={{ show, content, openModal, closeModal }}>
            {children}
            <ProyectModal
                show={show}
                closeModal={closeModal}
                openModal={openModal}
                content={content}
            />
        </ModalContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext);