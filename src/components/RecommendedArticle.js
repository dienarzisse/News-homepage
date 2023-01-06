import "../components/styling/css/RecommendedArticle.css";

function RecommendedArticle({img, number, header, desc }){
    return(
        <div className="recommended-article">
            <div className="article-background">
                <img src={ img } alt="article background"></img>
            </div>
            <div className="content">
                <h2>{ number }</h2>
                <a href=".">{ header }</a>
                <p>{ desc }</p>
            </div>
        </div>
    );
}

export default RecommendedArticle;