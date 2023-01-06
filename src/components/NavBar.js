import logo from "../assets/images/logo.svg";
import "./styling/css/NavBar.css";
import IconMenu from "../assets/images/icon-menu.svg";
import IconMenuClosed from "../assets/images/icon-menu-close.svg";

function NavBar({ dropdownOpened, setDropdownOpened, isMobile, setIsMobile}){
    
    if(isMobile && dropdownOpened === "opened")
        document.body.style.overflow = "hidden";
    else
        document.body.style.overflow = "scroll";

    // event handlers
    const handleClickClose = () =>{
        setDropdownOpened("closed");
    }
    const handleClickOpen = () =>{
        setDropdownOpened("opened");
    }

    return(
        <nav>
            <div className="logo">
                <img src={ logo } alt="logo"></img>
            </div>

            <div className="dropdown-menu">
                <div className="dropdown-menu-button">
                { dropdownOpened === "closed" && 
                    <img onClick={ handleClickOpen }
                    src={ IconMenu } alt="icon menu"></img> }
                </div>

                <div className={ isMobile ? dropdownOpened:"closed" }>
                    { dropdownOpened === "opened" && isMobile && 
                    <img onClick={ handleClickClose }
                    src={ IconMenuClosed } alt="icon menu"></img> }
                    <ul>
                        <li className="option"><a href=".">Home</a></li>
                        <li className="option"><a href=".">New</a></li>
                        <li className="option"><a href=".">Popular</a></li>
                        <li className="option"><a href=".">Trending</a></li>
                        <li className="option"><a href=".">Categories</a></li>
                    </ul>
                </div>
            </div> 
        </nav>
    );
}

export default NavBar;