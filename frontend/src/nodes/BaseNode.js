import { Handle, Position } from 'reactflow';

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
};

const labelStyle = {
  fontSize: '10px',
  fontWeight: '500',
  color: '#64748b',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const inputStyle = {
  background: '#0f172a',
  border: '1px solid #334155',
  borderRadius: '4px',
  color: '#e2e8f0',
  fontSize: '12px',
  padding: '4px 8px',
  outline: 'none',
  width: '100%',
};

const selectStyle = {
  ...inputStyle,
  cursor: 'pointer',
};

export const BaseNode = ({ id, data, title, fields = [], inputHandles = [], outputHandles = [], accentColor = '#38bdf8' }) => {
  return (
    <div style={{
      minWidth: '200px',
      background: '#1e293b',
      border: '1px solid #334155',
      borderRadius: '8px',
      overflow: 'visible',
      boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
    }}>
      {/* Node header */}
      <div style={{
        padding: '7px 12px',
        borderBottom: '1px solid #334155',
        display: 'flex',
        alignItems: 'center',
        gap: '7px',
        borderRadius: '8px 8px 0 0',
        background: '#162032',
      }}>
        <div style={{
          width: '6px', height: '6px',
          borderRadius: '50%',
          background: accentColor,
          flexShrink: 0
        }} />
        <span style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#94a3b8',
          letterSpacing: '0.5px',
          textTransform: 'uppercase'
        }}>
          {title}
        </span>
      </div>

      {/* Fields */}
      {fields.length > 0 && (
        <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {fields.map((field) => (
            <div key={field.key} style={fieldStyle}>
              <span style={labelStyle}>{field.label}</span>
              {field.type === 'select' ? (
                <select
                  value={data[field.key] ?? field.default}
                  onChange={(e) => data.onChange?.(field.key, e.target.value)}
                  style={selectStyle}
                >
                  {field.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  value={data[field.key] ?? field.default ?? ''}
                  onChange={(e) => data.onChange?.(field.key, e.target.value)}
                  style={inputStyle}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Input handles — left */}
      {inputHandles.map((handle) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={`${id}-${handle.id}`}
          style={handle.style || {}}
        />
      ))}

      {/* Output handles — right */}
      {outputHandles.map((handle) => (
        <Handle
          key={handle.id}
          type="source"
          position={Position.Right}
          id={`${id}-${handle.id}`}
          style={handle.style || {}}
        />
      ))}
    </div>
  );
};