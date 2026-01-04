export const SuspectedDiagnosis = ({complaint, finding, chestPain,  painStay, betterWorse, breathing,  radiate, lung,  pulse, schoolPulse, preschoolPulse, toddlerPulse, infantPulse,
                            newbornPulse, respiratoryRate, schoolRespiratoryRate, preschoolRespiratoryRate, toddlerRespiratoryRate, infantRespiratoryRate, 
                            newbornRespiratoryRate, bloodPressure, schoolBloodPressure, preschoolBloodPressure, toddlerBloodPressure, infantBloodPressure, 
                            newbornBloodPressure, pulsusParadoxus, isPain, childBloodPressure, swelling, spo2,  skin,  onset, symptoms, history, age, sex, pain, quadrant, radiateBack, 
                            numWeek, numPregnancy, headPosition, birthsNatural, gbs, numBabies, strokeScale, bgl}) => {

    console.log({
    complaint, chestPain, breathing, lung,  pulse, schoolPulse, preschoolPulse, toddlerPulse, infantPulse,
                            newbornPulse, respiratoryRate, schoolRespiratoryRate, preschoolRespiratoryRate, toddlerRespiratoryRate, infantRespiratoryRate, 
                            newbornRespiratoryRate, bloodPressure, swelling, schoolBloodPressure, preschoolBloodPressure, toddlerBloodPressure, infantBloodPressure, 
                            newbornBloodPressure, pulsusParadoxus, bgl, strokeScale,isPain,
     spo2, skin, onset, finding, radiate, betterWorse, symptoms, history, painStay
    });


    let score = {
        cardiac_tamponade: 0,
        Myocardial_Infarction: 0,
        angina: 0,
        asthma: 0,
        anaphylaxis: 0,
        pulmonaryEdema: 0,
        pulmonaryEmbolism: 0,
        croup: 0,
        stroke: 0,
        copd: 0,
        rightSidedChf: 0,
        aaa: 0,
        appendicitis: 0,
        pancreatitis: 0,
        hernia: 0,
        diverticulitis: 0,
        diverticulosis: 0,
        renalColic: 0,
        meningitis: 0,
        cholecystitis: 0,
        utiPyelonephritis: 0,
        sepsis: 0,
        tensionPneumo: 0,
        hypoglycemia: 0,
        hyperglycemiaDkaHhs: 0,
        adrenalCrisis: 0,
        hyperventilationSyndrome: 0,
        bronchiolitis: 0,
        epiglottitis: 0,
        hemothorax: 0,
        pneumothorax: 0,
    };


    //cardiac tamponade
    if(complaint === "chest_pain") score.cardiac_tamponade += 5;
    if(chestPain === "sharp" || chestPain === "crushing") score.cardiac_tamponade += 1;
    if (breathing === "yes") score.cardiac_tamponade += 1;
    if (lung === "clear") score.cardiac_tamponade += 1;
    if (pulse === "high" || pulse == "normal") score.cardiac_tamponade += 1;
    if (bloodPressure === "low-in") score.cardiac_tamponade += 1;
    if (respiratoryRate === "normal" || respiratoryRate === "high") score.cardiac_tamponade += 1;
    if (pulsusParadoxus === "yes" || pulsusParadoxus === "no") score.cardiac_tamponade += 1;
    if (spo2 === "normal" || spo2 === "low") score.cardiac_tamponade += 1;
    if (skin === "pale" || skin === "clammy") score.cardiac_tamponade += 1; 
    if (onset === "sudden" || onset === "gradual") score.cardiac_tamponade += 1;
    if (finding === "jvd" || finding === "normal") score.cardiac_tamponade += 1;
    if (painStay === "no") score.cardiac_tamponade += 1;
    if (radiate === "neck" || radiate === "left_shoulder" || radiate === "up_back" || radiate === "jaw" || radiate === "no") score.cardiac_tamponade += 1;
    if (betterWorse === "lying_worse" || betterWorse === "no") score.cardiac_tamponade += 1;
    if (symptoms.includes("shortness_breath") || symptoms.includes("chest_tightness") || symptoms.includes("fatigue") || symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("weakness")) score.cardiac_tamponade += 1;
    if (history.includes("pericarditis") || history.includes("cancer") || history.includes("chest_trauma") || history.includes("post_cardiac_surgery") || history.includes("myocardial_infarction") || history.includes("chronic_kidney_disease") || history.includes("end_stage_renal_disease"))score.cardiac_tamponade += 1;


    // myocardial infarction
    if (complaint === "chest_pain") score.Myocardial_Infarction += 5;
    if (chestPain === "crushing") score.Myocardial_Infarction += 1;
    if (breathing === "yes" || breathing === "no") score.Myocardial_Infarction += 1;
    if (lung === "clear" || lung === "crackles" || lung === "") score.Myocardial_Infarction += 1;
    if (pulse === "high" || pulse === "normal") score.Myocardial_Infarction += 1;
    if (respiratoryRate === "normal" || respiratoryRate === "high") score.Myocardial_Infarction += 1; 
    if (bloodPressure === "normal" || bloodPressure === "normal1" || bloodPressure === "slight-high" || bloodPressure === "slight-high1" || bloodPressure === "slight-low" || bloodPressure === "low") score.Myocardial_Infarction += 1;
    if (pulsusParadoxus === "no") score.Myocardial_Infarction += 1;
    if (spo2 === "low" || spo2 === "normal") score.Myocardial_Infarction += 1;
    if (skin === "pale" || skin === "diaphoretic") score.Myocardial_Infarction += 1;
    if (onset === "sudden" || onset === "gradual" || finding === "normal") score.Myocardial_Infarction += 1;
    if (finding === "swollen_legs" || finding === "jvd" || finding === "normal") score.Myocardial_Infarction += 1;
    if (symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("weakness") || symptoms.includes("shortness_breath") || symptoms.includes("anxiety") || symptoms.includes("sweating")) score.Myocardial_Infarction += 1;
    if (radiate === "neck" || radiate === "jaw" || radiate === "left_arm" || radiate === "up_abd" || radiate === "up_back") score.Myocardial_Infarction += 1;
    if (painStay === "yes") score.Myocardial_Infarction += 1;
    if (betterWorse === "exertion_worse") score.Myocardial_Infarction += 1;
    if (history.includes("hypertension") || history.includes("coronary_artery_disease") || history.includes("myocardial_infarction") || history.includes("angina") || history.includes("atrial_fibrillations") || history.includes("peripheral_vascular_disease") || history.includes("cardiac_device") || history.includes("clotting_disorder")) score.Myocardial_Infarction += 1;
    
    
    //Angina
    if (complaint === "chest_pain") score.angina += 5;
    if (chestPain === "crushing") score.angina += 1;
    if (breathing === "yes" || breathing === "no") score.angina += 1;
    if (lung === "clear" || lung === "crackles" || lung === "") score.angina += 1;
    if (pulse === "high" || pulse === "normal") score.angina += 1;
    if (respiratoryRate === "normal" || respiratoryRate === "high") score.angina += 1;
    if (bloodPressure === "normal" || bloodPressure === "normal1" || bloodPressure === "slight-high" || bloodPressure === "slight-high1" || bloodPressure === "slight-low" || bloodPressure === "low") score.angina += 1;
    if (pulsusParadoxus === "no") score.angina += 1;
    if (spo2 === "low" || spo2 === "normal") score.angina += 1;
    if (skin === "pale" || skin === "diaphoretic") score.angina += 1;
    if (onset === "sudden" || onset === "gradual") score.angina += 1;
    if (finding === "swollen_legs" || finding === "jvd" || finding === "normal") score.angina += 1;
    if (symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("weakness") || symptoms.includes("shortness_breath") || symptoms.includes("anxiety") || symptoms.includes("sweating")) score.angina += 1;
    if (radiate === "neck" || radiate === "jaw" || radiate === "left_arm" || radiate === "up_abd" || radiate === "up_back") score.angina += 1;
    if (painStay === "no") score.angina += 1;
    if (betterWorse === "exertion_worse") score.angina += 1;
    if (history.includes("hypertension") || history.includes("coronary_artery_disease") || history.includes("myocardial_infarction") || history.includes("angina") || history.includes("atrial_fibrillations") || history.includes("peripheral_vascular_disease") || history.includes("cardiac_device") || history.includes("clotting_disorder")) score.angina += 1;
 
    // Asthma
    if (complaint === "difficulty_breathing") score.asthma += 5;
    if (breathing === "yes") score.asthma += 1;
    if (lung === "wheeze") score.asthma += 1;
    if (pulse === "high") score.asthma += 1;
    if (spo2 === "low") score.asthma += 1;
    if (respiratoryRate === "high") score.asthma += 1;
    if (bloodPressure === "normal" || bloodPressure === "normal1" || bloodPressure === "slight-high" || bloodPressure === "low") score.asthma += 1;
    if (pulsusParadoxus === "yes" || pulsusParadoxus === "no") score.asthma += 1;
    if (skin === "pale" || skin === "cyanotic") score.asthma += 1;
    if (onset === "sudden") score.asthma += 1;
    if (finding === "normal") score.asthma += 1;
    if (symptoms.includes("shortness_breath") || symptoms.includes("chest_tightness") || symptoms.includes("anxiety") || symptoms.includes("fatigue")) score.asthma += 1;
    if (radiate === "no") score.asthma += 1;
    if (betterWorse === "exertion_worse") score.asthma += 1;
    if (history.includes("asthma")) score.asthma += 3;

    // Anaphylaxis
    if (complaint === "difficulty_breathing") score.anaphylaxis += 5;
    if (breathing === "yes") score.anaphylaxis += 1;
    if (lung === "wheeze" || lung === "clear") score.anaphylaxis += 1;
    if (pulse === "high") score.anaphylaxis += 1;
    if (bloodPressure === "low") score.anaphylaxis += 1;
    if (respiratoryRate === "high") score.anaphylaxis += 1;
    if (spo2 === "low") score.anaphylaxis += 1;
    if (pulsusParadoxus === "no") score.anaphylaxis += 1;
    if (skin === "flushed") score.anaphylaxis += 1;
    if (onset === "sudden") score.anaphylaxis += 1;
    if (finding === "hives") score.anaphylaxis += 1;
    if (
        symptoms.includes("throat_tightness") || 
        symptoms.includes("shortness_breath") || 
        symptoms.includes("hives") || 
        symptoms.includes("nausea") || 
        symptoms.includes("vomit") || 
        symptoms.includes("anxiety") || 
        symptoms.includes("dizziness")
    ) score.anaphylaxis += 1;
    if (radiate === "no") score.anaphylaxis += 1;
    if (history.includes("")) score.anaphylaxis += 1;
    if (history.includes("allergies")) score.anaphylaxis += 3; 

    // Pulmonary Edema
    if (complaint === "difficulty_breathing") score.pulmonaryEdema += 5;
    if (breathing === "yes") score.pulmonaryEdema += 1;
    if (lung === "crackles") score.pulmonaryEdema += 2;
    if (pulse === "high") score.pulmonaryEdema += 1;
    if (bloodPressure === "high" || bloodPressure === "slight-high2") score.pulmonaryEdema += 1;
    if (respiratoryRate === "high") score.pulmonaryEdema += 1;
    if (spo2 === "low") score.pulmonaryEdema += 1;
    if (pulsusParadoxus === "no") score.pulmonaryEdema += 1;
    if (skin === "pale" || skin === "cyanotic") score.pulmonaryEdema += 1;
    if (onset === "gradual") score.pulmonaryEdema += 1;
    if (finding === "jvd" || finding === "swollen_legs" ) score.pulmonaryEdema += 1;
    if (finding === "pink_sputum") score.pulmonaryEdema +=2;
    if (
        symptoms.includes("fatigue") || 
        symptoms.includes("chest_tightness") || 
        symptoms.includes("paroxysmal_nocturnal_dyspnea") || 
        symptoms.includes("weakness") || 
        symptoms.includes("shortness_breat") || 
        symptoms.includes("anxiety") || 
        symptoms.includes("dizziness")
    ) score.pulmonaryEdema += 1;
    if (radiate === "no") score.pulmonaryEdema += 1;
    if (betterWorse === "lying_worse" || betterWorse === "sitting_better" || betterWorse === "no") score.pulmonaryEdema += 1;
    if (
        history.includes("congestive_heart_failure") || 
        history.includes("hypertension") || 
        history.includes("myocardial_infarction") || 
        history.includes("")
    ) score.pulmonaryEdema += 1;

    // Pulmonary Embolism
    if (complaint === "difficulty_breathing" || complaint === "chest_pain") score.pulmonaryEmbolism += 5;
    if (chestPain === "sharp" || chestPain === "") score.pulmonaryEmbolism += 1;
    if (breathing === "yes") score.pulmonaryEmbolism += 1;
    if (lung === "clear" || lung === "diminished_affected_side") score.pulmonaryEmbolism += 1;
    if (pulse === "high") score.pulmonaryEmbolism += 1;
    if (bloodPressure === "slight-low" || bloodPressure === "low" || bloodPressure === "normal1" || bloodPressure === "slight-high") score.pulmonaryEmbolism += 1;
    if (respiratoryRate === "high") score.pulmonaryEmbolism += 1;
    if (spo2 === "low") score.pulmonaryEmbolism += 1;
    if (skin === "pale") score.pulmonaryEmbolism += 1;
    if (onset === "sudden") score.pulmonaryEmbolism += 1;
    if (finding === "unilateral_leg_swelling" || finding === "jvd" || finding === "normal") score.pulmonaryEmbolism += 1;
    if (
        symptoms.includes("shortness_breath") || 
        symptoms.includes("cough") || 
        symptoms.includes("dizziness") || 
        symptoms.includes("anxiety") || 
        symptoms.includes("right_leg_swelling")
    ) score.pulmonaryEmbolism += 1;
    if (pulsusParadoxus === "no") score.pulmonaryEmbolism += 1;
    if (betterWorse === "breathing_worse") score.pulmonaryEmbolism += 1;
    if (radiate === "no") score.pulmonaryEmbolism += 1;
    if (painStay === "yes" || painStay === "no") score.pulmonaryEmbolism += 1;
    if (
        history.includes("recent_surger") || 
        history.includes("cancer") || 
        history.includes("dvt_pe_history") || 
        history.includes("hormone_replace") || 
        history.includes("birth_control") || 
        history.includes("long_immobilization")
    ) score.pulmonaryEmbolism += 1;

    // Croup
    if (complaint === "difficulty_breathing") score.croup += 5;
    if (breathing === "yes") score.croup += 1;
    if (lung === "stridor") score.croup += 1;
    if (toddlerPulse === "normal") score.croup += 1;
    if (preschoolPulse === "normal") score.croup += 1;
    if (infantPulse === "normal") score.croup += 1;
    if (toddlerRespiratoryRate === "high" || toddlerRespiratoryRate === "normal" ) score.croup += 1;
    if (preschoolRespiratoryRate === "high" || preschoolRespiratoryRate === "normal" ) score.croup += 1;
    if (infantRespiratoryRate === "high" || infantRespiratoryRate === "normal" ) score.croup += 1;
    if (toddlerBloodPressure === "normal" ) score.croup += 1;
    if (preschoolBloodPressure === "normal") score.croup += 1;
    if (infantBloodPressure === "normal") score.croup += 1;
    if (spo2 === "low") score.croup += 1;
    if (skin === "normal" || skin === "cyanotic") score.croup += 1;
    if (onset === "gradual") score.croup += 1;
    if (
        symptoms.includes("seal_cough") || 
        symptoms.includes("shortness_breath") || 
        symptoms.includes("fever") || 
        symptoms.includes("congestion") || 
        symptoms.includes("sore_throat") || 
        symptoms.includes("anxiety")
    ) score.croup += 1;
    if (history.includes("croup") || history.includes("recent_viral_illness") || history.includes("")) score.croup += 1;
    if (betterWorse === "lying_worse" || betterWorse === "sitting_better" || betterWorse === "night_worse") score.croup += 1;

    // Stroke
    if (complaint === "altered_mental_status" || complaint === "weakness" || complaint === "head_ache") score.stroke += 5;
    if (age === "adult") score.stroke += 1;
    if (pulse === "normal" || pulse === "high") score.stroke += 1;
    if (breathing === "no") score.stroke += 1;
    if (respiratoryRate === "normal") score.stroke += 1;
    if (bloodPressure === "slight-high" || bloodPressure === "slight-high-1" || bloodPressure === "slight-high-2" || bloodPressure === "high") score.stroke += 1;
    if (pulsusParadoxus === "no") score.stroke += 1;
    if (spo2 === "normal") score.stroke += 1;
    if (bgl === "normal" || bgl === "high") score.stroke += 1;
    if (bgl === "low") score.stroke -=20;
    if (strokeScale === "positive") score.stroke += 5;
    if (skin === "normal" || skin === "flushed") score.stroke += 1;
    if (finding === "normal") score.stroke += 1;
    if (
        symptoms.includes("unilateral_weakness") || 
        symptoms.includes("speech_difficulty") || 
        symptoms.includes("numbness") || 
        symptoms.includes("loss_balance") || 
        symptoms.includes("dizziness") || 
        symptoms.includes("confusion") || 
        symptoms.includes("blurred_vision") || 
        symptoms.includes("headache") ||
        symptoms.includes("photophobia")
    ) score.stroke += 1;
    if (onset === "sudden") score.stroke += 1;
    if (history.includes("hypertension") || history.includes("stroke") || history.includes("diabetes") || history.includes("high_cholesterol") || history.includes("")) score.stroke += 1;
    if (isPain === "yes" || isPain === "no") score.stroke += 1;
    if (betterWorse === "no") score.stroke += 1;
    if (radiate === "no") score.stroke += 1;
    if (painStay === "yes" || painStay === "no" ) score.stroke += 1;


    // Meningitis
    if (complaint === "fever" || complaint === "head_ache" || complaint === "altered_mental_status") score.meningitis += 5;
    if (pulse === "high" || pulse === "normal") score.meningitis += 1;
    if (toddlerPulse === "normal" || toddlerPulse === "high") score.meningitis += 1;
    if (schoolPulse === "normal" || schoolPulse === "high")score.meningitis +=1;
    if (preschoolPulse === "normal" || preschoolPulse === "high") score.meningitis += 1;
    if (infantPulse === "normal" || infantPulse === "high") score.meningitis += 1;
    if (schoolRespiratoryRate === "normal" || schoolRespiratoryRate === "high" ) score.meningitis += 1;
    if (toddlerRespiratoryRate === "high" || toddlerRespiratoryRate === "normal" ) score.meningitis += 1;
    if (preschoolRespiratoryRate === "high" || preschoolRespiratoryRate === "normal" ) score.meningitis += 1;
    if (infantRespiratoryRate === "high" || infantRespiratoryRate === "normal" ) score.meningitis += 1;
    if (toddlerBloodPressure === "normal" || toddlerBloodPressure === "slight-high" || toddlerBloodPressure === "low-1") score.meningitis += 1;
    if (preschoolBloodPressure === "normal" || preschoolBloodPressure === "normal1" || preschoolBloodPressure === "slight-high") score.meningitis += 1;
    if (infantBloodPressure === "normal" || infantBloodPressure === "slight-high") score.meningitis += 1;
    if (schoolBloodPressure === "normal" || schoolBloodPressure === "normal1" || schoolBloodPressure === "slight-high") score.meningitis += 1
    if (breathing === "yes" || breathing === "no") score.meningitis += 1;
    if (respiratoryRate === "high" || respiratoryRate === "normal") score.meningitis += 1;
    if (bloodPressure === "normal" || bloodPressure === "slight-high" || bloodPressure === "normal1") score.meningitis += 1;
    if (pulsusParadoxus === "no") score.meningitis += 1;
    if (spo2 === "normal" || spo2 === "low") score.meningitis += 1;
    if (bgl === "normal") score.meningitis += 1;
    if (skin === "normal" || skin === "pale") score.meningitis += 1;
    if (finding === "normal") score.meningitis += 1;

    if (
        symptoms.includes("fever") ||
        symptoms.includes("headache") ||
        symptoms.includes("neck_stiffness") ||
        symptoms.includes("photophobia") ||
        symptoms.includes("nausea") ||
        symptoms.includes("vomiting") ||
        symptoms.includes("hives") ||
        symptoms.includes("confusion") ||
        symptoms.includes("legs_pain")
    ) score.meningitis += 1;

    if (onset === "gradual" || onset === "sudden") score.meningitis += 1;

    if (
        history.includes("recent_viral_illness") ||
        history.includes("immune_compromised") ||
        history.includes("recent_infection") ||
        history.includes("ear_infection")
    ) score.meningitis += 1;

    if (isPain === "yes" || isPain === "no") score.meningitis += 1;
    if (betterWorse === "no" || betterWorse === "lying_better") score.meningitis += 1;
    if (radiate === "no") score.meningitis += 1;
    if (painStay === "yes" || painStay === "no") score.meningitis += 1;


    // COPD
    if (complaint === "difficulty_breathing") score.copd += 5;
    if (breathing === "yes") score.copd += 1;
    if (breathing === "no") score.copd -=20;
    if (lung === "wheeze") score.copd += 1;
    if (age === "adult") score.copd += 1;
    if (pulse === "high" || pulse === "normal") score.copd += 1;
    if (respiratoryRate === "high" || respiratoryRate === "normal") score.copd += 1;
    if (
        bloodPressure === "low" || 
        bloodPressure === "slight-low" || 
        bloodPressure === "slight-high" || 
        bloodPressure === "slight-high1" || 
        bloodPressure === "normal1" || 
        bloodPressure === "slight-high2" || 
        bloodPressure === "high" || 
        bloodPressure === "normal" || 
        bloodPressure === "closing-out"
    ) score.copd += 1;
    if (pulsusParadoxus === "no" || pulsusParadoxus === "yes") score.copd += 1;
    if (spo2 === "low") score.copd += 1;
    if (skin === "cyanotic" || skin === "pale" || skin === "normal") score.copd += 1;
    if (finding === "barrel_chest" || finding === "normal") score.copd += 1;
    if (
        symptoms.includes("cough") ||  
        symptoms.includes("shortness_breath") || 
        symptoms.includes("fatigue") || 
        symptoms.includes("weakness") || 
        symptoms.includes("anxiety")
    ) score.copd += 1;
    if (onset === "gradual") score.copd += 1;
    if (
        history.includes("copd") || 
        history.includes("emphysema") || 
        history.includes("chronic_bronchitis") || 
        history.includes("smoking") || 
        history.includes("asthma")
    ) score.copd += 1;
    if (isPain === "yes" || isPain === "no") score.copd += 1;
    if (radiate === "no" ) score.copd += 1;
    if (betterWorse === "exertion_worse" || betterWorse === "breathing_worse" || betterWorse === "night_worse" || betterWorse === "lying_worse" || betterWorse === "sitting_better") score.copd += 1;

    // === Right Sided CHF ===
    if (complaint === "swelling" || complaint === "abdominal_pain") score.rightSidedChf += 5;
    if (quadrant === "upper_right") score.rightSidedChf += 1;
    if (radiateBack === "no" ) score.rightSidedChf += 1;
    if (breathing === "yes" || breathing === "no") score.rightSidedChf += 1;
    if (lung === "crackles"  || lung === "clear") score.rightSidedChf += 1;
    if (age === "adult") score.rightSidedChf += 1;
    if (pulse === "normal" || pulse === "high") score.rightSidedChf += 1;
    if (respiratoryRate === "normal" || respiratoryRate === "high") score.rightSidedChf += 1;
    if (bloodPressure === "normal" || bloodPressure === "normal1" || bloodPressure === "slight-high" || bloodPressure === "slight-high1") score.rightSidedChf += 1;
    if (onset === "gradual") score.rightSidedChf += 1;
    if (pulsusParadoxus === "no") score.rightSidedChf += 1;
    if (spo2 === "normal") score.rightSidedChf += 1;
    if (skin === "normal") score.rightSidedChf += 1;
    if (finding === "jvd" || finding === "normal") score.rightSidedChf += 1;
    if (symptoms.includes("fatigue") || symptoms.includes("weakness") || symptoms.includes("abd_bloating") || symptoms.includes("shortness_breath")) score.rightSidedChf += 1;
    if (history.includes("hypertension") || history.includes("copd") || history.includes("myocardial_infarction") || history.includes("congestive_heart_failure") || history.includes("diabetes") || history.includes("smoking")) score.rightSidedChf += 1;
    if (isPain === "no") score.rightSidedChf += 1;
    if (betterWorse === "exertion_worse" || betterWorse === "standing_worse" || betterWorse === "no") score.rightSidedChf += 1;

    // === AAA ===
    if (complaint === "abdominal_pain")score.aaa +=5;
    if (complaint === "tearing_back") score.aaa += 10;
    if (breathing === "no"|| breathing === "yes") score.aaa += 1;
    if (pulse === "normal" || pulse === "high") score.aaa += 1;
    if (respiratoryRate === "normal" || respiratoryRate === "high") score.aaa += 1;
    if (bloodPressure === "low") score.aaa += 3;
    if (bloodPressure === "closing-in" || bloodPressure === "uneven" || bloodPressure === "low-in") score.aaa += 1;
    if (spo2 === "normal") score.aaa += 1;
    if (skin === "normal" || skin === "pale") score.aaa += 1;
    if (onset === "sudden") score.aaa += 1;
    if (finding === "normal") score.aaa += 1;
    if (quadrant === "lower_left" || quadrant === "lower_right" || quadrant === "lower_middle" || quadrant === "upper_middle") score.aaa += 1;
    if (radiateBack === "yes") score.aaa += 1;
    if (symptoms.includes("dizziness") || symptoms.includes("weakness") || symptoms.includes("nausea") || symptoms.includes("sweating") || symptoms.includes("back_pain")) score.aaa += 1;
    if (symptoms.includes("tearing_back")) score.aaa += 5;
    if (history.includes("none")) score.aaa += 1;
    if (isPain === "yes") score.aaa += 1;
    if (radiate === "back" || radiate === "low_back" || radiate === "mid_back") score.aaa += 1;
    if (painStay === "yes") score.aaa += 1;
    if (betterWorse === "no") score.aaa += 1;

    // === Appendicitis ===
    if (complaint === "abdominal_pain") score.appendicitis += 5;
    if (breathing === "no") score.appendicitis += 1;
    if (pulse === "normal" || pulse === "high") score.appendicitis += 1;
    if (respiratoryRate === "normal") score.appendicitis += 1;
    if (bloodPressure === "normal" || bloodPressure === "slight-low" || bloodPressure === "low") score.appendicitis += 1;
    if (toddlerPulse === "normal" || toddlerPulse === "high") score.meningitis += 1;
    if (schoolPulse === "normal" || schoolPulse === "high")score.meningitis +=1;
    if (preschoolPulse === "normal" || preschoolPulse === "high") score.meningitis += 1;
    if (infantPulse === "normal" || infantPulse === "high") score.meningitis += 1;
    if (schoolRespiratoryRate === "normal"  ) score.meningitis += 1;
    if ( toddlerRespiratoryRate === "normal" ) score.meningitis += 1;
    if (preschoolRespiratoryRate === "normal" ) score.meningitis += 1;
    if ( infantRespiratoryRate === "normal" ) score.meningitis += 1;
    if (toddlerBloodPressure === "normal" || toddlerBloodPressure === "low" || toddlerBloodPressure === "low-1") score.meningitis += 1;
    if (preschoolBloodPressure === "normal" || preschoolBloodPressure === "low1" || preschoolBloodPressure === "low") score.meningitis += 1;
    if (infantBloodPressure === "normal" || infantBloodPressure === "low") score.meningitis += 1;
    if (schoolBloodPressure === "normal" || schoolBloodPressure === "low1" || schoolBloodPressure === "low") score.meningitis += 1
    if (spo2 === "normal") score.appendicitis += 1;
    if (skin === "normal" || skin === "pale") score.appendicitis += 1;
    if (onset === "gradual") score.appendicitis += 1;
    if (finding === "normal") score.appendicitis += 1;
    if (quadrant === "lower_right") score.appendicitis += 1;
    if (radiateBack === "no") score.appendicitis += 1;
    if (symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("fever") || symptoms.includes("loss_balance")) score.appendicitis += 1;
    if (history.includes("none")) score.appendicitis += 1;
    if (isPain === "yes") score.appendicitis += 1;
    if (radiate === "no") score.appendicitis += 1;
    if (painStay === "yes") score.appendicitis += 1;
    if (betterWorse === "exertion_worse") score.appendicitis += 1;

    // === Pancreatitis ===
    if (complaint === "abdominal_pain") score.pancreatitis += 5;
    if (breathing === "no") score.pancreatitis += 1;
    if (pulse === "normal" || pulse === "high") score.pancreatitis += 1;
    if (respiratoryRate === "normal" || respiratoryRate === "high") score.pancreatitis += 1;
    if (bloodPressure === "normal" || bloodPressure === "slight-low") score.pancreatitis += 1;
    if (spo2 === "normal") score.pancreatitis += 1;
    if (skin === "normal" || skin === "pale") score.pancreatitis += 1;
    if (onset === "gradual") score.pancreatitis += 1;
    if (finding === "normal") score.pancreatitis += 1;
    if (quadrant === "upper_middle" || quadrant === "upper_left") score.pancreatitis += 1;
    if (radiateBack === "yes") score.pancreatitis += 1;
    if (pulsusParadoxus === "no") score.pancreatitis += 1;
    if (symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("abd_bloating") || symptoms.includes("fever")) score.pancreatitis += 1;
    if (history.includes("gallbladder_disease") || history.includes("high_cholesterol") || history.includes("substance_use_disorder") || history.includes("none")) score.pancreatitis += 1;
    if (isPain === "yes") score.pancreatitis += 1;
    if (radiate === "mid_back" || radiate === "up_back" || radiate === "back") score.pancreatitis += 1;
    if (painStay === "yes") score.pancreatitis += 1;
    if (betterWorse === "lying_worse" || betterWorse === "exertion_worse" || betterWorse === "sitting_better") score.pancreatitis += 1;

    // === Hernia ===
    if (complaint === "abdominal_pain") score.hernia += 5;
    if (breathing === "no") score.hernia += 1;
    if (pulse === "normal" || pulse === "high") score.hernia += 1;
    if (respiratoryRate === "normal") score.hernia += 1;
    if (bloodPressure === "normal" || bloodPressure === "slight-low") score.hernia += 1;
    if (spo2 === "normal") score.hernia += 1;
    if (skin === "normal") score.hernia += 1;
    if (onset === "gradual" || onset === "fluctuating") score.hernia += 1;
    if (finding === "normal") score.hernia += 1;
    if (quadrant === "lower_middle" || quadrant === "upper_middle" || quadrant === "lower_right" || quadrant === "lower_left") score.hernia += 1;
    if (radiateBack === "no") score.hernia += 1;
    if (pulsusParadoxus === "no") score.hernia += 1;
    if (symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("abd_bloating") || symptoms.includes("constipation") || symptoms.includes("none")) score.hernia += 1;
    if (history.includes("none") || history.includes("recent_surgery") || history.includes("chronic_back_pain")) score.hernia += 1;
    if (isPain === "yes") score.hernia += 1;
    if (radiate === "no") score.hernia += 1;
    if (painStay === "yes" || painStay === "no") score.hernia += 1;
    if (betterWorse === "exertion_worse" || betterWorse === "standing_worse" || betterWorse === "lying_better") score.hernia += 1;

    // === Diverticulitis ===
    if (complaint === "abdominal_pain") score.diverticulitis += 5;
    if (breathing === "no") score.diverticulitis += 1;
    if (pulse === "normal" || pulse === "high") score.diverticulitis += 1;
    if (respiratoryRate === "normal") score.diverticulitis += 1;
    if (bloodPressure === "normal" || bloodPressure === "slight-low") score.diverticulitis += 1;
    if (spo2 === "normal") score.diverticulitis += 1;
    if (skin === "normal" || skin === "pale") score.diverticulitis += 1;
    if (onset === "gradual") score.diverticulitis += 1;
    if (finding === "normal") score.diverticulitis += 1;
    if (quadrant === "lower_left") score.diverticulitis += 1;
    if (radiateBack === "no") score.diverticulitis += 1;
    if (pulsusParadoxus === "no") score.diverticulitis += 1;
    if (symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("fever") || symptoms.includes("constipation")) score.diverticulitis += 1;
    if (history.includes("none") || history.includes("diverticulosis") || history.includes("chronic_back_pain")) score.diverticulitis += 1;
    if (isPain === "yes") score.diverticulitis += 1;
    if (radiate === "no") score.diverticulitis += 1;
    if (painStay === "yes") score.diverticulitis += 1;
    if (betterWorse === "exertion_worse" || betterWorse === "lying_better") score.diverticulitis += 1;

    // === Diverticulosis ===
    if (complaint === "abdominal_pain") score.diverticulosis += 5;
    if (breathing === "no") score.diverticulosis += 1;
    if (pulse === "normal") score.diverticulosis += 1;
    if (respiratoryRate === "normal") score.diverticulosis += 1;
    if (bloodPressure === "normal") score.diverticulosis += 1;
    if (spo2 === "normal") score.diverticulosis += 1;
    if (skin === "normal") score.diverticulosis += 1;
    if (onset === "gradual" || onset === "fluctuating") score.diverticulosis += 1;
    if (finding === "normal") score.diverticulosis += 1;
    if (quadrant === "lower_left") score.diverticulosis += 1;
    if (radiateBack === "no") score.diverticulosis += 1;
    if (pulsusParadoxus === "no") score.diverticulosis += 1;
    if (symptoms.includes("constipation") || symptoms.includes("abd_bloating") || symptoms.includes("none")) score.diverticulosis += 1;
    if (history.includes("diverticulosis") || history.includes("none")) score.diverticulosis += 1;
    if (isPain === "yes") score.diverticulosis += 1;
    if (radiate === "no") score.diverticulosis += 1;
    if (painStay === "no") score.diverticulosis += 1;
    if (betterWorse === "exertion_worse" || betterWorse === "lying_better") score.diverticulosis += 1;


    // === Renal Colic ===
    if (complaint === "abdominal_pain") score.renalColic += 5;
    if (breathing === "no") score.renalColic += 1;
    if (pulse === "normal" || pulse === "high") score.renalColic += 1;
    if (respiratoryRate === "normal") score.renalColic += 1;
    if (bloodPressure === "normal" || bloodPressure === "slight-low") score.renalColic += 1;
    if (spo2 === "normal") score.renalColic += 1;
    if (skin === "normal" || skin === "pale") score.renalColic += 1;
    if (onset === "sudden") score.renalColic += 1;
    if (finding === "normal") score.renalColic += 1;
    if (quadrant === "lower_left" || quadrant === "lower_right" || quadrant === "upper_middle") score.renalColic += 1;
    if (radiateBack === "yes") score.renalColic += 1;
    if (pulsusParadoxus === "no") score.renalColic += 1;
    if (symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("blood_urine") || symptoms.includes("sweating")) score.renalColic += 1;
    if (history.includes("kidney_stones") || history.includes("none")) score.renalColic += 1;
    if (isPain === "yes") score.renalColic += 1;
    if (radiate === "back" || radiate === "low_back" || radiate === "flank") score.renalColic += 1;
    if (painStay === "yes") score.renalColic += 1;
    if (betterWorse === "lying_better" || betterWorse === "exertion_worse" || betterWorse === "standing_worse") score.renalColic += 1;

    // === Cholecystitis ===
    if (complaint === "abdominal_pain") score.cholecystitis += 5;
    if (breathing === "no") score.cholecystitis += 1;
    if (pulse === "normal" || pulse === "high") score.cholecystitis += 1;
    if (respiratoryRate === "normal") score.cholecystitis += 1;
    if (bloodPressure === "normal" || bloodPressure === "slight-low") score.cholecystitis += 1;
    if (spo2 === "normal") score.cholecystitis += 1;
    if (skin === "normal" || skin === "pale") score.cholecystitis += 1;
    if (onset === "gradual") score.cholecystitis += 1;
    if (finding === "normal") score.cholecystitis += 1;
    if (quadrant === "upper_right") score.cholecystitis += 3;
    if (radiateBack === "yes") score.cholecystitis += 3;
    if (pulsusParadoxus === "no") score.cholecystitis += 1;
    if (symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("fever")) score.cholecystitis += 1;
    if (history.includes("gallbladder_disease") || history.includes("none")) score.cholecystitis += 1;
    if (isPain === "yes") score.cholecystitis += 1;
    if (radiate === "back" || radiate === "right_shoulder") score.cholecystitis += 1;
    if (painStay === "yes") score.cholecystitis += 1;
    if (betterWorse === "lying_worse" || betterWorse === "sitting_better") score.cholecystitis += 1;

    // === UTI / Pyelonephritis ===
    if (complaint === "abdominal_pain") score.utiPyelonephritis += 5;
    if (breathing === "no") score.utiPyelonephritis += 1;
    if (pulse === "normal" || pulse === "high") score.utiPyelonephritis += 1;
    if (respiratoryRate === "normal") score.utiPyelonephritis += 1;
    if (bloodPressure === "normal" || bloodPressure === "slight-low") score.utiPyelonephritis += 1;
    if (spo2 === "normal") score.utiPyelonephritis += 1;
    if (skin === "normal" || skin === "pale") score.utiPyelonephritis += 1;
    if (onset === "sudden" || onset === "gradual") score.utiPyelonephritis += 1;
    if (finding === "normal") score.utiPyelonephritis += 1;
    if (quadrant === "lower_left" || quadrant === "lower_right" || quadrant === "upper_middle") score.utiPyelonephritis += 1;
    if (radiateBack === "yes") score.utiPyelonephritis += 1;
    if (pulsusParadoxus === "no") score.utiPyelonephritis += 1;
    if (symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("fever") || symptoms.includes("blood_urine") || symptoms.includes("dizziness")) score.utiPyelonephritis += 1;
    if (history.includes("kidney_stones") || history.includes("urinary_tract_infection") || history.includes("none")) score.utiPyelonephritis += 1;
    if (isPain === "yes") score.utiPyelonephritis += 1;
    if (radiate === "back" || radiate === "low_back" || radiate === "flank") score.utiPyelonephritis += 1;
    if (painStay === "yes") score.utiPyelonephritis += 1;
    if (betterWorse === "lying_better" || betterWorse === "exertion_worse") score.utiPyelonephritis += 1;


    // === Sepsis ===
    if (complaint === "fever" || complaint === "abdominal_pain" || complaint === "altered_mental_status") score.sepsis += 5;
    if (breathing === "yes" || breathing === "no") score.sepsis += 1;
    if (lung === "" || lung === "crackles" || lung === "wheeze") score.sepsis += 1;
    if (pulse === "high") score.sepsis += 1;
    if (respiratoryRate === "high") score.sepsis += 1;
    if (bloodPressure === "low")score.sepsis += 3;
    if (bloodPressure === "slight-low" || bloodPressure === "closing-in") score.sepsis += 1;
    if (spo2 === "low" || spo2 === "normal") score.sepsis += 1;
    if (skin === "pale" || skin === "clammy" || skin === "flushed" || skin === "jaundice") score.sepsis += 1;
    if (onset === "sudden" || onset === "fluctuating") score.sepsis += 1;
    if (finding === "normal") score.sepsis += 1;
    if ( quadrant === "upper_middle" || quadrant === "lower_middle") score.sepsis += 1;
    if (radiateBack === "no") score.sepsis += 1;
    if (pulsusParadoxus === "no") score.sepsis += 1;
    if (symptoms.includes("fever") || symptoms.includes("weakness") || symptoms.includes("confusion") || symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("dizziness")) score.sepsis += 1;
    if (history.includes("recent_surgery") || history.includes("immunosuppression") || history.includes("none")) score.sepsis += 1;
    if (isPain === "yes" || isPain === "no") score.sepsis += 1;
    if (radiate === "no") score.sepsis += 1;
    if (painStay === "yes" || painStay === "no") score.sepsis += 1;
    if (betterWorse === "no") score.sepsis += 1;

    // === Tension Pneumothorax ===
    if (complaint === "difficulty_breathing" || complaint === "chest_pain") score.tensionPneumo += 5;
    if (chestPain === "" || chestPain === "sharp" || chestPain === "pressure") score.tensionPneumo += 1;
    if (breathing === "yes") score.tensionPneumo += 1;
    if (breathing === "no") score.tensionPneumo -= 20;
    if (lung === "diminished_affected_side") score.tensionPneumo += 3;
    if (pulse === "high") score.tensionPneumo += 1;
    if (respiratoryRate === "high") score.tensionPneumo += 1;
    if (bloodPressure === "low" || bloodPressure === "closing-in") score.tensionPneumo += 1;
    if (spo2 === "low") score.tensionPneumo += 1;
    if (skin === "pale" || skin === "cyanotic" || skin === "clammy") score.tensionPneumo += 1;
    if (onset === "sudden") score.tensionPneumo += 1;
    if (finding === "tracheal_deviation" || finding === "jvd" || finding === "normal") score.tensionPneumo += 1;
    if (radiateBack === "no") score.tensionPneumo += 1;
    if (pulsusParadoxus === "yes" || pulsusParadoxus === "no") score.tensionPneumo += 1;
    if (symptoms.includes("shortness_breath") || symptoms.includes("anxiety") || symptoms.includes("chest_tightness")) score.tensionPneumo += 1;
    if (history.includes("chest_trauma") || history.includes("recent_surgery") || history.includes("none")) score.tensionPneumo += 1;
    if (isPain === "yes") score.tensionPneumo += 1;
    if (radiate === "no") score.tensionPneumo += 1;
    if (painStay === "yes") score.tensionPneumo += 1;
    if (betterWorse === "breathing_worse") score.tensionPneumo += 1;

    // === Hypoglycemia ===
    if (complaint === "altered_mental_status" || complaint === "weakness" || complaint === "head_ache") score.hypoglycemia += 5;
    if (breathing === "no") score.hypoglycemia += 1;
    if (pulse === "normal" || pulse === "high") score.hypoglycemia += 1;
    if (respiratoryRate === "normal") score.hypoglycemia += 1;
    if (bloodPressure === "normal" || bloodPressure === "slight-low") score.hypoglycemia += 1;
    if (spo2 === "normal") score.hypoglycemia += 1;
    if (skin === "pale" || skin === "clammy" || skin === "normal") score.hypoglycemia += 1;
    if (onset === "sudden") score.hypoglycemia += 1;
    if (finding === "normal") score.hypoglycemia += 1;
    if (radiateBack === "no") score.hypoglycemia += 1;
    if (pulsusParadoxus === "no") score.hypoglycemia += 1;
    if (bgl === "low") score.hypoglycemia += 5;
    if (bgl === "high") score.hypoglycemia -= 20;
    if (strokeScale === "negative" || strokeScale === "positive") score.hypoglycemia += 1;
    if (symptoms.includes("weakness") || symptoms.includes("confusion") || symptoms.includes("sweating") || symptoms.includes("anxiety") || symptoms.includes("dizziness") || symptoms.includes("headache")) score.hypoglycemia += 1;
    if (history.includes("diabetes") || history.includes("hypoglycemia") || history.includes("none")) score.hypoglycemia += 1;
    if (isPain === "no") score.hypoglycemia += 1;
    if (radiate === "no") score.hypoglycemia += 1;
    if (painStay === "no") score.hypoglycemia += 1;
    if (betterWorse === "no") score.hypoglycemia += 1;

    // === Hyperglycemia – DKA / HHS ===
    if (complaint === "altered_mental_status" || complaint === "weakness" || complaint === "abdominal_pain" ) score.hyperglycemiaDkaHhs += 5;
    if (breathing === "yes" || breathing === "no") score.hyperglycemiaDkaHhs += 1;
    if (pulse === "high") score.hyperglycemiaDkaHhs += 1;
    if (respiratoryRate === "high") score.hyperglycemiaDkaHhs += 1;
    if (bloodPressure === "normal" || bloodPressure === "slight-low") score.hyperglycemiaDkaHhs += 1;
    if (spo2 === "normal") score.hyperglycemiaDkaHhs += 1;
    if (skin === "flushed" || skin === "dry" || skin === "normal") score.hyperglycemiaDkaHhs += 1;
    if (onset === "gradual") score.hyperglycemiaDkaHhs += 1;
    if (finding === "normal") score.hyperglycemiaDkaHhs += 1;
    if (quadrant === "" || quadrant === "upper_middle" || quadrant === "lower_middle") score.hyperglycemiaDkaHhs += 1;
    if (radiateBack === "no") score.hyperglycemiaDkaHhs += 1;
    if (swelling === "") score.hyperglycemiaDkaHhs += 1;
    if (pulsusParadoxus === "no") score.hyperglycemiaDkaHhs += 1;
    if (bgl === "high" || bgl === "very_high") score.hyperglycemiaDkaHhs += 3;
    if (bgl === "low") score.hyperglycemiaDkaHhs -= 20;
    if (strokeScale === "negative") score.hyperglycemiaDkaHhs += 1;
    if (symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("weakness") || symptoms.includes("confusion") || symptoms.includes("abdominal_pain") || symptoms.includes("thirst")) score.hyperglycemiaDkaHhs += 1;
    if (history.includes("diabetes") || history.includes("none")) score.hyperglycemiaDkaHhs += 1;
    if (isPain === "yes") score.hyperglycemiaDkaHhs += 1;
    if (radiate === "no") score.hyperglycemiaDkaHhs += 1;
    if (painStay === "yes") score.hyperglycemiaDkaHhs += 1;
    if (betterWorse === "no") score.hyperglycemiaDkaHhs += 1;


    // === Adrenal Crisis ===
    if (complaint === "weakness" || complaint === "altered_mental_status" || complaint === "abdominal_pain") score.adrenalCrisis += 5;
    if (breathing === "no") score.adrenalCrisis += 1;
    if (pulse === "high") score.adrenalCrisis += 1;
    if (respiratoryRate === "normal" || respiratoryRate === "high") score.adrenalCrisis += 1;
    if (bloodPressure === "low" || bloodPressure === "slight-low" || bloodPressure === "closing-in") score.adrenalCrisis += 1;
    if (spo2 === "normal") score.adrenalCrisis += 1;
    if (skin === "pale" || skin === "clammy") score.adrenalCrisis += 1;
    if (onset === "sudden" || onset === "gradual") score.adrenalCrisis += 1;
    if (finding === "normal") score.adrenalCrisis += 1;
    if (quadrant === "" || quadrant === "upper_middle" || quadrant === "lower_middle") score.adrenalCrisis += 1;
    if (radiateBack === "no") score.adrenalCrisis += 1;
    if (pulsusParadoxus === "no") score.adrenalCrisis += 1;
    if (bgl === "low" || bgl === "normal" || bgl === "high") score.adrenalCrisis += 1;
    if (strokeScale === "negative") score.adrenalCrisis += 1;
    if (symptoms.includes("weakness") || symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("fatigue") || symptoms.includes("confusion") || symptoms.includes("dizziness")) score.adrenalCrisis += 1;
    if (history.includes("adrenal_disorder") || history.includes("recent_surgery") || history.includes("none")) score.adrenalCrisis += 1;
    if (isPain === "yes") score.adrenalCrisis += 1;
    if (radiate === "no") score.adrenalCrisis += 1;
    if (painStay === "yes") score.adrenalCrisis += 1;
    if (betterWorse === "no") score.adrenalCrisis += 1;

    // === Hyperventilation Syndrome ===
    if (complaint === "difficulty_breathing" || complaint === "anxiety" || complaint === "chest_pain") score.hyperventilationSyndrome += 5;
    if (chestPain === "" || chestPain === "sharp" || chestPain === "pressure") score.hyperventilationSyndrome += 1;
    if (breathing === "yes") score.hyperventilationSyndrome += 1;
    if (lung === "clear") score.hyperventilationSyndrome += 1;
    if (pulse === "normal" || pulse === "high") score.hyperventilationSyndrome += 1;
    if (respiratoryRate === "high") score.hyperventilationSyndrome += 1;
    if (bloodPressure === "normal" || bloodPressure === "slight-high") score.hyperventilationSyndrome += 1;
    if (spo2 === "normal") score.hyperventilationSyndrome += 1;
    if (skin === "pale" || skin === "flushed" || skin === "normal") score.hyperventilationSyndrome += 1;
    if (onset === "sudden" || onset === "fluctuating") score.hyperventilationSyndrome += 1;
    if (finding === "normal") score.hyperventilationSyndrome += 1;
    if (radiateBack === "no") score.hyperventilationSyndrome += 1;
    if (pulsusParadoxus === "no") score.hyperventilationSyndrome += 1;
    if (symptoms.includes("shortness_breath") || symptoms.includes("anxiety") || symptoms.includes("dizziness") || symptoms.includes("chest_tightness") || symptoms.includes("numbness")) score.hyperventilationSyndrome += 1;
    if (history.includes("anxiety") || history.includes("none")) score.hyperventilationSyndrome += 1;
    if (isPain === "yes" || isPain === "no") score.hyperventilationSyndrome += 1;
    if (radiate === "no") score.hyperventilationSyndrome += 1;
    if (painStay === "yes" || painStay === "no") score.hyperventilationSyndrome += 1;
    if (betterWorse === "breathing_worse" || betterWorse === "anxiety") score.hyperventilationSyndrome += 1;

    // === Bronchiolitis ===
    if (complaint === "difficulty_breathing" || complaint === "cough" || complaint === "fever") score.bronchiolitis += 5;
    if (breathing === "yes") score.bronchiolitis += 1;
    if (lung === "wheeze" || lung === "crackles" || lung === "rhonchi") score.bronchiolitis += 1;
    if (pulse === "normal" || pulse === "high") score.bronchiolitis += 1;
    if (respiratoryRate === "high") score.bronchiolitis += 1;
    if (bloodPressure === "normal" || bloodPressure === "slight-low") score.bronchiolitis += 1;
    if (spo2 === "normal" || spo2 === "low") score.bronchiolitis += 1;
    if (skin === "normal" || skin === "pale" || skin === "flushed") score.bronchiolitis += 1;
    if (onset === "gradual") score.bronchiolitis += 1;
    if (finding === "normal") score.bronchiolitis += 1;
    if (radiateBack === "no") score.bronchiolitis += 1;
    if (pulsusParadoxus === "no") score.bronchiolitis += 1;
    if (symptoms.includes("cough") || symptoms.includes("shortness_breath") || symptoms.includes("fever") || symptoms.includes("fatigue")) score.bronchiolitis += 1;
    if (history.includes("recent_viral_illness") || history.includes("none")) score.bronchiolitis += 1;
    if (isPain === "no") score.bronchiolitis += 1;
    if (radiate === "no") score.bronchiolitis += 1;
    if (painStay === "no") score.bronchiolitis += 1;
    if (betterWorse === "no") score.bronchiolitis += 1;

    // === Epiglottitis ===
    if (complaint === "difficulty_breathing" || complaint === "sore_throat" || complaint === "fever") score.epiglottitis += 5;
    if (breathing === "yes") score.epiglottitis += 1;
    if (lung === "clear") score.epiglottitis += 1;
    if (pulse === "high") score.epiglottitis += 1;
    if (respiratoryRate === "high") score.epiglottitis += 1;
    if (bloodPressure === "normal" || bloodPressure === "slight-low") score.epiglottitis += 1;
    if (spo2 === "normal" || spo2 === "low") score.epiglottitis += 1;
    if (skin === "pale" || skin === "flushed") score.epiglottitis += 1;
    if (onset === "sudden") score.epiglottitis += 1;
    if (finding === "normal") score.epiglottitis += 1;
    if (radiateBack === "no") score.epiglottitis += 1;
    if (pulsusParadoxus === "no") score.epiglottitis += 1;
    if (symptoms.includes("sore_throat") || symptoms.includes("difficulty_breathing") || symptoms.includes("fever") || symptoms.includes("anxiety")) score.epiglottitis += 1;
    if (history.includes("recent_viral_illness") || history.includes("none")) score.epiglottitis += 1;
    if (isPain === "yes") score.epiglottitis += 1;
    if (radiate === "no") score.epiglottitis += 1;
    if (painStay === "yes") score.epiglottitis += 1;
    if (betterWorse === "no") score.epiglottitis += 1;


    // === Hemothorax ===
    if (complaint === "difficulty_breathing" || complaint === "chest_pain") score.hemothorax += 5;
    if (chestPain === "" || chestPain === "sharp" || chestPain === "pressure") score.hemothorax += 1;
    if (breathing === "yes") score.hemothorax += 1;
    if (lung === "diminished_affected_side") score.hemothorax += 1;
    if (pulse === "high") score.hemothorax += 1;
    if (respiratoryRate === "high") score.hemothorax += 1;
    if (bloodPressure === "low" || bloodPressure === "slight-low" || bloodPressure === "closing-in") score.hemothorax += 1;
    if (spo2 === "low") score.hemothorax += 1;
    if (skin === "pale" || skin === "clammy") score.hemothorax += 1;
    if (onset === "sudden") score.hemothorax += 1;
    if (finding === "tracheal_deviation" || finding === "normal") score.hemothorax += 1;
    if (pulsusParadoxus === "no") score.hemothorax += 1;
    if (symptoms.includes("shortness_breath") || symptoms.includes("anxiety") || symptoms.includes("chest_tightness") || symptoms.includes("weakness")) score.hemothorax += 1;
    if (history.includes("chest_trauma") || history.includes("recent_surgery") || history.includes("none")) score.hemothorax += 1;
    if (isPain === "yes") score.hemothorax += 1;
    if (radiate === "no") score.hemothorax += 1;
    if (painStay === "yes") score.hemothorax += 1;
    if (betterWorse === "breathing_worse") score.hemothorax += 1;

    // === Pneumothorax ===
    if (complaint === "difficulty_breathing" || complaint === "chest_pain") score.pneumothorax += 5;
    if (chestPain === "" || chestPain === "sharp" || chestPain === "pressure") score.pneumothorax += 1;
    if (breathing === "yes") score.pneumothorax += 1;
    if (lung === "diminished_affected_side") score.pneumothorax += 1;
    if (pulse === "high") score.pneumothorax += 1;
    if (respiratoryRate === "high") score.pneumothorax += 1;
    if (bloodPressure === "low" || bloodPressure === "slight-low" || bloodPressure === "closing-in") score.pneumothorax += 1;
    if (spo2 === "low") score.pneumothorax += 1;
    if (skin === "pale" || skin === "cyanotic" || skin === "clammy") score.pneumothorax += 1;
    if (onset === "sudden") score.pneumothorax += 1;
    if (finding === "tracheal_deviation" || finding === "normal") score.pneumothorax += 1;
    if (radiateBack === "no") score.pneumothorax += 1;
    if (pulsusParadoxus === "no") score.pneumothorax += 1;
    if (symptoms.includes("shortness_breath") || symptoms.includes("anxiety") || symptoms.includes("chest_tightness")) score.pneumothorax += 1;
    if (history.includes("chest_trauma") || history.includes("recent_surgery") || history.includes("none")) score.pneumothorax += 1;
    if (isPain === "yes") score.pneumothorax += 1;
    if (radiate === "no") score.pneumothorax += 1;
    if (painStay === "yes") score.pneumothorax += 1;
    if (betterWorse === "breathing_worse") score.pneumothorax += 1;


    function getBestDiagnosis(score) {
        const entries = Object.entries(score);
        // sort highest to lowest score
        entries.sort((a, b) => b[1] - a[1]);
        // get the top score
        const highestScore = entries[0][1];
        // check if score is 0
        if (highestScore === 0) return "No diagnosis";
        // collect all diagnosis that has the highest score
        const ties = entries
            .filter(([name, value]) => value === highestScore)
            .map(([name]) => 
                name.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase())
            );
            //if more then one diagnosis 
            if (ties.length > 1) return ties.join(", ");

            //if only one diagnosis
            return ties[0];
    }
    console.log(score);
    return getBestDiagnosis(score);
}