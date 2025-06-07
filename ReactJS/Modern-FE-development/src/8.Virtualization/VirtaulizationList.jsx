import React from "react";

import { FixedSizeList } from "react-window";

const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

const VirtualizedList = () => {
  return (
    <FixedSizeList
      height={300}
      width={300}
      itemCount={items.length}
      itemSize={50}
    >
      {({ index, style }) => <div style={style}>{items[index]}</div>}
    </FixedSizeList>
  );
};

export default VirtualizedList;
