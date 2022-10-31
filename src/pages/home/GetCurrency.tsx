import React from "react";
import { Input, Segmented } from "antd";

const GetCurrency: React.FC = () => {
  return (
    <div>
      Получаете!
      <Input size="large" placeholder="large size" suffix="DOGE" />
      <Segmented
        width={100}
        options={[
          "Daily",
          { label: "Weekly", value: "Weekly", disabled: false },
          "Monthlsssyrrrrrre1131",
          { label: "Quarterly", value: "Quarterly", disabled: true },
          "Yearly",
        ]}
      />
      <div>asdad22</div>
    </div>
  );
};

export default GetCurrency;
