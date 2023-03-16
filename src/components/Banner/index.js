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
          <h1 className="banner_content_heading">Burger Factory</h1>
          <p className="banner_content_text">Your dreamed burger close to your locations!</p>
          <a href="#ingredients" className="banner_content_btn">Discover the ingredients</a>
        </div>
        <img src={bannerImage} className='banner_image' alt="Burger Factory" />
      </div>
    </section>
  )
}

export default Banner;