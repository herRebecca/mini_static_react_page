import "./Header.css"

function Header(){
return(
    <nav className="nav_cont">
        <div className="container">
            <img src="/src/images-3.png" alt="react-logo" className="logo" />
            <a href="/" className="logo-name">ReactFacts</a>
        </div>
    </nav>
)
}
export default Header;