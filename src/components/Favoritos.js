const Favoritos = ({ items, onEliminar }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}
                    <button onClick={() => onEliminar(index)} style={{ marginLeft: '10px' }}>x</button>
                </li>
            ))}
        </ul>
    );
};

export default Favoritos;
