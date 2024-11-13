import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
  return (
    <div>
        <section className="land_page">
        
        <div className="text center">
            <p>Bring freshness into your place.</p>
            <h1>Plants are awesome!</h1>
           <Link className="a" to="/shop"><button className="btn shop">Shop Now!</button></Link>
        </div>


        <div className="imgs_container">
        </div>
        

    </section>
    </div>
  )
}

export default Hero
