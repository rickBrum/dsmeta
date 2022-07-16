import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { sale } from '../../models/sales';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleId: number;
}

function handlerClick(id : number) {
    axios.get(`${BASE_URL}/sales` )
        .then(response => {
            toast.info("Botão Funcionando com Sucesso");
            console.log(`funcionou ${id}`);
        });
}

function NotificationButton({saleId} : Props) {
    return(
        <div className="dsmeta-red-btn" onClick={() => handlerClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton