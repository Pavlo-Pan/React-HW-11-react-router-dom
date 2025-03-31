import { Link } from 'react-router-dom';

import articles from '../../data/articles';

const ArticlesPage = () => {
    const elements = articles.map(item => <li key={item.id}><Link to={`/articles/${item.id}`}>{item.title}</Link></li>)
    return (
        <ul>
            {elements}
        </ul>
    )
}
export default ArticlesPage;