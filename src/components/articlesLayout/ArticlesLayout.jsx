import './ArticlesLayout.css'

export function ArticlesLayout({SidebarContent,MainContent}){
    return (
        <div id='articles-layout'>
            <aside>{SidebarContent}</aside>
            <main>{MainContent}</main>
        </div>
    )
}