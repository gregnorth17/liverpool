import { useState, useEffect } from "react";
import Article from "./article/Article";
import "./News.css";

const News = () => {
	const date = new Date();
	// &to=${date.toISOString()}
	const [articles, setArticles] = useState([])
	useEffect(() => {
		fetch(`https://newsapi.org/v2/everything?q=liverpool&apiKey=2cc81aa6ef8646e4878b2fbafbf45bb1`)
			.then(response => response.json())
			.then(data => setArticles(data.articles))
	},[])
	return (
		<section className="news-section">
			<div className="articles">
				<Article articles={articles} />
			</div>
		</section>
	)
}

export default News;