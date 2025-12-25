import React, { useState, useEffect } from "react";
import {
  RespData,
  CardiacData,
  AbdominalData,
  AlteredData,
  ObgynData,
  BurnsData,
  TraumaData
} from "./study_data";
import "../style/main_study.css";

function AllStudy() {
  const routeList = {
    // resp
    "/learn/respiratory/asthma": RespData.find(item => item.name === "Asthma"),
    "/learn/respiratory/anaphylaxis": RespData.find(item => item.name === "Anaphylaxis"),
    "/learn/respiratory/copd": RespData.find(item => item.name === "Copd"),
    "/learn/respiratory/croup": RespData.find(item => item.name === "Croup"),
    "/learn/respiratory/bronchitis": RespData.find(item => item.name === "Bronchitis"),
    "/learn/respiratory/pneumonia": RespData.find(item => item.name === "Pneumonia"),
    "/learn/respiratory/emphysema": RespData.find(item => item.name === "Emphysema"),
    //obgyn
    "/learn/obgyn/normal-birth": ObgynData.find(item => item.name === "Normal Childbirth (Imminent Delivery)"),
    "/learn/obgyn/eclampsia": ObgynData.find(item => item.name === "Preeclampsia & Eclampsia"),
    "/learn/obgyn/placenta-previa": ObgynData.find(item => item.name === "Placenta Previa"),
    "/learn/obgyn/abruptio": ObgynData.find(item => item.name === "Abruptio Placentae"),
    "/learn/obgyn/nuchal-cord": ObgynData.find(item => item.name === "Nuchal Cord & Prolapsed Cord"),
    "/learn/obgyn/gbs": ObgynData.find(item => item.name === "GBS (Group B Strep)"),
    "/learn/obgyn/gestational-diabetes": ObgynData.find(item => item.name === "Gestational Diabetes"),
    //cardiac 
    "/learn/cardiac/mi": CardiacData.find(item => item.name === "Myocardial Infarction (Heart Attack)"),
    "/learn/cardiac/chf": CardiacData.find(item => item.name === "Congestive Heart Failure (CHF)"),
    "/learn/cardiac/angina": CardiacData.find(item => item.name === "Angina Pectoris"),
    "/learn/cardiac/aortic": CardiacData.find(item => item.name === "Aortic Dissection"),
    "/learn/cardiac/tamponade": CardiacData.find(item => item.name === "Cardiac Tamponade"),
    "/learn/cardiac/p-edema": CardiacData.find(item => item.name === "Pulmonary Edema"),
    "/learn/cardiac/pe": CardiacData.find(item => item.name === "Pulmonary Embolism (PE)"),
    //abdominal
    "/learn/abdominal/aaa": AbdominalData.find(item => item.name === "AAA (Abdominal Aortic Aneurysm)"),
    "/learn/abdominal/appendicitis": AbdominalData.find(item => item.name === "Appendicitis"),
    "/learn/abdominal/pancreatitis": AbdominalData.find(item => item.name === "Pancreatitis"),
    "/learn/abdominal/hernia": AbdominalData.find(item => item.name === "Hernia"),
    "/learn/abdominal/diverticulitis": AbdominalData.find(item => item.name === "Diverticulitis"),
    "/learn/abdominal/diverticulosis": AbdominalData.find(item => item.name === "Diverticulitis & Diverticulosis"),
    "/learn/abdominal/renalColic": AbdominalData.find(item => item.name === "Renal Colic (Kidney Stones)"),
    "/learn/abdominal/cholecystitis": AbdominalData.find(item => item.name === "Cholecystitis (Gallstones)"),
    "/learn/abdominal/utiPyelonephritis": AbdominalData.find(item => item.name === "UTI & Pyelonephritis"),
    //ams
    "/learn/ams/hypoglycemia": AlteredData.find(item => item.name === "Hypoglycemia (Low Blood Sugar)"),
    "/learn/ams/hyperglycemia": AlteredData.find(item => item.name === "Hyperglycemia (High Blood Sugar / DKA)"),
    "/learn/ams/cva-stroke":   AlteredData.find(item => item.name === "CVA (Stroke / Brain Attack)"),
    "/learn/ams/tia":         AlteredData.find(item => item.name === "TIA (Transient Ischemic Attack)"),
    "/learn/ams/meningitis":  AlteredData.find(item => item.name === "Meningitis"),
    "/learn/ams/seizures":    AlteredData.find(item => item.name === "Seizures (Post-Ictal State)"),
    //trauma
    "/learn/trauma/pneumothorax":      TraumaData.find(item => item.name === "Pneumothorax (Collapsed Lung)"),
    "/learn/trauma/sucking-chest":     TraumaData.find(item => item.name === "Sucking Chest Wound"),
    "/learn/trauma/flail-chest":       TraumaData.find(item => item.name === "Flail Chest"),
    "/learn/trauma/arterial-bleed":    TraumaData.find(item => item.name === "Arterial Bleed (Major Bleeding)"),
    "/learn/trauma/shock":             TraumaData.find(item => item.name === "Hypovolemic Shock"),
    "/learn/trauma/amputation":        TraumaData.find(item => item.name === "Amputation"),
    "/learn/trauma/evisceration":      TraumaData.find(item => item.name === "Evisceration"),
    "/learn/trauma/drowning":          TraumaData.find(item => item.name === "Drowning"),
    "/learn/trauma/cardiac-contusion":  TraumaData.find(item => item.name === "Cardiac Contusion"),
    "/learn/trauma/simple-cut":        TraumaData.find(item => item.name === "Simple Cut (Laceration)"),
    //burns
    // Burns Route Mapping
    "/learn/burns/superficial":       BurnsData.find(item => item.name === "Superficial (1st Degree)"),
    "/learn/burns/partial-thickness": BurnsData.find(item => item.name === "Partial-Thickness (2nd Degree)"),
    "/learn/burns/full-thickness":    BurnsData.find(item => item.name === "Full-Thickness (3rd Degree)"),
    "/learn/burns/inhalation":        BurnsData.find(item => item.name === "Inhalation Burns"),
    "/learn/burns/chemical":          BurnsData.find(item => item.name === "Chemical Burns"),
    "/learn/burns/electrical":        BurnsData.find(item => item.name === "Electrical Burns"),
     

  };

  const currentRoute = window.location.pathname;

  // null when nothing is matched
  const data = routeList[currentRoute] || null;

  // loading + message
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      if (!data) {
        setMessage("Nothing found");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [data]);

  // -------------------------------------------------
  // UI STATES
  // -------------------------------------------------

  // 1) Loading for guaranteed 2 seconds
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-pulse"></div>
        <h1 className="loading-text loading-dots">{message}</h1>
      </div>
    );
  }

  // 2) After loading: no match found
  if (!data) {
    return (
      <div className="not-found">
        🚑 {message}
      </div>
    );
  }

  // 3) After loading and data exists: show content with fade animation
  return (
    <div className="medical-container fade-in-content">
      <header className="protocol-header">
        <h1 className="protocol-title">{data.name}</h1>
        <div className="emergency-badge">Emergency Protocol</div>
      </header>

      <main className="protocol-body">
        <section className="info-section">
          <div className="section-header">
            <span className="icon">🔍</span>
            <h2>Pathophysiology</h2>
          </div>
          <div className="card info-card">
            <p>{data.info}</p>
          </div>
        </section>

        <section className="treatment-section">
          <div className="section-header">
            <span className="icon">🚑</span>
            <h2>EMT Interventions</h2>
          </div>
          <div className="card treat-card">
            <p>{data.treat}</p>
          </div>
        </section>
      </main>

      <footer className="protocol-footer">
        <p>Always follow local medical director protocols.</p>
      </footer>
    </div>
  );
}

export default AllStudy;
