import { NavLink } from 'react-router-dom';

function Footer() {
    return(
        <footer class="footer">
            <nav>
                <ul>
                <li class="footer__menu-item">
                    <NavLink class="footer__menu-link" to="/">A jugar</NavLink>
                </li>
                <li class="footer__menu-item">

                    <NavLink class="footer__menu-link active" to="/instructions"
                    >¿Cómo se juega?</NavLink>
                </li>
                <li class="footer__menu-item">
                    <NavLink class="footer__menu-link" to="/options">Más opciones</NavLink>
                </li>
                </ul>
            </nav>
            <small class="footer__copy">© Adalab</small>
        </footer>
    )
};

export default Footer;