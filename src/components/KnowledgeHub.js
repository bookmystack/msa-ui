import React from 'react';
// Placeholder for images
// import mulberryLeavesImg from '../assets/images/mulberry_leaves.jpg'; // [cite: 141]
// import nurseryPlantingHandImg from '../assets/images/nursery_planting_hand.jpg'; // [cite: 153]
// import intercroppingExampleImg from '../assets/images/intercropping_example.jpg'; // [cite: 194]
// import pinkMealyBugImg from '../assets/images/pink_mealy_bug.jpg'; // [cite: 202]
// import powderyMildewImg from '../assets/images/powdery_mildew.jpg'; // [cite: 206]
// import pebrineLarvaAImg from '../assets/images/pebrine_larva_A.jpg'; // [cite: 230]
// import uziFlyOnLarvaImg from '../assets/images/uzi_fly_on_larva.jpg'; // [cite: 256]
// import silkwormEggsLeafImg from '../assets/images/silkworm_eggs_leaf.jpg'; // [cite: 258]

const KnowledgeHub = () => {
  // Based on [cite: 2, 141]
  return (
    <div>
      <h2>Knowledge Hub</h2> {/* [cite: 2] */}
      
      <section>
        <h3>Mulberry Plantation</h3> {/* [cite: 2, 141] */}
        {/* <img src={mulberryLeavesImg} alt="Mulberry leaves" style={{width: '200px'}} /> [cite: 141] */}
        <p>Mulberry (Morus spp.) is crucial for sericulture. [cite: 142]</p>
        <h4>Ecological Requirements</h4>
        <p>Climate: Grows up to 800m altitude, temps 13°C-37.7°C (ideal 24-28°C), humidity 65-80%, 5-12 hrs sunshine. [cite: 143, 144] Rainfall: 600mm-2500mm. [cite: 145]</p>
        <h4>Soil</h4>
        <p>Slightly acidic (pH 6.2-6.8), free from injurious salts. [cite: 146] Saline/alkaline soils not preferred. [cite: 147]</p>
        <h4>Mulberry Varieties</h4>
        <p>Irrigated: Kanva 2, S 36, V1, etc. [cite: 148] Rainfed: S 13, RFS 175, etc. [cite: 148]</p>
        <h4>Propagation & Planting</h4>
        <p>Mostly via cuttings, nursery raising advisable. [cite: 149, 150] Cuttings from 8-12 month old plants, 15-20cm long, 3-4 active buds. [cite: 151, 152]</p>
        {/* <img src={nurseryPlantingHandImg} alt="Planting mulberry cuttings" style={{width: '200px'}} /> [cite: 153] */}
        <h4>Nursery Management</h4>
        <p>Bed prep with FYM. [cite: 154, 155] Pre-treatment with Azospirillum. [cite: 157, 158] Planting at 15x7cm spacing. [cite: 160] Irrigation, pest/disease control. [cite: 161, 162, 163] Saplings ready in 90-120 days. [cite: 165]</p>
        <h4>Planting Methods & Nutrient Management</h4>
        <p>Paired row system (75/105cm x 90cm). [cite: 166] Fertilizer based on soil tests (e.g., V1 irrigated: 375N-140P-140K kg/ha). [cite: 172] Bio-fertilizers like Azospirillum. [cite: 176]</p>
        <h4>Irrigation & Weed Management</h4>
        <p>Ridges/furrows, flat bed, drip irrigation. [cite: 182, 184, 185] Integrated weed management: cultural, mechanical, chemical (Paraquat, Glycel). [cite: 188, 190, 191]</p>
        <h4>Intercropping & Mulching</h4>
        {/* <img src={intercroppingExampleImg} alt="Intercropping with mulberry" style={{width: '200px'}} /> [cite: 194] */}
        <p>Short duration pulses enrich soil. [cite: 195] Mulching controls weeds, conserves moisture. [cite: 199, 200]</p>
        <h4>Pests and Diseases of Mulberry</h4>
        <p>Pests: Pink mealy bug, Papaya mealy bug, Leaf webber, Thrips, Termite. [cite: 202]</p>
        {/* <img src={pinkMealyBugImg} alt="Pink mealy bug on mulberry" style={{width: '150px'}} /> [cite: 202] */}
        <p>Diseases: Leaf spot, Powdery mildew, Root rot, Root knot nematode. [cite: 205]</p>
        {/* <img src={powderyMildewImg} alt="Powdery mildew on mulberry leaf" style={{width: '150px'}} /> [cite: 206] */}
        <h4>Pruning & Harvesting</h4>
        <p>Pruning methods: Bottom, Middle, Kolar/Strip. [cite: 206, 208, 210] Harvesting: Leaf picking, Branch cutting, Whole shoot harvest, preferably in morning. [cite: 213, 214, 215, 217, 219] Preserve leaves in cool, wet conditions. [cite: 222]</p>
      </section>

      <section>
        <h3>Silkworm Rearing</h3> {/* [cite: 2] Also covered in Operational Areas, this can be a more detailed guide */}
        {/* <img src={silkwormEggsLeafImg} alt="Silkworm eggs on a leaf" style={{width: '200px'}} /> [cite: 258] */}
        <h4>1. Incubation of Silkworm Eggs</h4>
        <p>DFLs from certified sources incubated at 24-26°C, 75-85% humidity. [cite: 258] Hatching in 10-12 days. [cite: 258]</p>
        <h4>Black Boxing Technique</h4>
        <p>Eggs kept in total darkness for last few days before hatching to synchronize it. [cite: 259, 260, 261]</p>
        <h4>2. Hatching and Early Rearing (Chawki Rearing)</h4>
        <p>Newly hatched chawki fed tender mulberry leaves 4-5 times daily. [cite: 263] High humidity (85-90%), temps 26-28°C. [cite: 264]</p>
        <h4>3. Molting Stages</h4>
        <p>Silkworms shed skin and grow. Increase feed and space. [cite: 265, 266] For 3rd/4th instar, temps 24-26°C, humidity 75-80%. [cite: 267]</p>
        <h4>4. Feeding and Hygiene</h4>
        <p>Regular fresh, clean leaves. [cite: 268] Clean trays to prevent disease. [cite: 270, 271]</p>
        <h4>5. Spacing and Tray Management</h4>
        <p>Increase space as worms grow to prevent overcrowding. [cite: 271, 272]</p>
        <h4>6. Preparation for Cocoon Spinning</h4>
        <p>Reduce feeding for 5th instar. Transfer to mountages when restless. [cite: 274, 275] Spinning takes 2-3 days. [cite: 276]</p>
        <h4>7. Environmental Control</h4>
        <p>Monitor temperature, humidity, ventilation throughout. [cite: 277, 278]</p>
      </section>

      <section>
        <h3>Diseases and Pests of Silkworms</h3> {/* [cite: 223] */}
        <h4>Diseases</h4>
        <ul>
          <li><strong>Pebrine (Pepper disease):</strong> Caused by Nosema bombycis. [cite: 224] Larva shows black spots. [cite: 228]</li>
          {/* <img src={pebrineLarvaAImg} alt="Pebrine infected larva" style={{width: '150px'}} /> [cite: 230] */}
          <li><strong>Flacherie:</strong> Bacterial/viral. Sotto disease by Bacillus thuringiensis. [cite: 231, 237] Infectious Flacherie by Morator Virus. [cite: 239] Cytoplasmic polyhedrosis by Smithia virus. [cite: 241]</li>
          <li><strong>Grasserie (Jaundice/Nuclear Polyhedrosis):</strong> By Borrelina virus. [cite: 231, 243] Larvae lose appetite, skin tender. [cite: 244]</li>
          <li><strong>Muscardine (Calcino):</strong> White (Beauveria bassiana), Green (Metarrhizium anisopliae), Yellow (Isaria farinosa). [cite: 231, 245, 247, 248]</li>
        </ul>
        <h4>Pests</h4>
        <ul>
          <li><strong>Uzi fly (Tricholyga bombycis):</strong> Serious pest of larvae and pupae. [cite: 249]</li>
          {/* <img src={uziFlyOnLarvaImg} alt="Uzi fly on silkworm larva" style={{width: '150px'}} /> [cite: 256] */}
          <li><strong>Dermestid beetles:</strong> Larvae bore into cocoons and eat pupae. [cite: 250, 253]</li>
          <li><strong>Mites (Pediculoides ventricosus):</strong> Damage larvae with toxins. [cite: 255, 256]</li>
        </ul>
      </section>
      <p>Other topics: Silkworm Grades, Raw Silk Marketing, Reeling, Raw Silk Grades, Weaving & Dyeing, Designing & Garmenting, Finished Good Marketing. [cite: 2] (These are also linked to Operational Areas)</p>
    </div>
  );
};

export default KnowledgeHub;
