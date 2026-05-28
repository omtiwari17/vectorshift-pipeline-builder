// textNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  // find all {{variableName}} patterns
  const getVariables = (text) => {
    const regex = /\{\{(\w+)\}\}/g;
    const vars = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      if (!vars.includes(match[1])) vars.push(match[1]);
    }
    return vars;
  };

  const variables = getVariables(currText);

  return (
    <div style={{
      minWidth: 200,
      minHeight: 80,
      border: '1px solid #444',
      borderRadius: '8px',
      backgroundColor: '#1C2536',
      color: '#fff',
      padding: '10px',
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      {/* Header */}
      <div style={{ fontWeight: 'bold', marginBottom: '8px', borderBottom: '1px solid #444', paddingBottom: '4px' }}>
        Text
      </div>

      {/* Textarea — auto resizes via rows */}
      <textarea
        value={currText}
        onChange={(e) => {
          setCurrText(e.target.value);
          e.target.style.height = 'auto';
          e.target.style.height = e.target.scrollHeight + 'px';
        }}
        style={{
          width: '100%',
          backgroundColor: '#2d3748',
          color: '#fff',
          border: '1px solid #555',
          borderRadius: '4px',
          padding: '4px',
          resize: 'none',
          overflow: 'hidden',    // ← hides the scrollbar
          minHeight: '40px',
          boxSizing: 'border-box',
          fontFamily: 'inherit'
        }}
      />

      {/* Dynamic handles for each {{variable}} */}
      {variables.map((varName, index) => (
        <Handle
          key={varName}
          type="target"
          position={Position.Left}
          id={`${id}-${varName}`}
          style={{ top: `${((index + 1) / (variables.length + 1)) * 100}%` }}
        />
      ))}

      {/* Output handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};