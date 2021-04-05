import React from 'react'
import { Link } from "react-router-dom";

import './styles.css'

import Back from '../../assets/arrow-back.svg'

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
            <header className="page-header">
                <div className="container">
                    <Link to="/">
                        <img src={Back} alt="voltar"/>
                    </Link>

                    <strong>{props.title}</strong>
                    {props.description && <p>{props.description}</p>}
                </div>
            </header>
    );
}

export default PageHeader;