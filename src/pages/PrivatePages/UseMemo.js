import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function multiCOunt() {
      return count * 2;
    },
    [count]
  );

  return <div>
	  <h2>{multiCountMemo}</h2>
	  <button onClick={()=>{setCount(count + 1)}}>Increase Count</button>
	  <h2>{item}</h2>
	  <button onClick={()=>{setItem(item + 1)}}>Increase Item</button>
	  </div>;
}

export default UseMemo;
