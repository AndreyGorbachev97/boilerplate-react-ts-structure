import React from "react";
import { Input, Segmented } from "antd";

const GiveCurrency: React.FC = () => {
  return (
    <div>
      <div>Отдаете!</div>
      <Input size="large" placeholder="large size" suffix="DOGE" />
      <Segmented
        block
        options={[
          "Daily",
          { label: "Weekly", value: "Weekly", disabled: true },
          "Month",
          { label: "Quarterly", value: "Quarterly", disabled: true },
          "Yearly",
        ]}
      />
    </div>
  );
};

export default GiveCurrency;
