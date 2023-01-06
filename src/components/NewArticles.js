import "../components/styling/css/NewArticles.css";

function NewArticles(){
    return(
        <div className="new-articles">
            <h1>New</h1>
            <div className="articles">
                <div className="article">
                    <h2>Hydrogen VS Electric Cars</h2>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <hr></hr>
                <div className="article">
                    <h2>The Downsides of AI Artistry</h2>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                </div>
                <hr></hr>
                <div className="article">
                    <h2>Is VC Funding Drying Up?</h2>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>                
            </div>
        </div>
    );
}

export default NewArticles;