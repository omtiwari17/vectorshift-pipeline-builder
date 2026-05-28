import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [values, setValues] = useState({
    field: data?.field || 'value',
    operator: data?.operator || 'equals'
  });
  const handleChange = (key, value) => setValues(prev => ({ ...prev, [key]: value }));

  return (
    <BaseNode
      id={id}
      data={{ ...values, onChange: handleChange }}
      title="Filter"
      fields={[
        { key: 'field', label: 'Field', type: 'text', default: values.field },
        { key: 'operator', label: 'Op', type: 'select', default: 'equals', options: ['equals', 'contains', 'greater', 'less'] }
      ]}
      inputHandles={[{ id: 'input' }]}
      outputHandles={[{ id: 'true' }, { id: 'false' }]}
    />
  );
};