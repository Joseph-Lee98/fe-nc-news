import { ArticlesLayout } from "../articlesLayout/ArticlesLayout";
import { useEffect, useState } from 'react';
import {HomepageSidebar} from '../sidebar/HomepageSidebar';
import {MainContent} from '../articlesLayout/MainContent';
import { fetchArticles } from "../../utils/api";


export function HomePage({isLoading,setIsLoading}){
        const [articles, setArticles] = useState([]);

        useEffect(() => {
            fetchArticles()
                .then(response => {
                    setArticles(response.data.articles);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching articles: ', error);
                    setIsLoading(false);
                });
        }, []);

        return (
            <ArticlesLayout
            SidebarContent={<HomepageSidebar />}
            MainContent={<MainContent articles={articles} isLoading={isLoading} />}
            />
        );
    
}