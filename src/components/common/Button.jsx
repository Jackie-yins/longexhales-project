import PropTypes from 'prop-types';

export default function Button({ children, variant='primary', ...props }) {
  const base = 'px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2';
  const variants = {
    primary: 'bg-brand text-white hover:bg-brand-600',
    secondary: 'bg-white text-brand border border-brand',
    outline: 'bg-transparent text-brand border border-gray-300'
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}

