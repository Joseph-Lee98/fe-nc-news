import './ArticleLayout.css'

export function ArticleLayout({SidebarContent,MainContent}){
    return (
        <div id='article-layout'>
            <aside>{SidebarContent}</aside>
            <main>{MainContent}</main>
        </div>
    )
}