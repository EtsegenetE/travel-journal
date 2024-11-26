import globe from "./image/globe.jpg";

function Header () {
    return (
        <header>
        <img src={globe} alt="globe icon" />
        <h1>my travel journal.</h1>
        </header>
    );
};

export default Header;