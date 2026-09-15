import React from 'react';

export function Button({
  children,
  variant = 'primary', // 'primary', 'secondary', 'electric', 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  arrow = false,
  icon = null,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  style = {},
  ...props
}) {
  const variantClass = `btn-${variant}`;
  const sizeClass = size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '';

  return (
    <button
      type={type}
      className={`btn ${variantClass} ${sizeClass} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...props}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
      {arrow && <span className="btn-arrow" aria-hidden="true">→</span>}
    </button>
  );
}
