import { useState } from 'react';
import './App.css';
import Spirograph from './Spirograph';

interface SpirographParams {
  R1: number;
  r2: number;
  l: number;
  red: number;
  green: number;
  blue: number;
}

function App() {
  const [params, setParams] = useState<SpirographParams>({ R1: 150, r2: 65, l: 0.8, red: 0, green: 255, blue: 200 });
  const [draft, setDraft] = useState({ R1: '150', r2: '65', l: '0.8', red: '0', green: '255', blue: '200' });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const R1 = parseFloat(draft.R1);
    const r2 = parseFloat(draft.r2);
    const l = parseFloat(draft.l);
    const red = Math.max(0, Math.min(255, parseInt(draft.red)));
    const green = Math.max(0, Math.min(255, parseInt(draft.green)));
    const blue = Math.max(0, Math.min(255, parseInt(draft.blue)));
    if (!isNaN(R1) && !isNaN(r2) && !isNaN(l)) {
      setParams({ R1, r2, l, red, green, blue });
    }
  }

  return (
    <div className="app-container">
      <div className="bg-grid" />
      <div className="content">
        <div className="form-section">
          <h1 className="title">SPIROGRAPH_GENERATOR</h1>
          <form onSubmit={handleSubmit} className="control-panel">
            <div className="input-grid">
              <div className="input-group">
                <label>R1</label>
                <input
                  type="text"
                  value={draft.R1}
                  onChange={(e) => setDraft((d) => ({ ...d, R1: e.target.value }))}
                  className="control-input"
                />
              </div>
              <div className="input-group">
                <label>r2</label>
                <input
                  type="text"
                  value={draft.r2}
                  onChange={(e) => setDraft((d) => ({ ...d, r2: e.target.value }))}
                  className="control-input"
                />
              </div>
              <div className="input-group">
                <label>l</label>
                <input
                  type="text"
                  value={draft.l}
                  onChange={(e) => setDraft((d) => ({ ...d, l: e.target.value }))}
                  className="control-input"
                />
              </div>
            </div>
            <div className="color-grid">
              <div className="color-group">
                <label>RED</label>
                <input
                  type="text"
                  value={draft.red}
                  maxLength={3}
                  onChange={(e) => setDraft((d) => ({ ...d, red: e.target.value }))}
                  className="color-input red-input"
                />
              </div>
              <div className="color-group">
                <label>GREEN</label>
                <input
                  type="text"
                  value={draft.green}
                  maxLength={3}
                  onChange={(e) => setDraft((d) => ({ ...d, green: e.target.value }))}
                  className="color-input green-input"
                />
              </div>
              <div className="color-group">
                <label>BLUE</label>
                <input
                  type="text"
                  value={draft.blue}
                  maxLength={3}
                  onChange={(e) => setDraft((d) => ({ ...d, blue: e.target.value }))}
                  className="color-input blue-input"
                />
              </div>
            </div>
            <button type="submit" className="draw-button">RENDER</button>
          </form>
        </div>
        <div className="canvas-section">
          <Spirograph R1={params.R1} r2={params.r2} l={params.l} red={params.red} green={params.green} blue={params.blue} />
        </div>
      </div>
    </div>
  );
}

export default App;
