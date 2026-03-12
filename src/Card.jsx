import Background from './assets/Moonlight Pokemon.png';
import Moonicon from './assets/moonskill.png';
import Star from './assets/star.png';
import Leaf from './assets/leaf.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab)

function Card() {

  return (
    <div className='whole-card'>
      <div className='card'>
        <div className='header'>
          <div className='stage-one'><span className='stage'>STAGE</span>1</div>
          <div className='name'>
            <p>Umbreon</p>
          </div>
          <div className='health-bar'>
            <p><span className='hp'>HP</span>110</p>
            <img src={Moonicon} alt="Health Image" />
          </div>
        </div>
        <div className='background-image'>
          <img src={Background} alt="Background image"/>
        </div>
        <div className='all-section'>
          <div className='paragraph-one'>
            <div className='header-section'>
              <img className='Symbol' src={Moonicon} alt="Symbol" />
              <h3>Feint Attack</h3>
            </div>
            <div>
              <p>This attack does 50 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance, or by any effects on that Pokémon.</p>
            </div>
          </div>
          <div className='paragraph-two'>
            <div className='header-section'>
              <img className='Symbol' src={Moonicon} alt="Symbol" />
              <img className='Moon Symbol' src={Star} alt="Star Symbol" />
              <img className='Symbol' src={Star} alt="Star Symbol" />
              <h3>Pitch-Black Blade</h3>
              <p className='damage'>140</p>
            </div>
            <div className='description'>
              <p>During your next turn, this Pokémon can't attack.</p>
            </div>
          </div>
        </div>
        <div className='last-section'>
          <div className='container-one'>
            <p>
              weakness
            </p>
            <img className='leaf' src={Leaf} alt="Leaf Image" />
            <p><span>x 2</span></p>|
            <p>resistance</p>
          </div>
          <div className='container-two'>
            <p>
              retreat
            </p>
            <img className='leaf' src={Star} alt="Leaf Image" />
          </div>
        </div>
        <footer>
          <div className='creator-space'>
            <div className='creator-container'>
              <p className='creator'>By: Zeus Christian</p>
            </div>
            <div className='accounts'>
              <a href="https://github.com/ZyIsBad" target="_blank"><FontAwesomeIcon icon="fa-brands fa-github" size="sm" style={{color: "#000000",}}/></a>
              <a href="https://www.facebook.com/zeus.christian.aggabao.2024/" target="_blank"><FontAwesomeIcon icon="fa-brands fa-facebook" size="sm" style={{color: "#000000",}} /></a>
              <p>130/197<FontAwesomeIcon icon="fa-solid fa-diamond" size="sm" style={{color: "#000000",}}/></p>
            </div>
          </div>
            <div className='card-description'>
              <p>
                When exposed to the moon's aura, the rings on it's body glow faintly and it gains a mysterious power.
              </p>
            </div>
        </footer>
        <div className='end-footer'>
          <p>
            &copy; {new Date().getFullYear()} Pokémon / Nitendo / Creatures / GAME FREAK / Zeus Christian
          </p>
        </div>
      </div>
    </div>

  );
}

export default Card;