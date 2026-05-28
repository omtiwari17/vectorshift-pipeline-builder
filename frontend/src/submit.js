import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { useState } from 'react';

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({ nodes: state.nodes, edges: state.edges }),
    shallow
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await response.json();

      alert(
        `Pipeline Analysis\n\n` +
        `Nodes:    ${data.num_nodes}\n` +
        `Edges:    ${data.num_edges}\n` +
        `Is DAG:   ${data.is_dag ? '✅ Yes' : '❌ No (contains a cycle)'}`
      );
    } catch (err) {
      alert('Could not connect to backend. Make sure FastAPI is running on port 8000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      background: '#0f172a',
      borderTop: '1px solid #1e293b',
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0
    }}>
      <span style={{ fontSize: '12px', color: '#475569' }}>
        {nodes.length} node{nodes.length !== 1 ? 's' : ''} · {edges.length} edge{edges.length !== 1 ? 's' : ''}
      </span>
      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        style={{
          background: loading ? '#334155' : '#38bdf8',
          color: '#0f172a',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 28px',
          fontSize: '13px',
          fontWeight: '700',
          cursor: loading ? 'not-allowed' : 'pointer',
          letterSpacing: '0.3px',
          transition: 'background 0.15s'
        }}
        onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#7dd3fc'; }}
        onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#38bdf8'; }}
      >
        {loading ? 'Analyzing...' : '▶ Run Pipeline'}
      </button>
    </div>
  );
};