import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id, data }) => {
  const [values, setValues] = useState({
    delay: data?.delay || '5',
    unit: data?.unit || 'seconds'
  });
  const handleChange = (key, value) => setValues(prev => ({ ...prev, [key]: value }));

  return (
    <BaseNode
      id={id}
      data={{ ...values, onChange: handleChange }}
      title="Timer"
      fields={[
        { key: 'delay', label: 'Delay', type: 'text', default: values.delay },
        { key: 'unit', label: 'Unit', type: 'select', default: 'seconds', options: ['seconds', 'minutes', 'hours'] }
      ]}
      outputHandles={[{ id: 'trigger' }]}
    />
  );
};