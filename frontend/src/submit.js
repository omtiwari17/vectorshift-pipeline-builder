import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({ nodes: state.nodes, edges: state.edges }),
    shallow
  );

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
        style={{
          background: '#38bdf8',
          color: '#0f172a',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 28px',
          fontSize: '13px',
          fontWeight: '700',
          cursor: 'pointer',
          letterSpacing: '0.3px',
        }}
        onMouseEnter={e => e.currentTarget.style.background = '#7dd3fc'}
        onMouseLeave={e => e.currentTarget.style.background = '#38bdf8'}
      >
        ▶ Run Pipeline
      </button>
    </div>
  );
};