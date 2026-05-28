import { DraggableNode } from './draggableNode';

const nodeConfig = [
  { type: 'customInput',  label: 'Input',     icon: '⤵', color: '#38bdf8' },
  { type: 'llm',          label: 'LLM',        icon: '◈',  color: '#818cf8' },
  { type: 'customOutput', label: 'Output',     icon: '⤴', color: '#34d399' },
  { type: 'text',         label: 'Text',       icon: '¶',  color: '#94a3b8' },
  { type: 'api',          label: 'API',        icon: '⚡', color: '#fbbf24' },
  { type: 'filter',       label: 'Filter',     icon: '⊘',  color: '#f87171' },
  { type: 'note',         label: 'Note',       icon: '◻',  color: '#64748b' },
  { type: 'transform',    label: 'Transform',  icon: '⇄',  color: '#c084fc' },
  { type: 'timer',        label: 'Timer',      icon: '◷',  color: '#fb923c' },
];

export const PipelineToolbar = () => (
  <div style={{
    background: '#0f172a',
    borderBottom: '1px solid #1e293b',
    padding: '8px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexShrink: 0
  }}>
    <span style={{ fontSize: '10px', fontWeight: '600', color: '#475569', letterSpacing: '1px' }}>
      NODES
    </span>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
      {nodeConfig.map(node => (
        <DraggableNode key={node.type} type={node.type} label={node.label} icon={node.icon} color={node.color} />
      ))}
    </div>
  </div>
);