import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Biography() {
    return (
        <div className="container mt-5 bio-section d-flex flex-column flex-md-row align-items-center">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/38/VanGogh_1887_Selbstbildnis.jpg"
                alt="Vincent van Gogh"
                className="bio-img mb-3 mb-md-0 me-md-4 rounded shadow"
            />
            <div>
                <h2 className="text-accent mb-3"> Вінсент ван Гог</h2>
                <p className="lead">
                    Геній, який бачив світ інакше. Він малював не очима — а душею.
                </p>
                <p className="fs-5">
                    Народився у Нідерландах у 1853 році. За десять років творчості створив понад <strong>2000 робіт</strong>.
                    Його картини — це емоції у кольорах: біль, любов, самотність і віра в красу.
                </p>
                <blockquote className="blockquote mt-3">
                    <em>“Я мрію малювати, і тоді я малюю свою мрію.”</em>
                </blockquote>
            </div>
        </div>
    );
}


function FamousPainting() {
    return (
        <div className="container mt-5 text-center painting-section">
            <h2 className="mb-4 text-accent"> «Зоряна ніч»</h2>
            <div className="starry-container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
                    alt="Starry Night"
                    className="starry-img img-fluid"
                />
            </div>
            <p className="mt-3 fs-5 text-muted text-center">
                Картина, написана у 1889 році під час перебування художника у лікарні Сен-Ремі.
                Вона — символ нескінченного руху життя, ночі, мрії та надії.
            </p>
        </div>
    );
}

function Gallery() {
    const paintings = [
        { id: 1, title: " Соняшники", img: "https://lh3.googleusercontent.com/w_82vA8GyccwS9vDPh8yJUbmL2HM6zgvT2eyp28-d4U5mCUMIS-fRQI9bTcJ8XgYKw=s1200" },
        { id: 2, title: " Нічне кафе", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gogh4.jpg/1200px-Gogh4.jpg" },
        { id: 3, title: " Жовтий дім", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/WLANL_-_artanonymous_-_Het_gele_huis.jpg/1200px-WLANL_-_artanonymous_-_Het_gele_huis.jpg" },
    ];

    return (
        <div className="container mt-5">
            <h2 className="text-center text-accent mb-4">Галерея</h2>
            <div className="row">
                {paintings.map((p) => (
                    <div key={p.id} className="col-md-4 mb-4 text-center">
                        <Link to={`/painting/${p.id}`} className="card-link">
                            <div className="painting-card shadow position-relative">
                                <img src={p.img} className="card-img-top gallery-img" alt={p.title} />
                                <div className="painting-title-overlay">
                                    <h5>{p.title}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

function PaintingDetails() {
    const { id } = useParams();
    const data = {
        1: { title: " Соняшники", info: "Серія, що символізує дружбу, сонце й тепло людського серця." },
        2: { title: " Нічне кафе", info: "Картина, де світло ламп контрастує з темрявою душі — символ самотності." },
        3: { title: " Жовтий дім", info: "Місце, де Ван Гог мріяв створити «Майстерню Сонця» — дім для митців." },
    };

    const painting = data[id];

    if (!painting) return <h4 className="text-center mt-5 text-light">Картина не знайдена!</h4>;

    return (
        <div className="container text-center mt-5 text-light">
            <h2>{painting.title}</h2>
            <p className="mt-3 fs-5">{painting.info}</p>
            <Link to="/gallery" className="btn btn-outline-light mt-3">
                Назад до галереї
            </Link>
        </div>
    );
}

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container">
                <Link className="navbar-brand text-light fw-bold" to="/">
                     Van Gogh
                </Link>
                <div>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/biography">Біографія</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/famous">Зоряна ніч</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Галерея</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function App() {
    return (
        <div className="main-bg">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Biography />} />
                    <Route path="/biography" element={<Biography />} />
                    <Route path="/famous" element={<FamousPainting />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/painting/:id" element={<PaintingDetails />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
