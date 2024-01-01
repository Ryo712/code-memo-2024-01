// pages/index.js
//ボタンクリック「Happy New Year!」表示
import React, { useState } from 'react';

const NewYearApp = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
  };

  return (
    <div>
      <h1>New Year Countdown App</h1>
      <p>Click the button to reveal the New Year message!</p>

      {/* ボタンがクリックされたときに handleButtonClick 関数が呼ばれる */}
      <button onClick={handleButtonClick}>Show New Year Message</button>

      {/* メッセージを表示 */}
      {showMessage && (
        <div className="new-year-message">
          <p>Happy New Year! 2024!</p>
        </div>
      )}

      <style jsx>{`
        .new-year-message {
          margin-top: 20px;
          padding: 10px;
          background-color: #dff0d8;
          border: 1px solid #3c763d;
          border-radius: 4px;
        }
      `}</style>
/*style jsx内でスタイリングを定義 */      
    </div>
  );
};

export default NewYearApp;
