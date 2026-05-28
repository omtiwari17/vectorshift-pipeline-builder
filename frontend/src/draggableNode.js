export const DraggableNode = ({ type, label, icon, color }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType }));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, type)}
      style={{
        cursor: 'grab',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        padding: '5px 10px',
        borderRadius: '5px',
        background: '#1e293b',
        border: '1px solid #334155',
        color: '#cbd5e1',
        fontSize: '12px',
        fontWeight: '500',
        userSelect: 'none',
        transition: 'border-color 0.15s, color 0.15s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.color = '#f1f5f9';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#334155';
        e.currentTarget.style.color = '#cbd5e1';
      }}
    >
      <span style={{ color, fontSize: '13px' }}>{icon}</span>
      {label}
    </div>
  );
};