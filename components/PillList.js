import React from "react";
import { Trans } from "next-i18next";

export default function PillList({ t, items, backgroundColor = "#f6f7fb" }) {

  return (
    <div className="tick-pills mt-4 mt-sm-0">
      {items.map((item, index) => (
        <div key={index} style={{backgroundColor}}>
          <i className="bi bi-check-square-fill"></i>
          <div>
            <Trans t={t} i18nKey={item} />
          </div>
        </div>
      ))}
    </div>
  );
}
