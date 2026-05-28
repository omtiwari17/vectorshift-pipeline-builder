import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [values, setValues] = useState({ note: data?.note || 'Add a note...' });
  const handleChange = (key, value) => setValues(prev => ({ ...prev, [key]: value }));

  return (
    <BaseNode
      id={id}
      data={{ ...values, onChange: handleChange }}
      title="Note"
      fields={[
        { key: 'note', label: 'Note', type: 'text', default: values.note }
      ]}
    />
  );
};