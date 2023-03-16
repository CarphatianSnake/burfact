// Styles
import './Banner.scss';

// Images
import bannerImage from '../../assets/img/banner-burger.png';

// Component
function Banner() {
  return (
    <section className="banner">
      <div className="banner_wrapper">
        <div className="banner_content">
          <h1>Burger Factory</h1>
          <h3 className="banner_content_small-heading">Your dreamed burger close to your locations!</h3>
          <a href="#ingredient" className="banner_content_btn">Discover the ingredients</a>
        </div>
        <img loading='lazy' src={bannerImage} className='banner_image' alt="Burger Factory" />
      </div>
    </section>
  )
}

export default Banner;