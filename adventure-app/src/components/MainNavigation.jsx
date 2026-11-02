import { NavLink } from "react-router-dom";

function MainNavigation() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (
                                isActive ? "active" : undefined
                            )} end
                        >Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/adventures"
                            className={({ isActive }) => (
                                isActive ? "active" : undefined
                            )} end
                        >Adventures
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (
                                isActive ? "active" : undefined
                            )} end
                        >About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;