import RecommendedArticle from "./RecommendedArticle";
import ArticleImage1 from '../assets/images/image-retro-pcs.jpg';
import ArticleImage2 from '../assets/images/image-top-laptops.jpg';
import ArticleImage3 from '../assets/images/image-gaming-growth.jpg';
import "./styling/css/RecommendedArticles.css"


function RecommendedArticles(){
    return(
        <div className="recommended-articles">
            <RecommendedArticle img={ ArticleImage1 } number={ "01" } 
            header={ "Reviving Retro PCs" } desc={ "What happens when old PCs are given modern upgrades?" }/>
            <RecommendedArticle img={ ArticleImage2 } number={ "02" } 
            header={ "Top 10 Laptops of 2022" } desc={ "Our best picks for various needs and budgets." }/>
            <RecommendedArticle img={ ArticleImage3 } number={ "03" } 
            header={ "The Growth of Gaming" } desc={ "How the pandemic has sparked fresh opportunities." }/>
        </div>
    );
}

export default RecommendedArticles;