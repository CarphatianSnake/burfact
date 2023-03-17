// Styles
import './TheStory.scss';

// Images
import theStoryImg from '../../assets/img/the-story.jpg';

// Component
function TheStory() {
  return (
    <section className="the-story">
      <div className="the-story_description">
        <h2 className="the-story_description_heading">The Story</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis id arcu vel maximus.</h3>
        <p className='the-story_description_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget consequat lorem. Ut nec placerat purus. Fusce vitae faucibus augue, non commodo elit. Integer risus orci, ultricies ac dapibus sed, dignissim interdum quam. Proin quis dignissim diam. Donec id magna placerat, fringilla odio et, efficitur lacus. Vivamus eu ultricies erat, eu lobortis nunc. Sed nec dignissim libero. Integer cursus leo nunc. Nulla mattis interdum nunc, sed semper turpis. Cras elit lorem, mollis ut feugiat ac, ultricies eu dolor.</p>
      </div>
      <img src={theStoryImg} alt="The Story" className="the-story_image" />
    </section>
  )
}

export default TheStory;