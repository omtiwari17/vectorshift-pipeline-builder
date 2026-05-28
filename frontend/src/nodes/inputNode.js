// inputNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [values, setValues] = useState({
    inputName: data?.inputName || id.replace('customInput-', 'input_'),
    inputType: data?.inputType || 'Text'
  });

  const handleChange = (key, value) => {
    setValues(prev => ({ ...prev, [key]: value }));
  };

  return (
    <BaseNode
      id={id}
      data={{ ...values, onChange: handleChange }}
      title="Input"
      fields={[
        { key: 'inputName', label: 'Name', type: 'text', default: values.inputName },
        { key: 'inputType', label: 'Type', type: 'select', default: 'Text', options: ['Text', 'File'] }
      ]}
      outputHandles={[{ id: 'value' }]}
    />
  );
};