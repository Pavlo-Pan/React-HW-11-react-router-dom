import styles from './ArticlesProfilePage.module.css';
import articles from '../../data/articles';

import { useParams, useNavigate } from 'react-router-dom';

const ArticlesProfilePage = () => {
    const { id } = useParams();
    const article = articles.find(item => item.id === Number(id));
    const navigate = useNavigate()
    function goBack() {
        navigate(-1)
    }
    if (!article) return <div>User not found</div>
    return (<>
        <div className={styles.container}><h2>{article.title}</h2>
        <p>{article.content}</p>
        <p>Текущий путь:/articles/{id} </p>
        <button onClick={goBack}>Назад</button>
        </div>
        
    </>
    )
}
export default ArticlesProfilePage;