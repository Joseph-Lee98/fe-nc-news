import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sidebar } from '../sidebar/Sidebar';
import { MainContent } from '../articlesLayout/MainContent';
import { fetchArticles } from "../../utils/api";
import './Articles.css'

export function ArticlesPage({ isLoading, setIsLoading, articles, setArticles }) {
    const { topic } = useParams();
    const [topicSlug, setTopicSlug] = useState(topic || '');
    const [filteredArticles, setFilteredArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        fetchArticles(topicSlug)
            .then(response => {
                setFilteredArticles(response.data.articles);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching articles: ', error);
                setIsLoading(false);
            });
    }, [topicSlug, setIsLoading]);

    useEffect(() => {
        setTopicSlug(topic || '');
    }, [topic]);

    return (
        <div id="articles-layout">
            <Sidebar filteredArticles={filteredArticles} setFilteredArticles={setFilteredArticles} topicSlug={topicSlug} setTopicSlug={(newTopic) => {
                navigate(`/${newTopic}`);
                setTopicSlug(newTopic);
            }} />
            <MainContent filteredArticles={filteredArticles} isLoading={isLoading} />
        </div>
    );
}
