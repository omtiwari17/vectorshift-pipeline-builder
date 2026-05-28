// outputNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [values, setValues] = useState({
    outputName: data?.outputName || id.replace('customOutput-', 'output_'),
    outputType: data?.outputType || 'Text'
  });

  const handleChange = (key, value) => {
    setValues(prev => ({ ...prev, [key]: value }));
  };

  return (
    <BaseNode
      id={id}
      data={{ ...values, onChange: handleChange }}
      title="Output"
      fields={[
        { key: 'outputName', label: 'Name', type: 'text', default: values.outputName },
        { key: 'outputType', label: 'Type', type: 'select', default: 'Text', options: ['Text', 'Image'] }
      ]}
      inputHandles={[{ id: 'value' }]}
    />
  );
};