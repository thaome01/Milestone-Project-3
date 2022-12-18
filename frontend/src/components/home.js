import '../style/posting.css'
import Carousel from '../components/carousel'
import NavBar from '../components/NavBar';

function home() {
  return (
    <>
    < NavBar />
    <Carousel/>
    <div className="container">
    <div className="cards"><img src="/img/Astral Radiance.jpg" alt="pokemon" /></div>
    <div className="cards"><img src="/img/Battle Style.jpg" alt="pokemon" /></div>
    <div className="cards"><img src="/img/Brilliant Stars.jpg" alt="pokemon" /></div>
    <div className="cards"><img src="/img/Celebration.jpg" alt="pokemon" /></div>
    <div className="cards"><img src="/img/Chilling Reign.jpg" alt="pokemon" /></div>
    <div className="cards"><img src="/img/Evolving Skies.jpg" alt="pokemon" /></div>
    <div className="cards"><img src="/img/Fusion Strike.jpg" alt="pokemon" /></div>
    <div className="cards"><img src="/img/Lost Origin.jpg" alt="pokemon" /></div>
    <div className="cards"><img src="/img/Pokemon Go.jpg" alt="pokemon" /></div>
    <div className="cards"><img src="/img/Shinning Fate.jpg" alt="pokemon" /></div>
    <div className="cards"><img src="/img/Silver Tempest.jpg" alt="pokemon" /></div>
    <div className="cards"><img src="/img/Vivid Voltage.jpg" alt="pokemon" /></div>
    </div>
    </>
  
  )
}

export default home