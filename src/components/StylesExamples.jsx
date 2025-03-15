import React from "react";

import "./StylesExamples.css";

import styles from "./StylesExamples.module.css";

const StylesExamples = () => {
  // inline styles
  const inlineStyle = {
    color: "blue",
    fontsize: "20px",
  };

  return (
    <div>
      <h2 style={inlineStyle}>Estilos inline</h2>

      {/* Estilos via arquivo de estilos */}
      <p className="text">Meu CSS</p>

      {/* estilos via CSS modules */}
      <p className={styles.textPurple}>Meu CSS modules</p>
    </div>
  );
};

export default StylesExamples;
