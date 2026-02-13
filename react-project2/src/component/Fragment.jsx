import "./card.css"

function Fragment({ data }) {
    return (
        <div className="container">
            {data.map((item) => (
                <div key={item.id} className="card">
                    <h3>{item.name}</h3>
                    <p>{item.para}</p>
                </div>
            ))}
        </div>
    );
}


export default Fragment;

