import ButtonLayout from "../components/ButtonLayout";
import Footer from "../components/Footer";
import "../styles/index.scss";
import Drums from "../utils/Drums";

function DrumKit() {
   return (
      <div className="h-min lg:h-screen flex flex-col text-center">
         <h1 className="text-6xl md:text-8xl font-bold my-14 lg:my-16 text-white">Drum Machine</h1>
         <div className="md:p-14 lg:p-16">
            {Drums.map(CreateButtons => (
               <ButtonLayout
                  key={CreateButtons.id}
                  name={CreateButtons.name}
                  background={CreateButtons.background}
               />
            ))}
         </div>
         <Footer />
      </div>
   )
}

export default DrumKit;