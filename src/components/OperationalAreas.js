import React from 'react';
// Placeholder for images, refer to the main list in the thought block
// import mothEggsImg from '../assets/images/moth_eggs.jpg'; // [cite: 53]
// import eggCardsHatchingImg from '../assets/images/egg_cards_hatching.jpg'; // [cite: 53]
// ... and so on for all operational area images

const OperationalAreas = () => {
  return (
    <div>
      <h2>Operational Areas</h2> {/* [cite: 2] */}
      
      <section>
        <h3>Pre-Cocoon</h3> {/* [cite: 2] */}
        <p>Quality Egg manufacturing/ Chawki Centers/ Hatching / Transfer to Rearing House/ Rearing/ Raw Cocoon Harveting/ Marketing/ Mulberry Cultivation. [cite: 41]</p>
        <h4>Procurement of Quality Seeds</h4>
        <p>The most important step is procuring quality, disease-free seeds from grainages. [cite: 41, 42] Grainages purchase cocoons from certified producers. [cite: 43] Cocoons are kept in controlled environments (23-25°C, 70-80% humidity) for moth emergence. [cite: 44] Moths are sexed for breeding to produce seed eggs. [cite: 46] Egg sheets are disinfected. [cite: 48] Loose eggs are easier to transport. [cite: 49]</p>
        {/* <img src={mothEggsImg} alt="Silkworm moth and eggs" style={{width: '200px'}} /> [cite: 53] */}
        {/* <img src={eggCardsHatchingImg} alt="Egg cards for hatching" style={{width: '200px'}} /> [cite: 53] */}

        <h4>Brushing</h4>
        <p>Transferring silkworms to rearing trays, ideally around 10.00 am. [cite: 54, 55] Eggs at blue egg stage are black-boxed then exposed to diffused light for uniform hatching (around 90%). [cite: 55, 56, 57] Tender mulberry leaves are sprinkled over egg cards or nets for larvae. [cite: 58, 59]</p>
        {/* <img src={blueEggsHatchingImg} alt="Blue eggs hatching" style={{width: '200px'}} /> [cite: 60] */}
        {/* <img src={brushingLarvaeImg} alt="Brushing larvae with feather" style={{width: '200px'}} /> [cite: 60] */}

        <h4>Preparation of Feed Bed and Feeding</h4>
        <p>Bed prepared by collecting worms and leaves. [cite: 61] First feeding after two hours of brushing. [cite: 62] Chawki worms (1st and 2nd instar) are reared on paraffin paper with chopped leaves. [cite: 64, 65, 66] Later instars reared by shelf, floor, or shoot-rearing methods. [cite: 68] Shoot-rearing is most economical. [cite: 74] Seven eating stages exist. [cite: 75, 76, 77, 78]</p>
        {/* <img src={youngLarvaeFeedingImg} alt="Young larvae feeding" style={{width: '200px'}} /> [cite: 78] */}

        <h4>Bed Cleaning</h4>
        <p>Periodical removal of leftover leaves and excreta for hygiene. [cite: 79, 80] Methods: conventional, husk, net, combined. [cite: 80]</p>
        {/* <img src={bedCleaningNetImg} alt="Bed cleaning with net" style={{width: '200px'}} /> [cite: 80] */}
        
        <h4>Spacing</h4>
        <p>Adequate space is crucial. [cite: 81] Space doubles/triples by moult, increasing up to hundred folds by maturation. [cite: 83, 84, 85]</p>

        <h4>Mounting</h4>
        <p>Transferring mature fifth instar larvae (translucent, stop feeding) to mountages for cocoon spinning. [cite: 86, 87, 88] Spinning completes in 2-4 days. [cite: 94]</p>
        {/* <img src={mountingChandrikaImg} alt="Mounting in Chandrika" style={{width: '200px'}} /> [cite: 94] */}
      </section>

      <section>
        <h3>Post Cocoon</h3> {/* [cite: 2, 281] */}
        <p>This stage involves extracting silk fibers from cocoons and processing them. [cite: 282]</p>
        <h4>Cocoon Harvesting</h4>
        <p>Harvested after 2-3 days of spinning, before moth emergence. [cite: 283, 284] Some cocoons are selected for breeding. [cite: 285]</p>
        <h4>Stifling</h4>
        <p>Killing the pupa inside to prevent damage to silk, usually by dry heat, steam, or boiling water. [cite: 287, 288, 290]</p>
        {/* <img src={stiflingChamberImg} alt="Stifling chamber" style={{width: '200px'}} /> [cite: 286] */}
        <h4>Sorting of Cocoons</h4>
        <p>Sorted by quality (Grade A, B, C). [cite: 292, 294]</p>
        <h4>Boiling (Cocoon Cooking)</h4>
        <p>Softens sericin for easier unwinding. [cite: 296, 297] Soaked in hot water for 10-15 mins. [cite: 298]</p>
        <h4>Reeling</h4>
        <p>Unwinding silk thread from cocoons. [cite: 301] Filaments from 5-10 cocoons form one raw silk thread. [cite: 304, 307] A cocoon yields 300-900 meters. [cite: 308]</p>
        <h4>Twisting and Throwing</h4>
        <p>Strengthens raw silk threads. [cite: 309, 310]</p>
        <h4>Degumming</h4>
        <p>Removes sericin (25-30% of thread) to make silk smooth and lustrous by boiling in soap solution. [cite: 314, 315, 316]</p>
        <h4>Dyeing</h4>
        <p>Adding color to silk yarn, which holds dye well. [cite: 320, 321]</p>
        <h4>Weaving</h4>
        <p>Interlacing silk threads on handlooms or power looms. [cite: 327, 328, 329]</p>
        <h4>Finishing</h4>
        <p>Treatments like washing, softening, calendering for desired texture and sheen. [cite: 332, 333, 334, 335, 336]</p>
      </section>

      <section>
        <h3>Post Yarn: From Loom to Retail</h3> {/* [cite: 2, 95] */}
        <h4>Weaving and Dyeing: The Masters of the Loom</h4> {/* [cite: 96] */}
        <p>Weavers transform yarn into fabric. [cite: 96] Handloom weaving involves meticulous setup and shuttle use. [cite: 98, 99] Power loom weaving includes yarn prep and loom operation. [cite: 101, 102]</p>
        {/* <img src={powerLoomOperatorImg} alt="Woman operating power loom" style={{width: '200px'}} /> [cite: 102] */}
        <p>Dyers add color. [cite: 103] Yarn dyeing includes cleaning, dye prep, immersion, rinsing. [cite: 104, 105, 106, 107] Fabric dyeing involves similar prep and process. [cite: 109, 110, 111]</p>
        {/* <img src={dyeingYarnImg} alt="Dyeing yarn" style={{width: '200px'}} /> [cite: 108] */}
        
        <h4>Designing and Garmenting: The Architects of Fashion</h4> {/* [cite: 112] */}
        <p>Designers research trends, develop concepts, select materials, sketch, and create prototypes. [cite: 113, 114, 115] Calendering presses fabric for smoothness. [cite: 116]</p>
        {/* <img src={calenderingMachineImg} alt="Calendering machine" style={{width: '200px'}} /> [cite: 116] */}
        <p>Garment makers create patterns, cut fabric, sew, and finish garments. [cite: 117, 118, 119, 120, 121, 122]</p>

        <h4>Finished Good Marketing</h4>
        <p><strong>Wholesalers:</strong> Buy in bulk from manufacturers, store, distribute, and sell to retailers. [cite: 123, 124]</p>
        <p><strong>Retailers:</strong> Select products, merchandise, provide customer service, price, promote, and manage inventory for direct consumer sales. [cite: 125, 126] Packaging and labeling are key final steps. [cite: 127]</p>
        {/* <img src={labellingExampleImg} alt="Clothing label" style={{width: '200px'}} /> [cite: 127] */}
      </section>
    </div>
  );
};

export default OperationalAreas;
