function Header({ titulo, children }) {
    return (
    <header className="header">
        <h1>{titulo}</h1>
        {children}
    </header>
    )
}

export default Header
