import './Foo.scss';

import React, { useState } from 'react';

export const Foo = () => {
  const [n, setN] = useState(0);
  return (
    <div>
      <button onClick={() => setN((n) => n + 2)}>+1</button>
      {n}
    </div>
  );
};
