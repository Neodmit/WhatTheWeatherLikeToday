import React, {useState} from 'react';
import classes from "./ModalWindow.module.scss";

class ModalWindow extends Component{

    render(active, setActive, children){
        return(
            <div className={active ? classes["modal active"] : classes["modal"]} onClick={() => setActive(false)}>
                <div className={active ? classes["modal__content active"] : classes["modal__content"]} onClick ={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        )
    }
}
