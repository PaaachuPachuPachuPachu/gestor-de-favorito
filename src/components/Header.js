const Header = ({ totalFavoritos }) => {
    return (
        <header className="App-header">
            <h1>Gestor de Favoritos</h1>
            <p>Total de favoritos: {totalFavoritos}</p>
        </header>
    );
};

export default Header;