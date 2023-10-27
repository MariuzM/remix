import { Link } from '@remix-run/react';

export const Nav = () => {
  return (
    <nav
      style={{
        display: 'flex',
        fontFamily: 'system-ui, sans-serif',
        gap: '1rem',
        lineHeight: '1.8',
      }}
    >
      <a href="/">Home</a>
      <a href="/about">About</a>

      <Link to="/">Home (client rendered)</Link>
      <Link to="/about">About (client rendered)</Link>
    </nav>
  );
};
