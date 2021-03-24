import React from 'react'
import { Link } from "react-router-dom";

import './styles.css'
import Back from '../../assets/arrow-back.svg'

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
            <header className="page-header">
                <Link to="/">
                    <img src={Back} alt="voltar"/>
                </Link>
                <div className="header-content">
                    <strong>{props.title}</strong>
                </div>
            </header>
    );
}

export default PageHeader;