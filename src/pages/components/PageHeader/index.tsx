import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../../assets/images/logo.svg';
import backIcon from '../../../assets/images/icons/back.svg';

import './styles.css';

// Conceito do typescript para definir o formato das tipagens de um objeto
interface PageHeaderProp /* Propriedades do PageHeader */ {
    title: string; /* Se tiver title?: string, significa que não é obrigatório, então é preciso definir um valor default */
}

// Função transformada em constante para receber o parâmetro "title" e a tipagem
const PageHeader: React.FunctionComponent<PageHeaderProp> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;