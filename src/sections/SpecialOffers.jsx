import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffers = () => {
  return (
    <section id="special-offers" className="flex justify-wrap items-center gap-10 max-xl:flex-col-reverse max-container">
      <div>
        <img src={offer} width={773} height={687} className="object-contain w-full" alt="Special offer" />
      </div>
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <h2 className="text-start text-4xl font-montserrat font-bold">
            <span className="text-coral-red">Special</span> Offer
          </h2>
          <p className="info-text mt-4 lg:max-w-lg">Embark on a shopping journey that redefines with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
          <p className="info-text mt-4 lg:max-w-lg">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
          <div className="flex-wrap flex mt-11 gap-4">
            <Button label="Shop Now" iconURL={arrowRight} />
            <Button label="Learn More" backGroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
          </div>
        </div>

    </section>
  )
}

export default SpecialOffers;
