import { Link } from "react-router-dom"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeaderOffcanvas = ({ offCanvas, setOffCanvas }: any) => {
   return (
      <>
         <div className={`${offCanvas ? "offcanvas-menu-visible" : ""}`}>
            <div className={`extra-info ${offCanvas ? "active" : ""}`}>
               <div className="close-icon menu-close">
                  <button onClick={() => setOffCanvas(false)}><i className="far fa-window-close"></i></button>
               </div>
               <div className="logo-side mb-30">
                  <Link to="/"><img src="/assets/img/logo/logo.jpg" alt="Logo" /></Link>
               </div>
               <div className="social-icon-right mt-30">
                  <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#"><i className="fab fa-twitter"></i></Link>
                  <Link to="#"><i className="fab fa-google-plus-g"></i></Link>
                  <Link to="#"><i className="fab fa-instagram"></i></Link>
               </div>
            </div>
            <div onClick={() => setOffCanvas(false)} className={`offcanvas-overly ${offCanvas ? "active" : ""}`}></div>
         </div>
      </>
   )
}

export default HeaderOffcanvas
