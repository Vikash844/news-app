import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
    const categories = useSelector(state => state.categories);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/">News App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                           {
                            categories.length > 0 && categories.map((category, index)=>(
                                <li className="nav-item" key={index}>
                                <Link className="nav-link active text-capitalize" aria-current="page" to={`/categories/${category}`}>{category}</Link>
                            </li>
                            ))
                           }
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
