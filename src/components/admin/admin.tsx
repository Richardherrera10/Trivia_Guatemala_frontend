import React, { FC } from 'react';
import styles from './admin.module.css';

interface AdminProps {}

const Admin: FC<AdminProps> = () => (
  <div className={styles.Admin} data-testid="Admin">
    Admin Component
  </div>
);

export default Admin;
