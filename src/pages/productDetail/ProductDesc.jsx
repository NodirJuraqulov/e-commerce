import React from "react";
import Sofa1 from "@/assets/sofa1.png";
import Sofa2 from "@/assets/sofa2.png";

const ProductDesc = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center gap-[30px] px-[105px]">
        <p className="text-[16px] font-normal text-[#9F9F9F]">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-[16px] font-normal text-[#9F9F9F]">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      <div className="w-full flex items-center justify-center gap-[30px] mt-9">
        <img className="bg-[#F9F1E7] rounded-md" src={Sofa1} alt="Sofa 1" />
        <img className="bg-[#F9F1E7] rounded-md" src={Sofa2} alt="Sofa 2" />
      </div>
    </div>
  );
};

export default React.memo(ProductDesc);
