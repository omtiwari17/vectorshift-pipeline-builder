import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#111827' }}>
      
      {/* Header */}
      <div style={{
        height: '48px',
        background: '#0f172a',
        borderBottom: '1px solid #1e293b',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        gap: '10px',
        flexShrink: 0
      }}>
        <div style={{
          width: '24px', height: '24px',
          background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
          borderRadius: '6px'
        }} />
        <span style={{ fontWeight: '600', fontSize: '15px', color: '#f1f5f9', letterSpacing: '0.3px' }}>
          VectorShift
        </span>
        <span style={{ color: '#334155', margin: '0 4px' }}>|</span>
        <span style={{ fontSize: '13px', color: '#64748b' }}>Pipeline Builder</span>
      </div>

      {/* Toolbar */}
      <PipelineToolbar />

      {/* Canvas */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <PipelineUI />
      </div>

      {/* Submit */}
      <SubmitButton />
    </div>
  );
}

export default App;
