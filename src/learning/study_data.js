export const RespData = [
    {
        id: 1, 
        name: "Asthma", 
        info: "Think of the lungs as an **Upside-Down Tree**. 1) The **Trachea** (Windpipe) is the main trunk. 2) The **Bronchi** are the large 'Main Branches'. 3) The **Bronchioles** are the thousands of tiny 'Twigs'. 4) The **Alveoli** are the 'Leaves'. The **Alveoli** are where **Gas Exchange** happens—the body swaps Oxygen for Carbon Dioxide waste. **Why it happens:** In an Asthmatic, the immune system is 'hyper-reactive.' When it senses a trigger (dust, smoke, cold air), it thinks the body is under attack and sends out 'alarm chemicals' (like Leukotrienes). These chemicals cause **Bronchoconstriction**: the smooth muscles wrapped around the 'twigs' (**Bronchioles**) snap shut like a noose to 'protect' the lungs from the trigger. This also triggers **Inflammation**, where the inner 'pipes' swell up like a bruised thumb, and **Mucus Plugging**, where the body pours thick 'glue' into the pipes to trap the perceived intruder. **The Result:** This creates **Air Trapping**. Because the chest muscles are strong, the patient can force air *in* past the clogs, but when they try to breathe *out*, the narrowed pipes collapse. Stale air stays trapped in the 'leaves' (**Alveoli**), so no fresh oxygen can get in. The 'Wheeze' you hear is the sound of air whistling through these tiny, strangled gaps.", 

        findings: "Because the **Alveoli** are full of trapped 'stale' air, no fresh oxygen can reach the blood. This causes **Hypoxia** (low oxygen in the tissues). **Why the symptoms happen:** 1) **Tachycardia** (Heart rate > 100): The heart realizes the blood is low on oxygen, so it pumps faster and harder to try and compensate. 2) **Tachypnea** (Breathing > 20): The brain senses a buildup of Carbon Dioxide (the waste gas trapped in the lungs) and panics, forcing the patient to breathe faster to try and 'blow it off.' 3) **Accessory Muscle Use**: The 'primary' breathing muscle (the diaphragm) can't fight the clogged pipes alone, so the neck muscles (**Sternocleidomastoid**) and rib muscles (**Intercostals**) jump in to pull the chest open. This causes **Retractions** (skin sucking in around bones). 4) **Tripod Position**: The patient leans forward to take the weight of their chest off their lungs, making it mechanically easier to use those extra muscles. 5) **Silent Chest**: If you hear no whistling, the 'twigs' are 100% closed; this means the patient is 'crashing' and will stop breathing soon.",

        treat: "1. **High-Flow Oxygen (12-15L NRB)**: You need to saturate every tiny bit of air that makes it through the clogs to the **Alveoli**. 2. **Albuterol (Bronchodilator)**: This medicine is a 'Beta-2 Agonist.' It talks directly to the squeezed smooth muscles around the 'twigs' and tells them to relax, 'opening the noose.' 3. **High-Fowler's**: Sit them at 90 degrees. This uses gravity to pull the abdominal organs down, giving the lungs the maximum 'room' to expand. 4. **CPAP (Continuous Positive Airway Pressure)**: CPAP acts like a 'mechanical stent.' It blows a constant wind into the 'twigs' (**Bronchioles**) to physically prop them open so the trapped air can finally escape and fresh oxygen can get to the **Alveoli**."
    },
    {
        id: 2, 
        name: "Anaphylaxis", 
        info: "Anaphylaxis is a 'System Crash' caused by an allergic overreaction. **Why it happens:** The body releases a flood of **Histamine** to fight a trigger (like a bee sting). Histamine acts like a 'saboteur' in the body's plumbing. 1) It causes massive **Vasodilation**—the 'Main Trunk' and all the pipes in the body suddenly get wide and 'leaky.' Because the pipes are now too big for the blood inside, your Blood Pressure crashes. 2) In the lungs, it causes **Bronchoconstriction**—the 'Twigs' (**Bronchioles**) slam shut to keep the allergen out. It also causes **Angioedema** (swelling) in the 'Main Trunk' (**Trachea**). This is the only emergency where you are suffocating and bleeding out into your own tissues at the same time.", 
        findings: "You will see **Angioedema** (swelling of the face/tongue). This narrows the 'Main Trunk,' causing **Stridor** (a high-pitched crowing sound when they breathe *in*). You will hear **Wheezing** as air whistles through the strangled 'Twigs.' Because the blood pipes are too big and leaky, the patient will have **Hypotension** (Low BP) and a **Weak/Thready Pulse**. You will see **Urticaria** (Hives/Itching) as the skin pipes leak. The brain senses the crash, leading to a 'Feeling of Impending Doom.'",
        treat: "1. **IMMEDIATE Epinephrine**: This is 'Adrenaline.' It is the 'Anti-Histamine.' It forces the wide pipes to shrink (Vasoconstriction) and the strangled 'Twigs' to open. 2. **High-Flow Oxygen**: Saturate what little air is getting in. 3. **Shock Positioning**: Lay them flat with legs up to keep blood in the brain."
    },
    {
        id: 3, 
        name: "Pneumonia", 
        info: "If Asthma is a 'Pipe' problem, Pneumonia is a 'Leaf' problem. **Why it happens:** An infection (bacteria or virus) invades the 'Leaves' (**Alveoli**). The body sends white blood cells to fight, creating a 'soup' of pus and fluid (Exudate). This fluid floods the Alveoli. **The Result:** The 'Leaves' are where the blood picks up oxygen. If the 'room' is full of fluid, oxygen cannot jump across the wall into the blood. This is like trying to breathe with a sponge soaked in water instead of air. Even if the 'Trunk' and 'Twigs' are open, the blood leaves the lungs empty-handed.", 
        findings: "The patient will have a **Fever and Chills** as the body fights the infection. They will have a **Productive Cough** (hacking up green/yellow 'trash' from the flooded Alveoli). You will hear **Rales/Crackles**—this is the sound of air 'popping' through the fluid in the leaves. They will have **Pleuritic Chest Pain** (sharp pain when the lung 'rubs' against the chest wall). You will see **Cyanosis** (blue skin) and **Low SpO2** because the blood can't get past the 'flood' to grab oxygen.",
        treat: "1. **Oxygen**: Saturate the healthy 'Leaves' that aren't flooded yet. 2. **Positioning**: Sit them upright (High-Fowler's) so gravity pulls the 'flood' to the bottom of the lungs, leaving the top 'Leaves' open to breathe. 3. **CPAP**: The pressure helps 'push' the fluid aside so oxygen can touch the Alveolar walls."
    },
    
    {
        id: 4, 
        name: "Emphysema (COPD)", 
        info: "Emphysema is a disease of **Elasticity** (the 'Snap'). **Why it happens:** Years of smoking destroy the walls of the 'Leaves' (**Alveoli**). Instead of millions of tiny, springy grapes, the lungs become a few big, floppy, useless bags. These bags lose their 'Snap'—they can't squeeze air out. **The Result:** When the patient breathes in, the bags fill up, but they can't 'snap' shut to push the stale air back out. This is **Air Trapping**. The 'Leaves' stay full of 'trash' (CO2), so there is no physical room for 'food' (Oxygen) to come in. The patient is 'full of air' but still suffocating.", 
        findings: "The hallmark is a **Barrel Chest**—the chest stays permanently rounded because the 'Leaves' are always over-inflated. The patient is often **Thin** because they burn thousands of calories using their muscles to force the floppy bags to empty. You will see **Pursed-Lip Breathing**—they whistle when they exhale to create 'back-pressure' that keeps the 'Twigs' (**Bronchioles**) from collapsing. You will hear **Diminished Breath Sounds** because the air isn't moving in or out; it's just sitting there.",
        treat: "1. **Low-Flow Oxygen (2-6L)**: These patients often have a 'Hypoxic Drive,' meaning their brain only breathes when oxygen is low. Too much oxygen can make them stop breathing. 2. **CPAP**: This provides the 'Snap' the lungs have lost, propping the pipes open so they can finally exhale the stale air."
    },
    
    {
        id: 5, 
        name: "Chronic Bronchitis (COPD)", 
        info: "This is 'The Great Clog.' While Emphysema destroys the 'Leaves,' Bronchitis destroys the 'Twigs' (**Bronchioles**). **Why it happens:** Constant irritation (smoking) causes the 'Twigs' to stay swollen (Inflamed) and produce massive amounts of thick, heavy mucus. **The Result:** The 'Leaves' are actually okay, but the 'Pipes' leading to them are filled with jelly. It is like trying to breathe through a straw half-full of honey. Because they can't get enough oxygen through the clogs, their blood stays low on oxygen permanently.", 
        findings: "Known as **'Blue Bloaters'**. They will have **Cyanosis** (blue tint) because their blood is always low on O2. They are often **Overweight** and have a **Chronic Productive Cough** (the Smoker's Cough). You will hear **Rhonchi**—low-pitched 'snoring' or 'rattling' sounds as air moves past the heavy mucus in the pipes. They often have **Peripheral Edema** (swollen ankles) because the 'Clogged Pipes' in the lungs make it very hard for the heart to pump blood through them.",
        treat: "1. **Oxygen**: Give enough to keep them at their 'normal' (usually 88-92%). 2. **Upright Position**: Use gravity to help clear the mucus. 3. **Encourage Coughing**: They need to physically move the 'jelly' out of the pipes."
    },
    {
        id: 6, 
        name: "Croup", 
        info: "Croup is an 'Upper Airway' emergency in kids. **Why it happens:** A virus causes the 'Main Trunk' (**Trachea**) and the 'Voice Box' (**Larynx**) to swell. In a child, the 'Main Trunk' is already tiny (like a coffee stirrer). When it swells, the entryway becomes almost 100% blocked. **The Result:** It is very hard to pull air *in* past the swelling. This is like trying to breathe through a straw that someone is pinching at the top.", 
        findings: "The #1 sign is the **Seal-Bark Cough**. You will hear **Inspiratory Stridor**—a high-pitched whistling sound when they breathe *in* (because they are pulling air past the swollen Trunk). The child will be anxious and may have a fever. Unlike other emergencies, this usually **gets worse at night** when the air is cold and dry.",
        treat: "1. **CALM the child**: If they cry, the 'Trunk' swells more. 2. **Humidified O2**: Moisture helps soothe the swelling. 3. **Cool Air**: Sometimes taking the child outside into the cold night air will 'shrink' the swelling instantly. 4. **No Tongue Depressors**: Never stick anything in their mouth; it can cause the 'Trunk' to slam shut (Laryngospasm)."
    },
    
    {
        id: 7, 
        name: "Pulmonary Embolism (PE)", 
        info: "This is a 'Plumbing' problem. The 'Tree' is perfect. The 'Trunk,' 'Twigs,' and 'Leaves' are all wide open and full of air. **Why it happens:** A blood clot (usually from the leg) breaks loose and travels to the heart, which pumps it into the 'Main Water Line' (**Pulmonary Artery**) that feeds the lungs. The clot gets stuck. **The Result:** Even though the 'Leaves' (**Alveoli**) are full of oxygen, there is no blood flowing past them to pick it up because the pipe is blocked. The oxygen is there, but the 'delivery truck' (the blood) can't get to the warehouse to load up.", 
        findings: "The 'Classic' finding is **Sudden Shortness of Breath with Clear Lung Sounds**. The lungs sound perfect because the air side is fine, but the patient is gasping because the blood side is blocked. They will have **Sharp/Stabbing Chest Pain** and **Tachycardia** (Heart rate > 100) as the heart tries to force blood past the clot. Look for **Hemoptysis** (coughing up bright red blood) and a **low SpO2** that does not get better even when you give them oxygen.",
        treat: "1. **High-Flow Oxygen**: You must 'oversaturate' whatever tiny amount of blood is still getting past the clot. 2. **Rapid Transport**: This is a surgical/medical emergency. 3. **Keep them still**: Do not let them walk; moving can break more clots loose from their legs."
    },
];

export const CardiacData = [
    {
        id: 1,
        name: "Myocardial Infarction (Heart Attack)",
        info: "Think of the heart as a high-performance **Engine**. For the engine to run, it needs its own dedicated fuel lines called **Coronary Arteries**. **Why it happens:** Over time, 'sludge' (cholesterol/plaque) builds up in these pipes. A heart attack happens when that sludge ruptures and a blood clot forms instantly, blocking the pipe 100%. **The Result:** The part of the engine (heart muscle) served by that pipe stops getting oxygen. The muscle cells start to 'suffocate' and die. As they die, they leak a protein called **Troponin** into the blood and send screaming pain signals to the brain. If the 'fuel' isn't restored quickly, that part of the heart turns into useless scar tissue and never pumps again.",
        findings: "The patient will often have **Crushing Chest Pain** or 'Pressure' (Levine's Sign). **Why the symptoms happen:** 1) **Radiation**: The nerves for the heart and the left arm/jaw are close together in the spinal cord, so the brain gets confused and 'feels' pain in the arm or jaw. 2) **Diaphoresis** (Sweating): The body enters a 'Massive Stress' mode, triggering the fight-or-flight system. 3) **Nausea**: The heart sits right above the diaphragm; the 'suffocating' heart irritates the stomach nerves. 4) **Pale/Cool/Clammy Skin**: The heart is failing as a pump, so the body pulls blood away from the skin to save the brain.",
        treat: "1. **Aspirin (324mg)**: This makes the blood 'slippery' so the clot doesn't get bigger. 2. **Nitroglycerin**: This 'widens' the pipes to try and get blood around the clog (Check BP first!). 3. **High-Flow O2**: Only if SpO2 is < 94%. 4. **Rapid Transport**: They need a 'Cath Lab' to physically snake a wire into the pipe and pop the clot."
    },

    {
        id: 2,
        name: "Congestive Heart Failure (CHF)",
        info: "This is a **Pump Failure**. The 'Engine' has become too weak or stiff to push blood forward. **Why it happens:** Usually caused by years of high blood pressure or a previous heart attack. Think of a **Backed-up Sink**. 1) **Left-Sided Failure**: The left pump (to the body) fails, so blood backs up into the 'pipes' of the lungs. The pressure gets so high that the liquid part of the blood (plasma) leaks out into the **Alveoli** (Leaves). 2) **Right-Sided Failure**: The right pump (to the lungs) fails, so blood backs up into the 'pipes' of the body (legs and neck).",
        findings: "1) **Rales/Crackles**: You hear 'popping' in the lungs because the air is bubbling through the leaked plasma in the **Alveoli**. 2) **Orthopnea**: The patient cannot breathe while lying flat because the fluid 'floods' the whole lung; they must sit up to keep the fluid at the bottom. 3) **JVD** (Jugular Venous Distention): The neck veins bulge because the blood is 'backed up' in the plumbing. 4) **Pedal Edema**: The ankles swell as gravity pulls the 'backed-up' fluid into the feet. 5) **Hypertension**: The body tries to compensate for the weak pump by squeezing the pipes tighter.",
        treat: "1. **High-Fowler's**: Sit them bolt upright. 2. **CPAP**: This uses air pressure to physically 'push' the leaked fluid out of the **Alveoli** and back into the blood vessels. 3. **Nitroglycerin**: Relaxes the pipes so the heart doesn't have to push as hard against the pressure."
    },

    {
        id: 3,
        name: "Angina Pectoris",
        info: "Angina is **'Heart Cramping.'** **Why it happens:** The fuel lines (**Coronary Arteries**) are narrow but not 100% blocked. At rest, the 'Engine' gets enough fuel. But when the patient exercises (stresses the engine), the heart demands more fuel than the narrow pipe can provide. **The Result:** The heart muscle gets 'hungry' for oxygen and cramps. Once the patient rests and the heart's 'RPMs' slow down, the demand drops, the cramp vanishes, and the pain goes away. This is a 'Warning Shot' that a 100% blockage is coming.",
        findings: "The pain feels exactly like a Heart Attack (Pressure/Crushing) but it is **Provoked by Exertion** and **Relieved by Rest** or Nitroglycerin. If the pain lasts longer than 15 minutes or happens while resting, it has likely turned into a real Myocardial Infarction.",
        treat: "1. **Rest**: Stop the heart's demand for oxygen immediately. 2. **Nitroglycerin**: Widens the narrow pipes to allow more fuel through. 3. **Oxygen**: If the patient is struggling. 4. **EKG**: Always treat as a Heart Attack until a hospital proves otherwise."
    },
    {
        id: 4,
        name: "Aortic Dissection",
        info: "The **Aorta** is the 'Super-Highway' pipe leaving the heart. It has three layers of tissue in its wall. **Why it happens:** High blood pressure causes a tiny tear in the inner layer. Blood at high pressure gets forced *into* the wall of the pipe, peeling the layers apart like an onion. **The Result:** This creates a 'False Tunnel' for blood. As the 'peeling' continues, it can rip through the whole pipe (causing fatal internal bleeding) or block blood flow to the brain/arms.",
        findings: "The patient will describe a **Sudden, Tearing, or Ripping** sensation. Unlike an MI which builds up, this is '10/10' pain instantly. The pain often travels to the **Back, between the shoulder blades**. **Crucial Finding:** A significant **Blood Pressure Difference** between the right and left arms (because the 'peeling' is blocking one arm's pipe but not the other).",
        treat: "1. **Gentle Transport**: Any bump or spike in BP can finish the tear. 2. **Oxygen**. 3. **NO ASPIRIN**: Aspirin stops clotting, and we don't want to thin the blood during an active tear/bleed. 4. **Rapid Transport** to a trauma/surgical center."
    },
    
    {
        id: 5,
        name: "Cardiac Tamponade",
        info: "The heart sits in a tough, leathery 'Bag' called the **Pericardium**. **Why it happens:** Usually due to trauma (like a stab wound), blood leaks into this bag. Because the bag is 'tough' and cannot stretch, the blood starts to squeeze the heart from the outside. **The Result:** The heart is being 'strangled.' It cannot expand to let blood in. If the heart can't fill up with blood, it has nothing to pump out to the body. This is a mechanical 'Squeeze' failure.",
        findings: "You will see **Beck's Triad**: 1) **Low Blood Pressure (Hypotension)** because the pump can't fill. 2) **JVD** (Bulging neck veins) because the blood is stuck outside the heart and can't get in. 3) **Muffled Heart Sounds**: It sounds like the heart is beating 'underwater' because you are listening through a bag of blood. 4) **Narrowing Pulse Pressure**: The top (Systolic) and bottom (Diastolic) BP numbers get closer together (e.g., 100/90).",
        treat: "1. **Load and Go**: This is a surgical emergency. 2. **High-Flow O2**. 3. **ALS Intercept**: A paramedic or doctor must stick a needle into the bag to drain the blood (Pericardiocentesis)."
    },
    
    {
        id: 6,
        name: "Pulmonary Edema",
        info: "This is a **'Flash Flood'** of the lungs. **Why it happens:** Usually, the left side of the heart fails suddenly (like during a massive MI). The blood has nowhere to go, so it backs up into the tiny pipes around the **Alveoli** (Leaves) with massive force. **The Result:** The pressure is so high it literally 'blows out' the pipe walls, and blood plasma floods the **Alveoli**. The patient is drowning in their own 'blood-water.'",
        findings: "You will hear **Loud Bubbling/Crackles** (Rales) that can be heard even without a stethoscope. The patient will be gasping and may cough up **Pink, Frothy Sputum** (this is the plasma mixed with air). Their skin will be **Cyanotic** (Blue) and they will be in extreme 'Air Hunger.' BP is usually extremely high as the body panics.",
        treat: "1. **CPAP is #1**: The pressure acts like a 'dam' to push the water out of the air sacs and back into the pipes. 2. **Sit upright** with legs dangling. 3. **Nitroglycerin** to 'open the floodgates' in the rest of the body to take the pressure off the lungs."
    },
    {
        id: 7,
        name: "Pulmonary Embolism (PE)",
        info: "This is a **'Clogged Water Line'** to the lungs. **Why it happens:** A blood clot (usually from a leg vein) breaks off and travels through the heart. It gets shot into the **Pulmonary Artery** (the pipe that takes blood to the lungs to get O2) and gets stuck. **The Result:** The 'Tree' (lungs) is full of air, but there is no 'Water' (blood) flowing past the 'Leaves' (**Alveoli**) to pick up the oxygen. The blood 'delivery truck' is blocked at the gate.",
        findings: "The classic find is **Sudden Shortness of Breath with Clear Lung Sounds**. The lungs sound perfect because the air side is fine, but the patient is dying because the blood side is blocked. You will see **Tachycardia** and **Hypoxia** (Low SpO2) that does not improve with O2. Look for **Hemoptysis** (coughing up blood) and sharp chest pain.",
        treat: "1. **High-Flow O2**: Try to force oxygen into whatever tiny amount of blood is slipping past the clot. 2. **Rapid Transport**. 3. **Keep them very still**: If they move, they might break another clot loose from their leg."
    }
];

export const AbdominalData = [
    {
        id: 1,
        name: "AAA (Abdominal Aortic Aneurysm)",
        info: "The **Aorta** is the body's 'Main Power Line'—the thickest, highest-pressure pipe in the plumbing system. **Why it happens:** Due to high blood pressure or age, a spot in the pipe wall becomes weak and thin. It starts to bulge out like a worn-out bubble on a tire. **The Result:** This 'balloon' can leak or burst. Because it is the largest pipe in the body, the patient can bleed out internally in minutes. It is a 'silent killer' because it often has no symptoms until the moment the pipe wall begins to peel apart.",
        findings: "You may see a **Pulsating Mass** near the belly button—the bulge is actually 'jumping' with every heartbeat. The patient will complain of a sudden, **Tearing or Ripping** pain that goes straight through to the **Back or Flank**. Look for signs of **Shock** (Pale, cool skin and a crashing BP) because the blood is leaving the pipes and filling the abdominal cavity.",
        treat: "1. **Extremely Gentle Transport**: Do NOT press hard on the belly; you could pop the balloon. 2. **Keep Calm**: Stress raises BP, which puts more pressure on the weak spot. 3. **Rapid Transport**: This patient needs a vascular surgeon immediately."
    },
    
    {
        id: 2,
        name: "Appendicitis",
        info: "The **Appendix** is a tiny, 'Dead-End Pipe' attached to the start of the large intestine. **Why it happens:** A small piece of 'sewage' (stool) or food gets stuck in the opening, sealing it off. Bacteria get trapped inside and multiply, causing the pipe to swell with pus. **The Result:** If the pipe isn't removed, the pressure builds until it 'explodes,' spraying infected sewage all over the inside of the 'clean' abdominal cavity (**Peritonitis**).",
        findings: "The pain typically starts as a dull ache around the **Umbilicus** (Belly Button) then migrates to the **RLQ (Right Lower Quadrant)**. Look for **Rebound Tenderness**: it hurts more when you *let go* of the belly than when you press down. The patient will often have a fever and will be 'guarding' (tensing their abs) to protect the area. They may have 'Pain on Percussion'—even a small bump to the ambulance makes them scream.",
        treat: "1. **NPO (Nothing by Mouth)**: They will need surgery, and an empty stomach is required for anesthesia. 2. **Position of Comfort**: Usually lying on their side with knees tucked up (Fetal Position) to relax the abdominal wall."
    },
    
    {
        id: 3,
        name: "Pancreatitis",
        info: "The **Pancreas** is a 'Chemical Factory' that produces powerful acids (enzymes) to digest food. **Why it happens:** Usually due to alcohol abuse or a gallstone blocking the factory's exit, these 'acids' get trapped inside the organ. **The Result:** The enzymes start to **digest the organ itself**. It is literally 'eating itself' from the inside out, causing massive inflammation and internal bleeding behind the stomach.",
        findings: "Severe pain in the **LUQ (Left Upper Quadrant)** or middle of the belly that radiates straight to the **Back**. **Why it happens:** The pancreas sits near the spine. The pain is often accompanied by **Intense Vomiting**. In severe cases, you may see bruising around the belly button (**Cullen’s Sign**) or on the flanks (**Grey Turner's Sign**), which means the 'factory' is bleeding out.",
        treat: "1. **O2 and Suction**: Be ready for vomiting. 2. **Positioning**: They often find relief leaning forward or curled in a ball. 3. **Shock Management**: This condition causes massive fluid loss into the tissues."
    },
    {
        id: 4,
        name: "Hernia",
        info: "Think of the abdominal wall as a **Tire** and the intestines as the **Inner Tube**. **Why it happens:** A hole or weak spot develops in the 'tire' (muscle wall). **The Result:** A piece of 'inner tube' (intestine) pokes through the hole, creating a visible lump. This is an emergency if the hole 'strangles' the tube (**Strangulated Hernia**), cutting off its blood supply and causing the 'inner tube' to rot and die inside the body.",
        findings: "A **Visible Lump** in the groin or near the belly button. **Red Flag Finding:** If the lump is hard, extremely painful, and the skin over it is red or blue, it is 'Strangulated.' The patient will have severe nausea and a 'fecal' smell to their breath if the blockage is total.",
        treat: "1. **Do NOT push**: Never try to shove the lump back into the hole; you can rupture the intestine. 2. **Supportive Care**: Transport in a position of comfort. 3. **Monitor for Sepsis** (High heart rate/Low BP)."
    },
    
    {
        id: 5,
        name: "Diverticulitis",
        info: "Think of the **Large Intestine** as a high-pressure sewer pipe. **Why it happens:** Over years of straining, the pressure causes the inner lining to poke through weak spots in the muscular wall, creating tiny 'pouches' (**Diverticulosis**). **The Result:** When 'sewage' (waste) gets trapped in one of these pouches, it rots and causes an infection (**Diverticulitis**). It’s like having 'mini-appendicitis' pockets all along your pipe.",
        findings: "Pain is almost always in the **LLQ (Left Lower Quadrant)** because that is where the pressure in the 'sewer pipe' is highest. The patient will feel **Bloated**, have a fever, and may report **Constipation** followed by **Diarrhea**. If a pouch 'pops,' the belly will become 'Board-Like' and rigid (Peritonitis).",
        treat: "1. **Position of Comfort**: Knees bent to reduce belly tension. 2. **Monitor for Sepsis**: Check for high heart rate and confusion. 3. **NPO**: No food or drink in case of surgery."
    },
    
    {
        id: 6,
        name: "Renal Colic (Kidney Stones)",
        info: "The **Ureters** are the 'Tiny Drain Pipes' (as thin as a coffee stirrer) that carry urine to the bladder. **Why it happens:** Minerals crystalize into a jagged, 'Rock-like' stone. **The Result:** The stone gets stuck in the tiny pipe. As the pipe tries to squeeze the jagged rock through, it causes extreme 'spasm' pain. It’s like trying to push a piece of gravel through a straw using only your hand to squeeze it.",
        findings: "The patient will be **'Writhing in Pain'**—moving constantly because they cannot find a position that helps. The pain starts in the **Flank** (the side of the back) and **Radiates** down to the groin. You will see **Hematuria** (blood in the urine) because the jagged stone is 'scratching' the inside of the pipe.",
        treat: "1. **Reassurance**: The pain is 10/10, but the patient isn't usually in immediate danger. 2. **ALS Intercept**: These patients need heavy-duty pain meds (Morphine) that only Paramedics carry. 3. **Watch for Nausea**: The pain is so intense it often causes vomiting."
    },
    {
        id: 7,
        name: "Cholecystitis (Gallstones)",
        info: "The **Gallbladder** is a 'Holding Tank' for bile (a grease-cutting chemical). **Why it happens:** Stones form in the tank and block the exit pipe. **The Result:** When the patient eats a **Fatty/Greasy Meal**, the tank tries to squeeze the bile out, but it hits the 'clog' and becomes inflamed. It is a 'Grease-Triggered' emergency.",
        findings: "Pain in the **RUQ (Right Upper Quadrant)**. **Why the symptoms happen:** The inflammation irritates the diaphragm, which shares a nerve with the shoulder, causing **Referred Pain** to the **Right Shoulder Blade**. Look for **Murphy’s Sign**: the patient 'catches their breath' and stops inhaling when you press on their RUQ.",
        treat: "1. **Ask about Diet**: Did they just eat fried food or pizza? 2. **The Five Fs**: Most common in patients who are Female, Fat, Forty, Fertile, or Fair-skinned. 3. **Position of Comfort**."
    },
    
    {
        id: 8,
        name: "UTI & Pyelonephritis",
        info: "This is an infection of the **Water Filtration System**. 1) **UTI**: The 'Holding Tank' (**Bladder**) is infected. 2) **Pyelonephritis**: The 'Filters' (**Kidneys**) are infected. **Why it happens:** Bacteria travel up the drain pipe and multiply. **The Result:** If it reaches the kidneys, the infection can enter the bloodstream and cause the whole body to crash (**Sepsis**).",
        findings: "The patient will have **Dysuria** (burning when peeing) and **Frequency**. If it’s a Kidney infection, they will have a **High Fever** and **CVA Tenderness** (intense pain when you 'thump' the back over the kidneys). In the elderly, the first sign is often **Sudden Confusion** (Altered Mental Status).",
        treat: "1. **Watch for Sepsis**: If the heart rate is high and BP is low, the infection is systemic. 2. **Transport** for hospital-grade antibiotics."
    }
];

export const AlteredData = [
    {
        id: 1,
        name: "Hypoglycemia (Low Blood Sugar)",
        info: "The brain is a **High-Performance Computer** that can only run on one specific type of 'Electricity': **Glucose** (Sugar). **Why it happens:** If sugar levels drop too low (usually from too much insulin or skipping a meal), the 'Power Supply' vanishes. **The Result:** The brain begins to 'Brown Out' and shut down. Because the brain thinks it is dying of starvation, it triggers a massive **Fight or Flight** response (Adrenaline) to try and find fuel. This happens very FAST (minutes). Unlike other conditions, the brain is physically starving to death.",
        findings: "The patient will be **Diaphoretic** (Sweaty), **Shaky**, and **Pale**. **Why the symptoms happen:** The Adrenaline surge causes the sweating and fast heart rate. Because the 'CPU' (Brain) is starving, they will be **Aggressive**, confused, or appear 'drunk.' If the power isn't restored, they will have a **Seizure** or fall into a **Coma**.",
        treat: "1. **Check BGL (Blood Glucose Level)**: Anything under 60 mg/dL is an emergency. 2. **Oral Glucose**: If they can swallow and follow commands, give them sugar gel. 3. **ALS Intercept**: If they are unconscious, they need IV Dextrose (sugar) immediately. 4. **Waking Up**: Once they get sugar, they usually 'reboot' and become normal almost instantly."
    },
    
    {
        id: 2,
        name: "Hyperglycemia (High Blood Sugar / DKA)",
        info: "This is a **'Slow Burn'** problem. **Why it happens:** The blood is full of 'Electricity' (Sugar), but the body lacks **Insulin** (the 'Key'). **The Result:** Without the key to unlock the doors to the cells, the sugar just sits in the pipes. The blood becomes thick, syrupy, and acidic. The brain is literally 'sitting in a pool of food' but can't eat any of it, so it begins to starve while the rest of the body becomes toxic. To get rid of the 'syrup,' the body tries to wash the sugar out by peeing constantly.",
        findings: "1) **Kussmaul Respirations**: Very deep, fast gasping. **Why it happens:** The blood has become too acidic, and the brain is trying to 'blow off' the acid through the lungs. 2) **Fruity Breath**: The body starts burning fat for fuel, which creates 'waste chemicals' called **Ketones** that smell like rotten fruit. 3) **Dehydration**: Dry skin and 'Sunken Eyes' because they have peed out all their water.",
        treat: "1. **Oxygen**: Their body is working overtime to balance its chemistry. 2. **Fluid Replacement**: They are dangerously dehydrated. 3. **Rapid Transport**: They need a hospital to balance their insulin and fluids slowly over 24 hours."
    },
    
    {
        id: 3,
        name: "CVA (Stroke / Brain Attack)",
        info: "A Stroke is a **'Heart Attack in the Brain.'** **Why it happens:** 1) **Ischemic**: A 'Clot' blocks a 'Pipe' (80% of cases). 2) **Hemorrhagic**: A 'Pipe' bursts and bleeds into the brain. **The Result:** In either case, the wiring is cut. Part of the 'CPU' (Brain) loses its power supply and stops working. Because the left side of the brain controls the right side of the body (and vice versa), the 'Short Circuit' shows up on only one side of the patient.",
        findings: "Use the **F.A.S.T.** scale. 1) **Facial Droop**: One side of the 'Wiring' to the face has failed. 2) **Arm Drift**: One side of the body is 'unplugged' and weak. 3) **Speech**: Slurred or 'Word Salad' (they know what they want to say, but the 'Keyboard' is broken). **Key Finding:** Note the **'Last Known Normal'**—the exact minute the symptoms started. **Time is Brain** (2 million cells die per minute).",
        treat: "1. **Oxygen**: Keep the remaining brain cells alive. 2. **Positioning**: Keep the head slightly elevated (30 degrees) to reduce pressure. 3. **NO ASPIRIN**: If the stroke is a 'Bleed,' Aspirin will make them bleed to death. 4. **Stroke Center**: Rapid transport is mandatory."
    },
    
    {
        id: 4,
        name: "TIA (Transient Ischemic Attack)",
        info: "This is a **'Mini-Stroke'** or a **'Temporary Short Circuit.'** **Why it happens:** A small clot blocks a brain pipe, but the body's natural 'clot-busters' break it apart quickly. **The Result:** The symptoms are exactly like a Stroke, but they disappear within minutes. This is a **'Warning Shot'**—the wiring is failing, and a total, permanent system crash (Major Stroke) is likely coming in the next 24 hours.",
        findings: "The patient will tell you, 'My face was drooping and I couldn't move my arm 10 minutes ago, but I feel 100% fine now.' **Do not be fooled.** Their risk of a massive stroke is extremely high.",
        treat: "1. Treat exactly like a Stroke. 2. **Convince the patient** to go to the hospital. Many refuse because they 'feel fine,' but they are in extreme danger."
    },
    {
        id: 5,
        name: "Meningitis",
        info: "Meningitis is an infection of the **'Protective Case'** (Meninges) around the brain and spinal cord. **Why it happens:** A bacteria or virus enters the 'Case' and causes it to swell. **The Result:** The swelling puts massive pressure on the brain. This is highly contagious and can kill a healthy person in less than 24 hours. The brain is essentially being 'smothered' by its own protective wrapper.",
        findings: "The hallmark is a **High Fever**, an intense 'Thunderclap' **Headache**, and **Nuchal Rigidity** (a stiff neck—it hurts to put their chin to their chest). **Red Flag:** A purple/red 'pinpoint' rash (**Petechiae**) means the infection has hit the blood and they are dying.",
        treat: "1. **BSI (Body Substance Isolation)**: This is the most important step. Put a surgical mask on yourself and the patient immediately. 2. **Photosensitivity**: Dim the lights; the brain is so inflamed that light causes pain. 3. **Support the Airway** if they become unconscious."
    },
    
    {
        id: 6,
        name: "Seizures (Post-Ictal State)",
        info: "A seizure is an **'Electrical Storm'** where all the 'Wires' in the brain fire at once. The **Post-Ictal State** is the 'Reboot' phase. **Why it happens:** After the storm, the brain's chemicals are totally drained. **The Result:** The 'Operating System' is crashing and restarting. The patient is not 'awake' yet; they are in a deep sleep or a state of total confusion as the brain recharges its batteries.",
        findings: "The patient will be **Confused, Sleepy, or Combative**. They may have **Incontinence** (they peed themselves) or a **Bitten Tongue**. **Why the symptoms happen:** During the 'Storm,' the brain lost control of all muscles. In the Post-Ictal phase, they may not know their name or where they are. This phase usually lasts 10 to 30 minutes.",
        treat: "1. **Airway**: Turn them on their side (**Recovery Position**) so they don't choke on secretions. 2. **Oxygen**: The brain used up its oxygen supply during the 'Storm.' 3. **Protect the Head**: Do not restrain them, just keep them from hitting objects. 4. **Check BGL**: Low blood sugar is a common cause of seizures."
    }
];

export const ObgynData = [
    {
        id: 1,
        name: "Normal Childbirth (Imminent Delivery)",
        info: "Childbirth is a **Natural Pressure Process**. **Why it happens:** The 'Tank' (**Uterus**) is a massive muscle. When it's time, it begins to contract to push the baby toward the 'Exit' (**Cervix**). **The Result:** For an EMT, 'Normal' means a **Cephalic** (Head-First) delivery. You aren't 'delivering' the baby as much as you are 'catching' it. The baby must rotate its shoulders to fit through the pelvis. Once the head is out, the 'Oxygen Straw' (**Cord**) is still the only thing keeping the baby alive until they take their first breath.",
        findings: "Look for **Crowning** (seeing the top of the head). If you see crowning, the baby is coming NOW. Contractions will be less than 2 minutes apart and very intense. The mother will have a 'fecal urge' (feeling like she has to use the bathroom) because the baby's head is pressing against the rectum.",
        treat: "1. **Support the Head**: Apply gentle pressure to prevent 'explosive' delivery. 2. **Check for Nuchal Cord**: Feel around the neck for the 'Oxygen Straw' (Cord); if it's there, slip it over the head. 3. **Dry and Warm**: Babies lose heat instantly; drying them 'shocks' them into taking their first breath. 4. **Level of Vagina**: Keep the baby level with the exit until the cord is clamped so blood doesn't drain out of the baby."
    },

    {
        id: 2,
        name: "Preeclampsia & Eclampsia",
        info: "This is a **'System Overload'** caused by high pressure. **Why it happens:** For reasons not fully understood, the mother's body begins to treat the pregnancy like a 'foreign intruder,' causing her blood pressure to skyrocket. **The Result:** **Preeclampsia** is the warning phase (high BP). **Eclampsia** is the 'System Crash'—the high pressure causes the brain to 'short circuit,' leading to seizures. This cuts off oxygen to both the 'CPU' (Mom's brain) and the 'Battery' (Baby's placenta).",
        findings: "The patient will have **Hypertension** (BP > 140/90), severe **Headaches**, and 'seeing spots' (visual disturbances). You will see massive **Edema** (swelling) in the hands and face. If they start **Seizing**, it is now Eclampsia.",
        treat: "1. **Left Lateral Position**: Lay her on her left side to keep the heavy 'Tank' off her main blood vessels. 2. **Dim the Lights**: Light and noise are 'triggers' that can spark a seizure. 3. **High-Flow O2**: Seizures use up all the body's oxygen."
    },
    {
        id: 3,
        name: "Placenta Previa",
        info: "This is a **'Blocked Exit'** problem. **Why it happens:** The **Placenta** (the Oxygen Battery) accidentally attaches to the bottom of the tank, covering the 'Exit' (**Cervix**). **The Result:** As the cervix begins to thin and open (dilate) for birth, it tears the 'Battery' away. Because the battery is full of blood, the mother begins to bleed out the exit. However, because the uterus isn't 'tearing,' there is no pain.",
        findings: "The hallmark is **Painless, Bright Red Bleeding** in the 3rd trimester. The belly will feel soft and normal, but the mother is losing her 'fuel' (blood).",
        treat: "1. **NEVER do a vaginal exam**: Sticking a finger in could punch a hole through the battery and kill the baby instantly. 2. **Treat for Shock**: Oxygen and blankets. 3. **Rapid Transport**."
    },
    
    {
        id: 4,
        name: "Abruptio Placentae",
        info: "This is a **'Tearing Emergency.'** **Why it happens:** Usually due to trauma (car crash) or high blood pressure, the **Placenta** (Oxygen Battery) physically rips away from the wall of the tank. **The Result:** This is a double disaster. 1) The 'Battery' is no longer charging the baby with oxygen. 2) The mother is bleeding internally behind the placenta. This creates massive pressure inside the tank.",
        findings: "Unlike Previa, this is **Extremely Painful**. The abdomen will be **'Board-Like'** (hard and rigid) because of the blood trapped inside. The bleeding might be dark or even 'hidden' (trapped inside the tank).",
        treat: "1. **Rapid Transport**: The baby has zero oxygen supply once the battery is fully detached. 2. **High-Flow O2**. 3. **Monitor BP**: Mom can go into shock very quickly."
    },
    
    {
        id: 5,
        name: "Nuchal Cord & Prolapsed Cord",
        info: "This is a **'Pinched Oxygen Straw'** emergency. 1) **Nuchal Cord**: The 'Straw' (Cord) is wrapped around the neck. 2) **Prolapsed Cord**: The 'Straw' falls out of the exit *before* the baby. **The Result:** As the baby moves down, its own heavy head presses the 'Straw' against the mother's bone, cutting off its own oxygen supply. The baby is 'stepping on its own air hose.'",
        findings: "In a Prolapsed Cord, you will physically see the umbilical cord hanging out of the vagina before the baby is delivered.",
        treat: "1. **Push the Head**: You must insert two gloved fingers and **physically push the baby's head UP** and away from the cord. 2. **Do Not Let Go**: Keep your hand there until a surgeon takes over in the OR. 3. **Knee-Chest Position**: Put mom's 'butt in the air' so gravity pulls the baby away from the 'Straw'."
    },
    
    {
        id: 6,
        name: "GBS (Group B Strep)",
        info: "GBS is a **'Toxic Trip.'** **Why it happens:** Many women have this bacteria naturally in the birth canal. It doesn't hurt adults. **The Result:** As the baby makes the 'trip' through the canal, they can 'swallow' or inhale the bacteria. Because the baby has no immune system yet, it can cause a 'System-Wide Infection' (**Sepsis**) or an infection of the 'CPU Wrapper' (**Meningitis**).",
        findings: "Ask the mother if she is **'GBS Positive.'** If she is, watch the newborn for a high/low temperature, difficulty breathing (grunting), or extreme sleepiness.",
        treat: "1. **Notify the Hospital**: They need to give the baby antibiotics immediately. 2. **Keep the Baby Warm**: Infection makes it hard for babies to stay warm."
    },
    {
        id: 7,
        name: "Gestational Diabetes & Shoulder Dystocia",
        info: "This is a **'Size and Fuel'** problem. **Why it happens:** The mother’s high sugar 'over-fuels' the baby, making it grow much larger than normal (**Macrosomia**). **The Result:** During birth, the head comes out, but the 'Shoulders' are too wide and get **Stuck** behind the mother's pubic bone. This is a 'Plugged Exit.' The baby's head is out, but the chest can't expand, and the cord is being squeezed.",
        findings: "The **'Turtle Sign'**: The baby's head delivers, but then it 'sucks' back into the vagina because the shoulders are snagged on the bone.",
        treat: "1. **McRoberts Maneuver**: Pull the mother's knees all the way back to her shoulders. This tilts the pelvis to 'un-snag' the shoulder. 2. **Suprapubic Pressure**: Press down hard right above the mother's pubic bone to try and 'pop' the shoulder under the bone. 3. **BGL Check**: Check the mom's sugar; she may be hypo/hyperglycemic."
    },
    
];

export const BurnsData = [
    {
        id: 1,
        name: "Superficial (1st Degree)",
        info: "This is damage to the **Siding** (Epidermis) only. **Why it happens:** Short exposure to heat or UV rays (sunburn). **The Result:** The 'wall' is still intact, but it’s 'sun-scorched.' It turns red because the body sends extra blood to the area to start repairs. There is no 'leakage' (blisters) because the deeper layers are fine.",
        findings: "Red, dry skin that is painful to the touch. No blisters. It turns white (blanches) when you press on it.",
        treat: "1. **Cooling**: Run cool water over it to stop the 'residual heat' from cooking deeper layers. 2. **Hydration**: Even a 1st-degree burn causes the body to lose water through the skin."
    },
    
    {
        id: 2,
        name: "Partial-Thickness (2nd Degree)",
        info: "The heat has burned through the 'Siding' and reached the **Insulation** (Dermis). **Why it happens:** Flash flames, hot liquids, or chemicals. **The Result:** This is the most painful burn because the 'electrical wires' (nerve endings) are exposed but not destroyed. The 'pipes' in the skin leak fluid, creating bubbles.",
        findings: "The hallmark is **Blisters** and 'weeping' (wet/shiny) skin. The pain is intense. **Severity Note:** If these cover more than 15% of an adult or 10% of a child, it is a **Major Burn**.",
        treat: "1. **Stop the Burn**: Cool with water/saline for 1-2 minutes. 2. **Protect the Pipes**: Do NOT pop blisters; they are the 'sterile bandage' the body made itself. 3. **Dry Dressings**: Cover loosely with dry sterile gauze."
    },
    {
        id: 3,
        name: "Full-Thickness (3rd Degree)",
        info: "The 'Wall' is completely destroyed down to the **Frame** (Fat, Muscle, or Bone). **Why it happens:** Prolonged flame contact, hot oil, or high-voltage electricity. **The Result:** The 'wires' (nerves) are completely incinerated, which is why the center is **Painless**. The skin can no longer hold in heat or water.",
        findings: "Skin looks **Charred (Black)**, waxy, or leathery and white. The skin may feel 'hard' to the touch. **Severity Note:** Any 3rd-degree burn to the face, hands, feet, or groin is an automatic **Critical Burn**.",
        treat: "1. **Dry Sterile Dressings**: Do not use water or creams on large 3rd-degree burns (it causes hypothermia). 2. **Keep Warm**: Without 'siding,' the patient’s body heat leaks out instantly. 3. **Rapid Transport**."
    },
    {
        id: 4,
        name: "Inhalation Burns",
        info: "This is a **'Main Air Duct'** emergency. **Why it happens:** The patient breathed in super-heated gases or smoke. **The Result:** The 'ventilation pipes' (**Trachea and Bronchi**) get 'steam-burned.' Just like a burn on the arm swells up, the throat swells up. But because the throat is a small pipe, it can close 100%.",
        findings: "Look for **Soot** around the nose/mouth, **Singed Nasal Hairs**, or a **Hoarse/Raspy Voice**. If you hear **Stridor** (high-pitched whistling in the neck), the pipe is 90% closed.",
        treat: "1. **High-Flow Oxygen**. 2. **ALS Intercept**: They need to be 'Intubated' (a tube placed in the windpipe) before the swelling closes the door forever."
    },
    
    {
        id: 5,
        name: "Chemical Burns",
        info: "This is **'Corrosive Damage.'** **Why it happens:** Strong acids or bases (alkalis) eat through the 'siding.' **The Result:** The chemical will keep 'eating' the building until it is physically removed or neutralized by water flushing.",
        findings: "Severe pain and visible 'eating away' of the skin. Note: **Alkalis** (bases like drain cleaner) are more dangerous than acids because they turn body fat into 'soap,' allowing the chemical to sink deeper.",
        treat: "1. **Brush then Flush**: If it's a dry powder, brush it off first. If you add water to a dry powder, it can create a heat reaction. 2. **20-Minute Flush**: Wash with massive amounts of water. 3. **Remove Clothing**: The clothes are 'soaked' in the fuel; get them off."
    },
    {
        id: 6,
        name: "Electrical Burns",
        info: "The body acts as a **Copper Wire**. **Why it happens:** Electricity enters the body and travels toward the ground. **The Result:** The biggest damage is hidden inside. As the electricity moves, it 'fries' the **Engine** (Heart) and the **Internal Pipes**.",
        findings: "Look for an **Entrance Wound** (usually a hand) and an **Exit Wound** (usually the feet). The patient may have **Fractures** because the electricity made their muscles squeeze so hard they snapped their own bones. The most deadly finding is a **Dysrhythmia** (irregular heart rate).",
        treat: "1. **Safety First**: Ensure the power is OFF. 2. **Treat the Heart**: Monitor for cardiac arrest. 3. **Dry Dressings** for the exit/entrance holes."
    }
];

export const TraumaData = [
    {
        id: 1,
        name: "Pneumothorax (Collapsed Lung)",
        info: "The chest is a **Vacuum-Sealed Room**. The lungs are like balloons that only stay inflated because the vacuum 'sucks' them toward the walls. **Why it happens:** A rib pokes the balloon (lung) or a hole opens in the wall (chest). **The Result:** Air leaks into the space *between* the lung and the wall. The vacuum is broken. Without the 'suction,' the lung's natural elasticity causes it to shrivel up into a useless raisin. If the pressure gets too high, it becomes a **Tension Pneumothorax**, which physically squishes the heart and the 'Main Water Line' (Vena Cava), stopping blood flow entirely.",
        findings: "You will hear **Absent or Diminished Lung Sounds** on the injured side. Look for **JVD** and **Tracheal Deviation** (the windpipe shifting away from the bad side) in late stages—this means the 'room' is so full of air it's pushing the building's infrastructure over.",
        treat: "1. **High-Flow Oxygen**: Saturate the one good lung. 2. **Rapid Transport**: Only a hospital 'Chest Tube' can suck the air out to restart the vacuum."
    },
    
    {
        id: 2,
        name: "Sucking Chest Wound",
        info: "This is a **'Breach in the Room Wall.'** **Why it happens:** A penetrating injury (knife/bullet) creates a hole in the chest. **The Result:** Because the body is a vacuum, air follows the path of least resistance. It gets sucked through the hole instead of the windpipe. You are 'breathing' into the chest cavity, not the lungs.",
        findings: "You will hear a **'Hissing' or 'Sucking' sound** with every breath. You may see blood 'bubbling' around the wound (Sucking Chest Wound).",
        treat: "1. **Gloved Hand**: Immediately seal the hole. 2. **Occlusive Dressing**: Use plastic or Vaseline gauze. 3. **Three-Sided Tape**: This creates a **One-Way Valve**. When the patient breathes out, air can escape the 'room,' but when they breathe in, the plastic sucks shut so no more air can enter."
    },
    
    {
        id: 3,
        name: "Flail Chest",
        info: "The **Rib Cage** is the 'Steel Frame' of the building. **Why it happens:** 3+ ribs are broken in 2+ places. **The Result:** A chunk of the frame is no longer attached to the building. It 'floats.' This breaks the mechanics of breathing.",
        findings: "The hallmark is **Paradoxical Motion**. **Why it happens:** When the patient breathes in (suction), the 'floating segment' gets sucked **IN** while the rest of the chest goes **OUT**. It looks like a see-saw. It is extremely painful and prevents the lungs from expanding fully.",
        treat: "1. **Oxygen**: Priority #1. 2. **Bulky Dressing**: Tape a thick pad over the segment to stabilize the 'frame.' 3. **CPAP**: This uses air pressure to 'push' the floating segment out from the inside, acting like an internal splint."
    },
    {
        id: 4,
        name: "Arterial Bleed (Major Bleeding)",
        info: "Arteries are **High-Pressure Hydraulic Pipes**. **Why it happens:** A deep cut severs a main line. **The Result:** Because the heart is a pump, blood 'spurts' out with every beat. A human can lose their entire 'Hydraulic Fluid' volume in less than 3 minutes. This is an **'X' Priority** (Exsanguination)—fix this before you even look at the airway.",
        findings: "Bright red, **Spurting blood**. The patient will quickly become pale and confused as the 'system pressure' drops.",
        treat: "1. **Direct Pressure**: Don't be gentle; lean on it. 2. **Tourniquet**: If on an arm/leg, 'Go High and Tight.' Crank it until the spurting stops. 3. **Wound Packing**: For 'junction' areas (groin/armpit) where a tourniquet won't fit, stuff the hole with gauze and keep pushing."
    },
    
    {
        id: 5,
        name: "Hypovolemic Shock",
        info: "This is a **'Leaky Tank'** failure. **Why it happens:** You have lost too much 'Hydraulic Fluid' (blood or plasma). **The Result:** There isn't enough fluid to fill the pipes. The 'Pump' (heart) panics and speeds up to try and maintain pressure, but eventually, the system crashes.",
        findings: "1) **Tachycardia**: Heart is racing to find fluid. 2) **Pale/Cool/Clammy**: The body shuts off the 'pipes' to the skin to save the 'CPU' (Brain). 3) **Narrowing Pulse Pressure**: The top and bottom BP numbers get closer together.",
        treat: "1. **STOP THE LEAK**: You can't fill a leaky tank. 2. **Keep Warm**: Cold blood cannot clot (the 'Lethal Triad'). 3. **Oxygen**. 4. **Flat Position**: Keep the blood in the brain."
    },
    {
        id: 6,
        name: "Amputation",
        info: "This is the **Total Loss of a Building Wing**. **Why it happens:** Traumatic machinery or blast injuries. **The Result:** The main danger is bleeding from the 'Stump.' The second goal is preserving the tissue for the 'Engineers' (Surgeons) to reattach.",
        findings: "Partial or complete removal of a limb. Massive bleeding is common but sometimes the arteries 'spasm' shut initially (don't trust it—it will bleed later).",
        treat: "1. **Tourniquet**: Apply to the stump immediately. 2. **Part Care**: Wrap the part in dry sterile gauze, put in a bag, and place the bag **ON** ice (never directly on ice, or you'll freeze the cells/kill the tissue)."
    },
    {
        id: 7,
        name: "Evisceration",
        info: "The **Abdominal Wall** is the 'Security Fence.' **Why it happens:** A deep rip in the belly. **The Result:** The 'Inner Tubes' (**Intestines**) spill out. These organs are 'Wet' organs; if they dry out, they die. Exposure to air also causes massive heat loss.",
        findings: "Intestines poking through a wound. Do not let the patient cough, as it will push more 'tubes' out.",
        treat: "1. **Do NOT push back in**: You will introduce infection and cause damage. 2. **Moist Sterile Dressing**: Use Saline. 3. **Occlusive Cover**: Cover the moist pad with plastic wrap to 'seal in' the moisture and heat."
    },
    
    {
        id: 8,
        name: "Drowning",
        info: "This is **'Fluid Contamination of the Air Duct.'** **Why it happens:** Water enters the lungs. **The Result:** Water destroys the 'Soap' (**Surfactant**) that keeps the 'Leaves' (**Alveoli**) open. Even if you get the water out, the leaves will collapse later (**Secondary Drowning**).",
        findings: "Persistent cough, 'wet' lung sounds (crackles), and foam at the mouth. Note: Cold water can slow the 'CPU' (Brain) down so much it survives without oxygen for longer (Hibernation).",
        treat: "1. **Ventilations**: Get air into the lungs immediately. 2. **C-Spine**: Assume a neck injury if they dove. 3. **Transport ALL**: They must be watched for 24 hours for lung failure."
    },
    {
        id: 9,
        name: "Cardiac Contusion",
        info: "This is a **'Bruised Engine.'** **Why it happens:** Blunt force slams the heart against the breastbone. **The Result:** The muscle becomes swollen and 'angry.' This irritates the 'Electrical Wiring,' leading to a sudden 'Short Circuit' (Cardiac Arrest).",
        findings: "Bruising over the sternum (**Seatbelt sign**). Irregular pulse. Chest pain that feels like a heart attack but started after a hit.",
        treat: "1. **Oxygen**. 2. **Cardiac Monitoring**: Watch that pulse like a hawk. 3. **Treat for Shock**."
    },
    {
        id: 10,
        name: "Simple Cut (Laceration)",
        info: "Damage to the **Outer Siding**. **Why it happens:** Low-energy sharp trauma. **The Result:** Usually involves 'Venous' blood (the low-pressure return pipes). Not a life threat, but the 'Building' is now open to 'Pests' (Infection).",
        findings: "Dark red blood that flows or oozes slowly. No spurting.",
        treat: "1. **Direct Pressure**. 2. **Bandage snugly**. 3. **Infection Control**: Ask about their last Tetanus shot."
    }
];