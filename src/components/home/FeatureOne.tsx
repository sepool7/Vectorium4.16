import { Link } from "react-router-dom";

interface DataType {
   id: number;
   title: JSX.Element;
   desc: JSX.Element;
   img: string;
}
const feature_data: DataType[] = [
   {
      id: 1,
      title: (<>Eco-Friendly Consensus Mechanism</>),
      desc: (<>drastically reducing energy consumption.</>),
      img: "/assets/img/images/features_img01.png",
   },
   {
      id: 2,
      title: (<>High-Speed Transactions</>),
      desc: (<>Enabling rapid transactions with lower energy use per transaction</>),
      img: "/assets/img/images/features_img02.png",
   },
   {
      id: 3,
      title: (<>Decentralized <br /> Green Initiatives</>),
      desc: (<> Supports projects and applications focused on environmental sustainability</>),
      img: "/assets/img/images/features_img03.png",
   },
   {
      id: 4,
      title: (<>Carbon-Neutral Blockchain Operations</>),
      desc: (<>Commits to offsetting any residual carbon footprint</>),
      img: "/assets/img/images/features_img04.png",
   },
]
const FeatureOne = () => {
   return (
      <section id="feature" className="features-area pt-140 pb-110">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="section-title text-center mb-70">
                     <h2 className="title">Revolutionary green Blockchain to save the Planet</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {feature_data.map((item) => (
                  <div key={item.id} className="col-lg-6">
                     <div className="features-item">
                        <div className="features-content">
                           <h2 className="title"><Link to="#!">{item.title}</Link></h2>
                           <p>{item.desc}</p>
                        </div>
                        <div className="features-img">
                           <img src={item.img} alt="" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default FeatureOne
