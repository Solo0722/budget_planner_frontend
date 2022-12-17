import React from "react";
import { Empty } from "antd";

const EmptyState = ({ ref3 }: any) => {
  return (
    <div ref={ref3}>
      <Empty
        image="/assets/empty.svg"
        imageStyle={{
          height: 200,
        }}
        description={<span>No budgets available</span>}
      ></Empty>
    </div>
  );
};

export default EmptyState;
