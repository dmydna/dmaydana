import { BrowserRouter } from "react-router-dom";
import {ModalProvider} from "./ModalContext.jsx";
import ProyectModal from "../components/ProyectModal.jsx";


// Este es tu Wrapper "CRUD"
export const UIWrapper = ({ children }) => {
    return (
        <ModalProvider>
            {children}
        </ModalProvider>
    );
};