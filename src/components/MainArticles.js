import ArticleBackgroundMobile from '../assets/images/image-web-3-mobile.jpg';
import ArticleBackgroundDesktop from '../assets/images/image-web-3-desktop.jpg';
import "./styling/css/MainArticle.css";

function MainArticle(){
    return(
        <main>
            <picture>
                <source srcSet={ ArticleBackgroundDesktop }
                        media="(min-width: 800px)"></source>
                <img src={ ArticleBackgroundMobile } alt="article background"></img>
            </picture>
            <div className="content">
                <h1>The Bright Future of Web 3.0?</h1>
                <div className="description">
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                        But is it really fulfilling its promise?</p>
                    <button>Read more</button>
                </div>
            </div>
        </main>
    );
}

export default MainArticle;