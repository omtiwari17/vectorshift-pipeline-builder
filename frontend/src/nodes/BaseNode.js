// BaseNode.js
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, title, fields, inputHandles = [], outputHandles = [] }) => {
  return (
    <div style={{
      width: 200,
      minHeight: 80,
      border: '1px solid #444',
      borderRadius: '8px',
      backgroundColor: '#1C2536',
      color: '#fff',
      padding: '10px',
      boxSizing: 'border-box'
    }}>

      {/* HEADER — just the title */}
      <div style={{
        fontWeight: 'bold',
        marginBottom: '8px',
        borderBottom: '1px solid #444',
        paddingBottom: '4px'
      }}>
        {title}
      </div>

      {/* FIELDS — whatever inputs this node needs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {fields.map((field) => (
          <label key={field.key} style={{ fontSize: '12px' }}>
            {field.label}:
            {field.type === 'select' ? (
              <select
                value={data[field.key] || field.default}
                onChange={(e) => data.onChange?.(field.key, e.target.value)}
                style={{ marginLeft: '6px', backgroundColor: '#2d3748', color: '#fff', border: '1px solid #555' }}
              >
                {field.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                value={data[field.key] || field.default || ''}
                onChange={(e) => data.onChange?.(field.key, e.target.value)}
                style={{ marginLeft: '6px', backgroundColor: '#2d3748', color: '#fff', border: '1px solid #555', borderRadius: '4px', padding: '2px 4px' }}
              />
            )}
          </label>
        ))}
      </div>

      {/* LEFT HANDLES — inputs coming in */}
      {inputHandles.map((handle) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={`${id}-${handle.id}`}
          style={handle.style || {}}
        />
      ))}

      {/* RIGHT HANDLES — outputs going out */}
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