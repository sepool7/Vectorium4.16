import { Link } from "react-router-dom"

const Contribution = () => {
   return (
      <section id="contribution" className="contribution-area pt-130 pb-130">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="contribution-title">
                     <h2 className="title"><span>Stake your Vect</span> with historical rewards rate up to 14%</h2>
                  </div>
                  <div className="progress-wrap">
                     <ul className="list-wrap">
                        <li>Purchase Vect</li>
                        <li>Stake Vect</li>
                        <li>Track Green Energy</li>
                     </ul>
                     <div className="progress" role="progressbar">
                        <div className="progress-bar" style={{ width: "83%" }}></div>
                     </div>
                     <h6 className="progress-title"> Vect mainnet <span>Green Planet</span></h6>
                  </div>
                  <div className="contribution-btn">
                  <a href="https://bitstorage.finance/spot/trading/VECTUSDT?interface=classic" className="btn" target="_blank" rel="noopener noreferrer">Purchase a Token</a>
                     <Link to="/contact" className="btn btn-two">Read White Paper</Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="contribution-shape-wrap">
            <img src="/assets/img/images/contribution_shape01.png" alt="" className="alltuchtopdown" />
            <img src="/assets/img/images/contribution_shape02.png" alt="" className="leftToRight" />
         </div>
      </section>
   )
}

export default Contribution
