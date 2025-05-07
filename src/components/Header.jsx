import appLogo from '../assets/logo.jpg';
export default function Header() {
    return (
        <header id='main-header'>
            <div id="title">
                <img src={appLogo} alt="a burger logo" />
                <h1>PEKER'S</h1>
            </div>
            <nav>
            <button>Cart(0)</button>
            </nav>

        </header>
    )
}