import appLogo from '../assets/logo.jpg';
export default function Header() {
    return (
        <div id='main-header'>
            <div id="title">
                <img src={appLogo} alt="a burger logo" />
                <h1>REACTFOOD</h1>
            </div>
            <button className='button'>Cart</button>

        </div>
    )
}