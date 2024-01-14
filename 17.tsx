import React, { useState } from 'react';
import './App.css';

function App() {
  // フォームのデータを管理するための状態（state）
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // inputの変更をハンドルする関数
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // フォームの送信をハンドルする関数
  const handleSubmit = (e) => {
    e.preventDefault(); // フォームのデフォルト送信を防ぐ
    console.log('送信されたフォームデータ:', formData);
    // 送信に関する処理をここに追加
  };

  // UIのレンダリング
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              名前:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              メール:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <button type="submit">送信</button>
        </form>
      </header>
    </div>
  );
}

export default App;
