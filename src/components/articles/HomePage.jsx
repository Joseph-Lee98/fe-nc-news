import { ArticleLayout } from "../articleLayout/ArticleLayout";
import { useEffect, useState } from 'react';
import { NCNewsApi } from "../../utils/api";
import {HomepageSidebar} from '../sidebar/HomepageSidebar';
import {MainContent} from '../articleLayout/MainContent';


export function HomePage(){
        const [articles, setArticles] = useState([]);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            NCNewsApi.get('/articles')
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
            <ArticleLayout
            SidebarContent={<HomepageSidebar />}
            MainContent={<MainContent articles={articles} isLoading={isLoading}/>}
            />
        );
    
}