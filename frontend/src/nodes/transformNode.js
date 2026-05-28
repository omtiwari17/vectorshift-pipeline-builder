import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [values, setValues] = useState({ format: data?.format || 'JSON' });
  const handleChange = (key, value) => setValues(prev => ({ ...prev, [key]: value }));

  return (
    <BaseNode
      id={id}
      data={{ ...values, onChange: handleChange }}
      title="Transform"
      fields={[
        { key: 'format', label: 'Format', type: 'select', default: 'JSON', options: ['JSON', 'XML', 'CSV', 'Text'] }
      ]}
      inputHandles={[{ id: 'input' }]}
      outputHandles={[{ id: 'output' }]}
    />
  );
};