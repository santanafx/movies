import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiCameraMovie } from 'react-icons/bi'
import { AiOutlineSearch } from "react-icons/ai";
import styles from './NavBar.module.css'

export const NavBar = () => {

    const [search, setSearch] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!search) {
            return
        }
        navigate(`/search?q=${search}`);
    }

    return (
        <nav >
            <h2>
                <Link className={styles.navLink} to='/'>
                    <BiCameraMovie />MoviesLib
                </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Busque um filme.' value={search} onChange={(event) => setSearch(event.target.value)} />
                <button className={styles.buttonSearch}><AiOutlineSearch className={styles.search} /></button>
            </form>
        </nav>
    )
}
