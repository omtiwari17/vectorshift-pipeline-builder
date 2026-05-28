import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const [values, setValues] = useState({
    url: data?.url || 'https://api.example.com',
    method: data?.method || 'GET'
  });
  const handleChange = (key, value) => setValues(prev => ({ ...prev, [key]: value }));

  return (
    <BaseNode
      id={id}
      data={{ ...values, onChange: handleChange }}
      title="API Call"
      fields={[
        { key: 'url', label: 'URL', type: 'text', default: values.url },
        { key: 'method', label: 'Method', type: 'select', default: 'GET', options: ['GET', 'POST', 'PUT', 'DELETE'] }
      ]}
      inputHandles={[{ id: 'trigger' }]}
      outputHandles={[{ id: 'response' }]}
    />
  );
};