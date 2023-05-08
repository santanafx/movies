import React from 'react'
import { Link } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import styles from './NavBar.module.css'

export const NavBar = () => {
    return (
        <nav >
            <h2>
                <Link className={styles.navLink} to='/'>
                    <BiCameraMovie />MoviesLib
                </Link>
            </h2>
            <form>
                <input type="text" placeholder='Busque um filme.' />
                <button><BiSearchAlt2 /></button>
            </form>
        </nav>
    )
}
