import appLogo from '../assets/logo.jpg';
import Button from '../UI/Button';
export default function Header() {
    return (
        <header id='main-header'>
            <div id="title">
                <img src={appLogo} alt="a burger logo" />
                <h1>PEKER'S</h1>
            </div>
            <nav>
            <Button textOnly>Cart (0)</Button>
            </nav>

        </header>
    )
}