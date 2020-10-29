import React from 'react';

const styles = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto',
  gap: '8px',
};
export default function TrueGrid({children}) {
  return <div style={styles}>{children}</div>;
}
