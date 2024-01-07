//about 仮想DOM
/*実際のDOM（Document Object Model）を抽象化したもので、
ReactがUIをより効率的に更新できるようにするためのメカニズム */

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
/**例：カウンターアプリケーション
このコードでは、useState フックを使って count という状態を管理し、ボタンをクリックするたびにその値を増やします。
状態が更新されると、Reactは新しい仮想DOMを生成し、変更があった部分（この場合は <p> タグ内のテキスト）だけを実際のDOMに反映します。
 */