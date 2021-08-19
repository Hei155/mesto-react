import logo from '../images/Vector.svg';

export function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Лого" className="header__logo"/>
        </header>
    )
}