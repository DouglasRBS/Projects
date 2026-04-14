function Navigation({ links }) {
    return (
    <nav className="nav">
        {links.map((link, index) => (
        <ul key={index}>
            <a href={link.href}>{link.label}</a>
        </ul>
        ))}
    </nav>
    )
}

export default Navigation
