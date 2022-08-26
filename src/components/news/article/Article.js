import "./Article.css";

const Article = (props) => {
	
	return props.articles.slice(0, 10).map(article => {
		return (
			<article className="article">
				<div className="article-text">
					<a className="article-title-link" href={article.url} target="_blank" rel="noreferrer"><h3 className="article-title">{article.title}</h3></a>
					<p className="article-author">{article.author}</p>
					<p className="article-source">{article.source.name}</p>
				</div>
				<div>
					<a target="_blank" rel="noreferrer" href={article.url}><img className="article-image" src={article.urlToImage} alt="article"/></a>
				</div>
			</article>
		)
	})
}

export default Article;