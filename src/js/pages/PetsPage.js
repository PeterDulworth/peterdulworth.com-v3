import React from 'react';
import PetSection from '../components/PetSection';
import JosieBallImg from '../../imgs/gallery/josie_ball.jpg';
import JosieBoxImg from '../../imgs/gallery/josie_box.jpg';
import Dakota1 from '../../imgs/pets/dakota1.jpg';
import Dakota2 from '../../imgs/pets/dakota2.jpg';
import Estrella1 from '../../imgs/pets/estrella1.jpg';
import Estrella2 from '../../imgs/pets/estrella2.jpg';
import Pup1 from '../../imgs/pets/pup1.jpg';
import Pup2 from '../../imgs/pets/pup2.jpg';
import Pup3 from '../../imgs/pets/pup3.jpg';
import Pup4 from '../../imgs/pets/pup4.jpg';
import Pup5 from '../../imgs/pets/pup5.jpg';
import Ted1 from '../../imgs/pets/ted1.jpg';
import Ted2 from '../../imgs/pets/ted2.jpg';
import Ted3 from '../../imgs/pets/ted3.jpg';
import Josie1 from '../../imgs/pets/josie1.jpg';
import Josie2 from '../../imgs/pets/josie2.jpg';
import Josie3 from '../../imgs/pets/josie3.jpg';
import Josie4 from '../../imgs/pets/josie4.jpg';
import Josie5 from '../../imgs/pets/josie5.jpg';
import Josie6 from '../../imgs/pets/josie6.jpg';
import Josie7 from '../../imgs/pets/josie7.jpg';
import Franz1 from '../../imgs/pets/franz1.jpg';
import Franz2 from '../../imgs/pets/franz2.jpg';
import Franz3 from '../../imgs/pets/franz3.jpg';
import Franz4 from '../../imgs/pets/franz4.jpg';
import Franz5 from '../../imgs/pets/franz5.jpg';
import Franz6 from '../../imgs/pets/franz6.jpg';
import Franz7 from '../../imgs/pets/franz7.jpg';
import Franz8 from '../../imgs/pets/franz8.PNG';
import Greg1 from '../../imgs/pets/greg1.jpg';
import Greg2 from '../../imgs/pets/greg2.jpg';
import Greg3 from '../../imgs/pets/greg3.jpg';
import Greg4 from '../../imgs/pets/greg4.jpg';
import Smokey1 from '../../imgs/pets/smokey1.jpg';
import Smokey2 from '../../imgs/pets/smokey2.jpg';
import Smokey3 from '../../imgs/pets/smokey3.jpg';
import MrAl1 from '../../imgs/pets/mral.jpg';
import Faith1 from '../../imgs/pets/faith1.jpg';
import Faith2 from '../../imgs/pets/faith2.jpg';

const PetsPage = ({ ...props }) => {
  return (
    <div className='PetsPage'>
      <PetSection
        name='Josie'
        imgs={[JosieBallImg, JosieBoxImg, Josie1, Josie2, Josie3, Josie4, Josie5, Josie6, Josie7]}
      />
      <PetSection name='Franz' imgs={[Franz1, Franz6, Franz2, Franz7, Franz3, Franz4, Franz5, Franz8]} />
      <PetSection name='Greg' imgs={[Greg1, Greg2, Greg3, Greg4]} />
      <PetSection name='Pup' imgs={[Pup1, Pup2, Pup3, Pup4, Pup5]} />
      <PetSection name='Ted' imgs={[Ted1, Ted2, Ted3]} />
      <PetSection name='Smokey' imgs={[Smokey1, Smokey2, Smokey3]} />
      <PetSection name='Dakota' imgs={[Dakota1, Dakota2]} />
      <PetSection name='Estrella' imgs={[Estrella1, Estrella2]} />
      <PetSection name='Mr. Al' imgs={[MrAl1]} />
      <PetSection name='Faith' imgs={[Faith1, Faith2]} />
      <PetSection name='Squeeks' imgs={[]} />
      <PetSection name='April' imgs={[]} />
      <PetSection name='Thumper' imgs={[]} />
      <PetSection name='Sam' imgs={[]} />
      <PetSection name='Ginger' imgs={[]} />
      <PetSection name='Zip' imgs={[]} />
    </div>
  );
};

// PetsPage.propTypes = {};

export default PetsPage;
