function Sidebar({ destaques, topPosts }) {
    return (
    <aside className="aside">
        <h3>Destaques</h3>
        <ul className="aside-list">
        {destaques.map((item, index) => (
            <li key={index}>
            <a href={item.href}>{item.label}</a>
            </li>
        ))}
        </ul>

        <hr />

        <h3>Top 3 Posts</h3>
        <ol className="aside-list">
        {topPosts.map((item, index) => (
            <li key={index}>
            <a href={item.href}>{item.label}</a>
            </li>
        ))}
        </ol>
    </aside>
    )
}

export default Sidebar
