// llmNode.js
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      fields={[
        { key: 'info', label: 'Model', type: 'select', default: 'gpt-4', options: ['gpt-4', 'gpt-3.5', 'claude-3'] }
      ]}
      inputHandles={[
        { id: 'system', style: { top: '33%' } },
        { id: 'prompt', style: { top: '66%' } }
      ]}
      outputHandles={[{ id: 'response' }]}
    />
  );
};