import { Link } from "react-router-dom"

const doc_data = [
    { name: "Whitepaper", url: "https://vectorium-co.medium.com/vectorium-whitepaper-25d8cc20cd55" },
    { name: "Token Sale Terms", url: "#" },
    { name: "Presentation", url: "#" },
    { name: "Lightpaper", url: "#" }
]

const DocumentArea = () => {
    return (
        <section className="document-area">
            <div className="container">
                <div className="document-inner-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb-60">
                                <h2 className="title">Read Documents</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="document-wrap">
                                <ul className="list-wrap">
                                    {doc_data.map((doc, i) => (
                                        <li key={i}>
                                            <Link to={doc.url} target="_blank" rel="noopener noreferrer">
                                                <span className="icon"><i className="fas fa-file-pdf"></i></span>
                                                {doc.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="#" className="btn">Download All</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="document-shape">
                <img src="/assets/img/images/document_shape.png" alt="" className="alltuchtopdown" />
            </div>
        </section>
    )
}

export default DocumentArea
