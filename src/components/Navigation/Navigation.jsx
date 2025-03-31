import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/articles">Статьи</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navigation;