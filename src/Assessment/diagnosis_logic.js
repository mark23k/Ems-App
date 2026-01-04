export const SuspectedDiagnosis = ({complaint, finding, chestPain,  painStay, betterWorse, breathing,  radiate, lung,  pulse, schoolPulse, preschoolPulse, toddlerPulse, infantPulse,
                            newbornPulse, respiratoryRate, schoolRespiratoryRate, preschoolRespiratoryRate, toddlerRespiratoryRate, infantRespiratoryRate, 
                            newbornRespiratoryRate, bloodPressure, schoolBloodPressure, preschoolBloodPressure, toddlerBloodPressure, infantBloodPressure, 
                            newbornBloodPressure, pulsusParadoxus, isPain, childBloodPressure, spo2,  skin, swelling,  onset, symptoms, history, age, sex, pain, quadrant, radiateBack, 
                            numWeek, numPregnancy, headPosition, birthsNatural, gbs, numBabies, strokeScale, bgl}) => {

    console.log({
    complaint, chestPain, breathing, lung,  pulse, schoolPulse, preschoolPulse, toddlerPulse, infantPulse,
                            newbornPulse, respiratoryRate, schoolRespiratoryRate, preschoolRespiratoryRate, toddlerRespiratoryRate, infantRespiratoryRate, 
                            newbornRespiratoryRate, bloodPressure, schoolBloodPressure, preschoolBloodPressure, toddlerBloodPressure, infantBloodPressure, 
                            newbornBloodPressure, pulsusParadoxus, bgl, strokeScale,isPain,
     spo2, skin, onset, finding, radiate, betterWorse, symptoms, history, painStay, swelling
    });

    //cardiac tamponade
    if ( 
        complaint === "chest_pain" &&
        (chestPain === "sharp" || chestPain === "crushing") && 
        breathing === "yes" && 
        lung === "clear" &&
        (pulse === "high" || pulse == "normal") &&
        bloodPressure === "low-in" &&
        (respiratoryRate === "normal" || respiratoryRate === "high") && 
        (pulsusParadoxus === "yes" || pulsusParadoxus === "no") &&
        (spo2 === "normal" || spo2 === "low") &&
        (skin === "pale" || skin === "clammy") && 
        (onset === "sudden" || onset === "gradual") &&
        (finding === "jvd" || finding === "normal") &&
        painStay === "no" &&
        (radiate === "neck" || radiate === "left_shoulder" || radiate === "up_back" || radiate === "jaw" || radiate === "no") &&
        (betterWorse === "lying_worse" || betterWorse === "no") &&
        (symptoms.includes("shortness_breath") || symptoms.includes("chest_tightness") || symptoms.includes("fatigue") || symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("weakness")) &&
        (history.includes("pericarditis") || history.includes("cancer") || history.includes("chest_trauma") || history.includes("post_cardiac_surgery") || history.includes("myocardial_infarction") || history.includes("chronic_kidney_disease") || history.includes("end_stage_renal_disease"))
    ){
        return "Cardiac Tamponade";
    };
     
    
    //Miocardial Infraction

    if (
        complaint === "chest_pain" &&
        chestPain === "crushing" &&
        (breathing === "yes" || breathing === "no") &&
        (lung === "clear" || lung === "crackles" || lung === "") &&
        (pulse === "high" || pulse === "normal") &&
        (respiratoryRate === "normal" || respiratoryRate === "high") && 
        (bloodPressure === "normal" || bloodPressure === "normal1" || bloodPressure === "slight-high" || bloodPressure === "slight-high1" || bloodPressure === "slight-low" || bloodPressure === "low") &&
        pulsusParadoxus === "no" &&
        (spo2 === "low" || spo2 === "normal") &&
        (skin === "pale" || skin === "diaphoretic") &&
        (onset === "sudden" || onset === "gradual" || finding === "normal") &&
        (finding === "swollen_legs" || finding === "jvd" || finding === "normal") &&
        (symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("weakness") || symptoms.includes("shortness_breath") || symptoms.includes("anxiety") || symptoms.includes("sweating")) &&
        (radiate === "neck" || radiate === "jaw" || radiate === "left_arm" || radiate === "up_abd" || radiate === "up_back") &&
        painStay === "yes" &&
         betterWorse === "exertion_worse" &&
        (history.includes("hypertension") || history.includes("coronary_artery_disease") || history.includes("myocardial_infarction") || history.includes("angina") || history.includes("atrial_fibrillations") || history.includes("peripheral_vascular_disease") || history.includes("cardiac_device") || history.includes("clotting_disorder"))
    ){
        return "Myocardial Infarction";
     };
    //Angina
        if (
        complaint === "chest_pain" &&
        chestPain === "crushing" &&
        (breathing === "yes" || breathing === "no") &&
        (lung === "clear" || lung === "crackles" || lung === "") &&
        (pulse === "high" || pulse === "normal") &&
        (respiratoryRate === "normal" || respiratoryRate === "high") && 
        (bloodPressure === "normal" || bloodPressure === "normal1" || bloodPressure === "slight-high" || bloodPressure === "slight-high1" || bloodPressure === "slight-low" || bloodPressure === "low") &&
        pulsusParadoxus === "no" &&
        (spo2 === "low" || spo2 === "normal") &&
        (skin === "pale" || skin === "diaphoretic") &&
        (onset === "sudden" || onset === "gradual") &&
        (finding === "swollen_legs" || finding === "jvd" || finding === "normal") &&
        (symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("weakness") || symptoms.includes("shortness_breath") || symptoms.includes("anxiety") || symptoms.includes("sweating")) &&
        (radiate === "neck" || radiate === "jaw" || radiate === "left_arm" || radiate === "up_abd" || radiate === "up_back") &&
        painStay === "no" &&
        betterWorse === "exertion_worse" &&
        (history.includes("hypertension") || history.includes("coronary_artery_disease") || history.includes("myocardial_infarction") || history.includes("angina") || history.includes("atrial_fibrillations") || history.includes("peripheral_vascular_disease") || history.includes("cardiac_device") || history.includes("clotting_disorder"))
    ){
        return "Angina";
     };
     

    //Asthma 
     if (
        complaint === "difficulty_breathing" &&
        breathing === "yes" &&
        lung === "wheeze" &&
        pulse === "high" &&
        spo2 === "low" &&
        respiratoryRate === "high" &&
        (bloodPressure === "normal" || bloodPressure === "normal1" || bloodPressure === "slight-high" || bloodPressure === "low") &&
        (pulsusParadoxus === "yes" || pulsusParadoxus === "no") &&
        (skin === "pale" || skin === "cyanotic") &&
        onset === "sudden" &&
        finding === "normal" &&
        (symptoms.includes("shortness_breath") || symptoms.includes("chest_tightness") || symptoms.includes("anxiety") || symptoms.includes("fatigue")) &&
        radiate === "no" &&
        betterWorse === "exertion_worse" &&
        history.includes("asthma")
 
     ){
        return "Asthma"
     };
    //Anaphylaxis
    if (
        complaint === "difficulty_breathing" &&
        breathing === "yes" &&
        (lung === "wheeze" || lung === "clear") &&
        pulse === "high" &&
        bloodPressure === "low" &&
        respiratoryRate === "high" &&
        spo2 === "low" &&
        pulsusParadoxus === "no" &&
        skin === "flushed" &&
        onset === "sudden" &&
        finding === "hives" &&
        (symptoms.includes("throat_tightness") || symptoms.includes("shortness_breat") || symptoms.includes("hives") || symptoms.includes("nausea") || symptoms.includes("vomit") || symptoms.includes("anxiety") || symptoms.includes("dizziness")) &&
        radiate === "no" &&
        (history.includes("allergies") || history.includes("")) 

    ){
        return "Anaphylaxis"
    };

    //Pulmonary Edema
        if (
        complaint === "difficulty_breathing" &&
        breathing === "yes" &&
        lung === "crackles" &&
        pulse === "high" &&
        (bloodPressure === "high" || bloodPressure === "slight-high2") &&
        respiratoryRate === "high" &&
        spo2 === "low" &&
        pulsusParadoxus === "no" &&
        (skin === "pale" || skin === "cyanotic") &&
        onset === "gradual" &&
        (finding === "jvd" || finding === "swollen_legs" || finding === "pink_sputum")&&
        (symptoms.includes("fatigue") || symptoms.includes("chest_tightness") || symptoms.includes("paroxysmal_nocturnal_dyspnea") || symptoms.includes("weakness") || symptoms.includes("shortness_breat") || symptoms.includes("anxiety") || symptoms.includes("dizziness")) &&
        radiate === "no" &&
        (betterWorse === "lying_worse" || betterWorse === "sitting_better" || betterWorse === "no") &&
        (history.includes("congestive_heart_failure") || history.includes("hypertension") || history.includes("myocardial_infarction") || history.includes("")) 

    ){
        return "Pulmonary Edema"
    };
    //Pulmonary Embolism
    if (
        (complaint === "difficulty_breathing" || complaint === "chest_pain") &&
        (chestPain === "sharp" || chestPain === "")&&
        breathing === "yes" &&
        (lung === "clear" || lung === "diminished_affected_side") &&
        pulse === "high" &&
        (bloodPressure === "slight-low" || bloodPressure === "low" || bloodPressure === "normal1" || bloodPressure === "slight-high") &&
        respiratoryRate === "high" &&
        spo2 === "low" &&
        skin === "pale" &&
        onset === "sudden" &&
        (finding === "unilateral_leg_swelling" || finding === "jvd" || finding === "normal") &&
        (symptoms.includes("shortness_breath") || symptoms.includes("cough") || symptoms.includes("dizziness") || symptoms.includes("anxiety") || symptoms.includes("right_leg_swelling")) &&
        pulsusParadoxus === "no" &&
        betterWorse === "breathing_worse" &&
        radiate === "no" &&
        (painStay === "yes" || painStay === "no") &&
        (history.includes("recent_surger") || history.includes("cancer") || history.includes("dvt_pe_history") || history.includes("hormone_replace") || history.includes("birth_control") || history.includes("long_immobilization") ) 
    ){
        return "Pulmonary Embolism"
    };
    
    // Croup 
    if (
        complaint === "difficulty_breathing" &&
        breathing === "yes" && 
        lung === "stridor" &&
        (toddlerPulse === "normal" || toddlerPulse === "") &&
        (preschoolPulse === "normal" || preschoolPulse === "") &&
        (infantPulse === "normal" || infantPulse === "")&&
        (toddlerRespiratoryRate === "high" || toddlerRespiratoryRate === "normal" || toddlerRespiratoryRate === "") &&
        (preschoolRespiratoryRate === "high"  || preschoolRespiratoryRate === "normal" || preschoolRespiratoryRate === "") &&
        (infantRespiratoryRate === "high" || infantRespiratoryRate === "normal" || infantRespiratoryRate === "") &&
        (toddlerBloodPressure === "normal" || toddlerBloodPressure === "") &&
        (preschoolBloodPressure === "normal" || preschoolBloodPressure === "") &&
        (infantBloodPressure === "normal" || infantBloodPressure === "") &&
        spo2 === "low" &&
        (skin === "normal" || skin === "cyanotic") &&
        onset === "gradual" &&
        (symptoms.includes("seal_cough") || symptoms.includes("shortness_breath") || symptoms.includes("fever") || symptoms.includes("congestion") || symptoms.includes("sore_throat") || symptoms.includes("anxiety")) &&
        (history.includes("croup") || history.includes("recent_viral_illness") || history.includes("")) &&
        (betterWorse === "lying_worse" || betterWorse === "sitting_better" || betterWorse === "night_worse")

    ) {
        return "Croup";
    };

    // Stroke
    if (
        (complaint === "altered_mental_status" || complaint === "weakness" || complaint === "head_ache") && 
        age === "adult" && 
        (pulse === "normal" || pulse === "high") &&
        lung === ""&&
        breathing === "no" &&
        respiratoryRate === "normal" &&
        (bloodPressure === "slight-high" || bloodPressure === "slight-high-1" || bloodPressure === "slight-high-2" || bloodPressure === "high") &&
        pulsusParadoxus === "no" &&
        spo2 === "normal" &&
        (bgl === "normal" || bgl === "high") &&
        strokeScale === "positive" &&
        (skin === "normal" || skin === "flushed") &&
        finding === "normal" &&
        (symptoms.includes("unilateral_weakness") || symptoms.includes("speech_difficulty") || symptoms.includes("numbness") || symptoms.includes("loss_balance") || symptoms.includes("dizziness") || symptoms.includes("confusion") || symptoms.includes("blurred_vision") || symptoms.includes("headache")) &&
        onset === "sudden" &&
        (history.includes("hypertension") || history.includes("stroke") || history.includes("diabetes") || history.includes("high_cholesterol") || history.includes("")) &&
        (isPain === "yes" || isPain === "no") &&
        betterWorse === "no" &&
        (radiate === "no" || radiate === "") &&
        (painStay === "yes" || painStay === "no" || painStay === "") 
    ) {
        return "Stroke";
    }

    // COPD
    if (
        complaint === "difficulty_breathing" &&
        breathing === "yes" &&
        lung === "wheeze"  &&
        age === "adult" &&
        (pulse === "high" || pulse === "normal") &&
        (respiratoryRate === "high" || respiratoryRate === "normal") &&
        (bloodPressure === "low" || bloodPressure === "slight-low" || bloodPressure === "slight-high" ||
             bloodPressure === "slight-high1" || bloodPressure === "normal1" || bloodPressure === "slight-high2" || bloodPressure === "high" || 
             bloodPressure === "normal" || bloodPressure || "closing-out") && 
        (pulsusParadoxus === "no" || pulsusParadoxus === "yes") &&
        spo2 === "low" && 
        (skin === "cyanotic" || skin === "pale" || skin === "normal") &&
        (finding === "barrel_chest" || finding === "normal") &&
        (
            symptoms.includes("cough") ||  
            symptoms.includes("shortness_breath") || 
            symptoms.includes("fatigue") || 
            symptoms.includes("weakness") || 
            symptoms.includes("anxiety")
        ) &&
        onset === "gradual" &&
        (
            history.includes("copd") || 
            history.includes("emphysema") || 
            history.includes("chronic_bronchitis") || 
            history.includes("smoking") || 
            history.includes("asthma")
        ) &&
        (isPain === "yes" || isPain === "no") &&
        (radiate === "no" || radiate === "") &&
        (betterWorse === "exertion_worse" || betterWorse === "breathing_worse" || 
            betterWorse === "night_worse" || betterWorse === "lying_worse" || 
            betterWorse === "sitting_better") 
    ) {
        return "COPD ";
        }
       

    // Right sided Chf
    if (
        (complaint === "swelling" || complaint === "abdominal") &&
        (quadrant === "upper_right" || quadrant === "") &&
        (radiateBack === "no" || radiateBack === "") &&
        (breathing === "yes" || breathing === "no") &&
        (lung === "crackles" || lung === "" || lung === "clear") &&
        age === "adult" && 
        (pulse === "normal" || pulse === "high") &&
        (respiratoryRate === "normal" || respiratoryRate === "high") &&
        (bloodPressure === "normal" || bloodPressure === "normal1" || bloodPressure === "slight-high" || bloodPressure === "slight-high1") &&
        onset === "gradual" &&
        pulsusParadoxus === "no" &&
        spo2 === "normal" &&
        skin === "normal" &&
        (finding === "jvd" || finding === "") &&
        (
            symptoms.includes("fatigue") ||
            symptoms.includes("weakness") ||
            symptoms.includes("abd_bloating") ||
            symptoms.includes("shortness_breath")
        ) &&
        (
            history.includes("hypertension") ||
            history.includes("copd") ||
            history.includes("myocardial_infarction") ||
            history.includes("congestive_heart_failure") ||
            history.includes("diabetes") ||
            history.includes("smoking")
        ) &&
        isPain === "no" &&
        (betterWorse === "exertion_worse" || betterWorse === "standing_worse" || betterWorse === "no")
    ) {
        return "Right Sided Chf";
    };




    // === AAA ===
    if (
        (complaint === "abdominal_pain") || (complaint === "tearing_back") &&
        (chestPain === "") &&
        (breathing === "no") &&
        (lung === "") &&
        (pulse === "normal" || pulse === "high") &&
        (respiratoryRate === "normal" || respiratoryRate === "high") &&
        (bloodPressure === "low" || bloodPressure === "closing-in" || bloodPressure === "low-in") &&
        (spo2 === "normal") &&
        (skin === "normal" || skin === "pale") &&
        (onset === "sudden") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "lower_left" || quadrant === "lower_right" || quadrant === "lower_middle" || quadrant === "upper_middle") &&
        (radiateBack === "yes") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("dizziness") ||
            symptoms.includes("weakness") ||
            symptoms.includes("nausea") ||
            symptoms.includes("sweating") ||
            symptoms.includes("back_pain")
        ) &&
        (history.includes("none")) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "back" || radiate === "low_back" || radiate === "mid_back") &&
        (painStay === "yes") &&
        (betterWorse === "no")
    ) {
        return "AAA"
    }


    // === Appendicitis ===
    if (
        (complaint === "abdominal_pain") &&
        (chestPain === "") &&
        (breathing === "no") &&
        (lung === "") &&
        (pulse === "normal" || pulse === "high") &&
        (respiratoryRate === "normal") &&
        (bloodPressure === "normal" || bloodPressure === "slight-low") &&
        (spo2 === "normal") &&
        (skin === "normal" || skin === "pale") &&
        (onset === "gradual") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "lower_right") &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("nausea") ||
            symptoms.includes("vomit") ||
            symptoms.includes("fever") ||
            symptoms.includes("loss_balance")
        ) &&
        (history.includes("none")) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "yes") &&
        (betterWorse === "exertion_worse")
    ) {
        return "appendicitis"
    }

    // === Pancreatitis ===
    if (
        (complaint === "abdominal_pain") &&
        (chestPain === "") &&
        (breathing === "no") &&
        (lung === "") &&
        (pulse === "normal" || pulse === "high") &&
        (respiratoryRate === "normal" || respiratoryRate === "high") &&
        (bloodPressure === "normal" || bloodPressure === "slight-low") &&
        (spo2 === "normal") &&
        (skin === "normal" || skin === "pale") &&
        (onset === "gradual") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "upper_middle" || quadrant === "upper_left") &&
        (radiateBack === "yes") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("nausea") ||
            symptoms.includes("vomit") ||
            symptoms.includes("abd_bloating") ||
            symptoms.includes("fever")
        ) &&
        (
            history.includes("gallbladder_disease") ||
            history.includes("high_cholesterol") ||
            history.includes("substance_use_disorder") ||
            history.includes("none")
        ) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "mid_back" || radiate === "up_back" || radiate === "back") &&
        (painStay === "yes") &&
        (
            betterWorse === "lying_worse" ||
            betterWorse === "exertion_worse" ||
            betterWorse === "sitting_better"
        )
    ) {
        return "pancreatitis"
    }

    // === Hernia ===
    if (
        (complaint === "abdominal_pain") &&
        (chestPain === "") &&
        (breathing === "no") &&
        (lung === "") &&
        (pulse === "normal" || pulse === "high") &&
        (respiratoryRate === "normal") &&
        (bloodPressure === "normal" || bloodPressure === "slight-low") &&
        (spo2 === "normal") &&
        (skin === "normal") &&
        (onset === "gradual" || onset === "fluctuating") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (
            quadrant === "lower_middle" ||
            quadrant === "upper_middle" ||
            quadrant === "lower_right" ||
            quadrant === "lower_left"
        ) &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("nausea") ||
            symptoms.includes("vomit") ||
            symptoms.includes("abd_bloating") ||
            symptoms.includes("constipation") ||
            symptoms.includes("none")
        ) &&
        (
            history.includes("none") ||
            history.includes("recent_surgery") ||
            history.includes("chronic_back_pain")
        ) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "yes" || painStay === "no") &&
        (
            betterWorse === "exertion_worse" ||
            betterWorse === "standing_worse" ||
            betterWorse === "lying_better"
        )
    ) {
        return "hernia"
    }

    // === Diverticulitis ===
    if (
        (complaint === "abdominal_pain") &&
        (chestPain === "") &&
        (breathing === "no") &&
        (lung === "") &&
        (pulse === "normal" || pulse === "high") &&
        (respiratoryRate === "normal") &&
        (bloodPressure === "normal" || bloodPressure === "slight-low") &&
        (spo2 === "normal") &&
        (skin === "normal" || skin === "pale") &&
        (onset === "gradual") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "lower_left") &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("nausea") ||
            symptoms.includes("vomit") ||
            symptoms.includes("fever") ||
            symptoms.includes("constipation")
        ) &&
        (
            history.includes("none") ||
            history.includes("diverticulosis") ||
            history.includes("chronic_back_pain")
        ) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "yes") &&
        (
            betterWorse === "exertion_worse" ||
            betterWorse === "lying_better"
        )
    ) {
        return "diverticulitis"
}


    // === Diverticulosis ===
    if (
        (complaint === "abdominal_pain") &&
        (chestPain === "") &&
        (breathing === "no") &&
        (lung === "") &&
        (pulse === "normal") &&
        (respiratoryRate === "normal") &&
        (bloodPressure === "normal") &&
        (spo2 === "normal") &&
        (skin === "normal") &&
        (onset === "gradual" || onset === "fluctuating") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "lower_left") &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("constipation") ||
            symptoms.includes("abd_bloating") ||
            symptoms.includes("none")
        ) &&
        (history.includes("diverticulosis") || history.includes("none")) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "no") &&
        (
            betterWorse === "exertion_worse" ||
            betterWorse === "lying_better"
        )
    ) {
        return "diverticulosis"
    }

    // === Renal Colic === 
    if (
        (complaint === "abdominal_pain") &&
        (chestPain === "") &&
        (breathing === "no") &&
        (lung === "") &&
        (pulse === "normal" || pulse === "high") &&
        (respiratoryRate === "normal") &&
        (bloodPressure === "normal" || bloodPressure === "slight-low") &&
        (spo2 === "normal") &&
        (skin === "normal" || skin === "pale") &&
        (onset === "sudden") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (
            quadrant === "lower_left" ||
            quadrant === "lower_right" ||
            quadrant === "upper_middle"
        ) &&
        (radiateBack === "yes") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("nausea") ||
            symptoms.includes("vomit") ||
            symptoms.includes("blood_urine") ||
            symptoms.includes("sweating")
        ) &&
        (
            history.includes("kidney_stones") ||
            history.includes("none")
        ) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "back" || radiate === "low_back" || radiate === "flank") &&
        (painStay === "yes") &&
        (
            betterWorse === "lying_better" ||
            betterWorse === "exertion_worse" ||
            betterWorse === "standing_worse"
        )
    ) {
        return "renal_colic"
    }

    // === Cholecystitis === 
    if (
        (complaint === "abdominal_pain") &&
        (chestPain === "") &&
        (breathing === "no") &&
        (lung === "") &&
        (pulse === "normal" || pulse === "high") &&
        (respiratoryRate === "normal") &&
        (bloodPressure === "normal" || bloodPressure === "slight-low") &&
        (spo2 === "normal") &&
        (skin === "normal" || skin === "pale") &&
        (onset === "gradual") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "upper_right") &&
        (radiateBack === "yes") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("nausea") ||
            symptoms.includes("vomit") ||
            symptoms.includes("fever")
        ) &&
        (
            history.includes("gallbladder_disease") ||
            history.includes("none")
        ) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "back" || radiate === "right_shoulder") &&
        (painStay === "yes") &&
        (
            betterWorse === "lying_worse" ||
            betterWorse === "sitting_better"
        )
    ) {
        return "cholecystitis"
    }

    {/* KIDNEY STONES / UTI / PYELONEPHRITIS */}
    if (
        (complaint === "abdominal_pain") &&
        (chestPain === "") &&
        (breathing === "no") &&
        (lung === "") &&
        (pulse === "normal" || pulse === "high") &&
        (respiratoryRate === "normal") &&
        (bloodPressure === "normal" || bloodPressure === "slight-low") &&
        (spo2 === "normal") &&
        (skin === "normal" || skin === "pale") &&
        (onset === "sudden" || onset === "gradual") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (
            quadrant === "lower_left" ||
            quadrant === "lower_right" ||
            quadrant === "upper_middle"
        ) &&
        (radiateBack === "yes") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("nausea") ||
            symptoms.includes("vomit") ||
            symptoms.includes("fever") ||
            symptoms.includes("blood_urine") ||
            symptoms.includes("dizziness")
        ) &&
        (
            history.includes("kidney_stones") ||
            history.includes("urinary_tract_infection") ||
            history.includes("none")
        ) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "back" || radiate === "low_back" || radiate === "flank") &&
        (painStay === "yes") &&
        (
            betterWorse === "lying_better" ||
            betterWorse === "exertion_worse"
        )
    ) {
        return "uti_pyelonephritis"
    }

    {/* sepsis */}
    if (
        (complaint === "fever" || complaint === "abdominal_pain" || complaint === "altered_mental_status") &&
        (chestPain === "") &&
        (breathing === "yes" || breathing === "no") &&
        (lung === "" || lung === "crackles" || lung === "wheeze") &&
        (pulse === "high") &&
        (respiratoryRate === "high") &&
        (bloodPressure === "low" || bloodPressure === "slight-low" || bloodPressure === "closing-in") &&
        (spo2 === "low" || spo2 === "normal") &&
        (skin === "pale" || skin === "clammy" || skin === "flushed" || skin === "jaundice") &&
        (onset === "sudden" || onset === "fluctuating") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "" || quadrant === "upper_middle" || quadrant === "lower_middle") &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("fever") ||
            symptoms.includes("weakness") ||
            symptoms.includes("confusion") ||
            symptoms.includes("nausea") ||
            symptoms.includes("vomit") ||
            symptoms.includes("dizziness")
        ) &&
        (
            history.includes("recent_surgery") ||
            history.includes("immunosuppression") ||
            history.includes("none")
        ) &&
        (isPain === "yes" || isPain === "no") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "yes" || painStay === "no") &&
        (betterWorse === "no")
    ) {
        return "sepsis"
    }

    {/* Tension Pneumothorax */}
    if (
        (complaint === "difficulty_breathing" || complaint === "chest_pain") &&
        (chestPain === "" || chestPain === "sharp" || chestPain === "pressure") &&
        (breathing === "yes") &&
        (lung === "diminished_affected_side") &&
        (pulse === "high") &&
        (respiratoryRate === "high") &&
        (bloodPressure === "low" || bloodPressure === "closing-in") &&
        (spo2 === "low") &&
        (skin === "pale" || skin === "cyanotic" || skin === "clammy") &&
        (onset === "sudden") &&
        (
            finding === "tracheal_deviation" ||
            finding === "jvd" ||
            finding === "normal"
        ) &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "") &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "yes" || pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("shortness_breath") ||
            symptoms.includes("anxiety") ||
            symptoms.includes("chest_tightness")
        ) &&
        (
            history.includes("chest_trauma") ||
            history.includes("recent_surgery") ||
            history.includes("none")
        ) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "yes") &&
        (betterWorse === "breathing_worse")
    ) {
        return "tension_pneumo"
    }
    {/* hypoglycemia  */}
    if (
        (complaint === "altered_mental_status" || complaint === "weakness" || complaint === "head_ache") &&
        (chestPain === "") &&
        (breathing === "no") &&
        (lung === "") &&
        (pulse === "normal" || pulse === "high") &&
        (respiratoryRate === "normal") &&
        (bloodPressure === "normal" || bloodPressure === "slight-low") &&
        (spo2 === "normal") &&
        (skin === "pale" || skin === "clammy" || skin === "normal") &&
        (onset === "sudden") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "") &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "low") &&
        (strokeScale === "negative") &&
        (
            symptoms.includes("weakness") ||
            symptoms.includes("confusion") ||
            symptoms.includes("sweating") ||
            symptoms.includes("anxiety") ||
            symptoms.includes("dizziness") ||
            symptoms.includes("headache")
        ) &&
        (
            history.includes("diabetes") ||
            history.includes("hypoglycemia") ||
            history.includes("none")
        ) &&
        (isPain === "no") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "no") &&
        (betterWorse === "no")
    ) {
        return "hypoglycemia"
    }
    {/* HYPERGLYCEMIA – DKA / HHS  */}
    if (
        (complaint === "altered_mental_status" || complaint === "weakness" || complaint === "abdominal_pain" || complaint === "vomit") &&
        (chestPain === "") &&
        (breathing === "yes" || breathing === "no") &&
        (lung === "") &&
        (pulse === "high") &&
        (respiratoryRate === "high") &&
        (bloodPressure === "normal" || bloodPressure === "slight-low") &&
        (spo2 === "normal") &&
        (skin === "flushed" || skin === "dry" || skin === "normal") &&
        (onset === "gradual") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "" || quadrant === "upper_middle" || quadrant === "lower_middle") &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "high" || bgl === "very_high") &&
        (strokeScale === "negative") &&
        (
            symptoms.includes("nausea") ||
            symptoms.includes("vomit") ||
            symptoms.includes("weakness") ||
            symptoms.includes("confusion") ||
            symptoms.includes("abdominal_pain") ||
            symptoms.includes("thirst")
        ) &&
        (
            history.includes("diabetes") ||
            history.includes("none")
        ) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "yes") &&
        (betterWorse === "no")
    ) {
        return "hyperglycemia_dka_hhs"
    }

    {/* ADRENAL CRISIS */}
    if (
        (complaint === "weakness" || complaint === "altered_mental_status" || complaint === "abdominal_pain" || complaint === "vomit") &&
        (chestPain === "") &&
        (breathing === "no") &&
        (lung === "") &&
        (pulse === "high") &&
        (respiratoryRate === "normal" || respiratoryRate === "high") &&
        (bloodPressure === "low" || bloodPressure === "slight-low" || bloodPressure === "closing-in") &&
        (spo2 === "normal") &&
        (skin === "pale" || skin === "clammy") &&
        (onset === "sudden" || onset === "gradual") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "" || quadrant === "upper_middle" || quadrant === "lower_middle") &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "low" || bgl === "normal" || bgl === "high") &&
        (strokeScale === "negative") &&
        (
            symptoms.includes("weakness") ||
            symptoms.includes("nausea") ||
            symptoms.includes("vomit") ||
            symptoms.includes("fatigue") ||
            symptoms.includes("confusion") ||
            symptoms.includes("dizziness")
        ) &&
        (
            history.includes("adrenal_disorder") ||
            history.includes("recent_surgery") ||
            history.includes("none")
        ) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "yes") &&
        (betterWorse === "no")
    ) {
        return "adrenal_crisis"
    }

    {/*HYPERVENTILATION SYNDROME */}
    if (
        (complaint === "difficulty_breathing" || complaint === "anxiety" || complaint === "chest_pain") &&
        (chestPain === "" || chestPain === "sharp" || chestPain === "pressure") &&
        (breathing === "yes") &&
        (lung === "clear") &&
        (pulse === "normal" || pulse === "high") &&
        (respiratoryRate === "high") &&
        (bloodPressure === "normal" || bloodPressure === "slight-high") &&
        (spo2 === "normal") &&
        (skin === "pale" || skin === "flushed" || skin === "normal") &&
        (onset === "sudden" || onset === "fluctuating") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "") &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("shortness_breath") ||
            symptoms.includes("anxiety") ||
            symptoms.includes("dizziness") ||
            symptoms.includes("chest_tightness") ||
            symptoms.includes("numbness")
        ) &&
        (
            history.includes("anxiety") ||
            history.includes("none")
        ) &&
        (isPain === "yes" || isPain === "no") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "yes" || painStay === "no") &&
        (betterWorse === "breathing_worse" || betterWorse === "anxiety")
    ) {
        return "hyperventilation_syndrome"
    }

     {/*BRONCHIOLITIS */}
    if (
        (complaint === "difficulty_breathing" || complaint === "cough" || complaint === "fever") &&
        (chestPain === "") &&
        (breathing === "yes") &&
        (lung === "wheeze" || lung === "crackles" || lung === "rhonchi") &&
        (pulse === "normal" || pulse === "high") &&
        (respiratoryRate === "high") &&
        (bloodPressure === "normal" || bloodPressure === "slight-low") &&
        (spo2 === "normal" || spo2 === "low") &&
        (skin === "normal" || skin === "pale" || skin === "flushed") &&
        (onset === "gradual") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "") &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("cough") ||
            symptoms.includes("shortness_breath") ||
            symptoms.includes("fever") ||
            symptoms.includes("fatigue")
        ) &&
        (
            history.includes("recent_viral_illness") ||
            history.includes("none")
        ) &&
        (isPain === "no") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "no") &&
        (betterWorse === "no")
    ) {
        return "bronchiolitis"
}

    {/*EPIGLOTTITIS*/}
    if (
        (complaint === "difficulty_breathing" || complaint === "sore_throat" || complaint === "fever") &&
        (chestPain === "") &&
        (breathing === "yes") &&
        (lung === "clear") &&
        (pulse === "high") &&
        (respiratoryRate === "high") &&
        (bloodPressure === "normal" || bloodPressure === "slight-low") &&
        (spo2 === "normal" || spo2 === "low") &&
        (skin === "pale" || skin === "flushed") &&
        (onset === "sudden") &&
        (finding === "normal") &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "") &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("sore_throat") ||
            symptoms.includes("difficulty_breathing") ||
            symptoms.includes("fever") ||
            symptoms.includes("anxiety")
        ) &&
        (
            history.includes("recent_viral_illness") ||
            history.includes("none")
        ) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "yes") &&
        (betterWorse === "no")
    ) {
        return "epiglottitis"
    }

    {/*hemothorax */}
    if (
        (complaint === "difficulty_breathing" || complaint === "chest_pain") &&
        (chestPain === "" || chestPain === "sharp" || chestPain === "pressure") &&
        (breathing === "yes") &&
        (lung === "diminished_affected_side") &&
        (pulse === "high") &&
        (respiratoryRate === "high") &&
        (bloodPressure === "low" || bloodPressure === "slight-low" || bloodPressure === "closing-in") &&
        (spo2 === "low") &&
        (skin === "pale" || skin === "clammy") &&
        (onset === "sudden") &&
        (
            finding === "tracheal_deviation" ||
            finding === "normal"
        ) &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "") &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("shortness_breath") ||
            symptoms.includes("anxiety") ||
            symptoms.includes("chest_tightness") ||
            symptoms.includes("weakness")
        ) &&
        (
            history.includes("chest_trauma") ||
            history.includes("recent_surgery") ||
            history.includes("none")
        ) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "yes") &&
        (betterWorse === "breathing_worse")
    ) {
        return "hemothorax"
    }

    {/*PNEUMOTHORAX */}
    if (
        (complaint === "difficulty_breathing" || complaint === "chest_pain") &&
        (chestPain === "" || chestPain === "sharp" || chestPain === "pressure") &&
        (breathing === "yes") &&
        (lung === "diminished_affected_side") &&
        (pulse === "high") &&
        (respiratoryRate === "high") &&
        (bloodPressure === "low" || bloodPressure === "slight-low" || bloodPressure === "closing-in") &&
        (spo2 === "low") &&
        (skin === "pale" || skin === "cyanotic" || skin === "clammy") &&
        (onset === "sudden") &&
        (
            finding === "tracheal_deviation" ||
            finding === "normal"
        ) &&
        (numWeek === "") &&
        (numPregnancy === "") &&
        (headPosition === "") &&
        (gbs === "") &&
        (numBabies === "") &&
        (birthsNatural === "") &&
        (quadrant === "") &&
        (radiateBack === "no") &&
        (swelling === "") &&
        (pulsusParadoxus === "no") &&
        (bgl === "") &&
        (strokeScale === "") &&
        (
            symptoms.includes("shortness_breath") ||
            symptoms.includes("anxiety") ||
            symptoms.includes("chest_tightness")
        ) &&
        (
            history.includes("chest_trauma") ||
            history.includes("recent_surgery") ||
            history.includes("none")
        ) &&
        (isPain === "yes") &&
        (pain === "") &&
        (radiate === "no") &&
        (painStay === "yes") &&
        (betterWorse === "breathing_worse")
    ) {
        return "pneumothorax"
    }


    return "No Matching Diagnosis";
};