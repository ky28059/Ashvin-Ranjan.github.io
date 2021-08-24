// React
import React from "react";

const TranslatedText = ({ translate, text, className, allowLowercase }) => {
  console.log();
  return (
    <span className={className}>
      {(allowLowercase ? text : text.toUpperCase())
        .split("")
        .map((v) => translate[v] ?? v)
        .join("")}
    </span>
  );
};

export default TranslatedText;
