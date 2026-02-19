import { useScrollPosition } from '../hook/useScrollPosition';

function BackToTop() {

  const showButton = useScrollPosition(300);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        padding: '12px 16px',
        fontSize: '18px',
        borderRadius: '50px',
        border: 'none',
        background: '#0066cc',
        color: 'white',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        zIndex: 1000
      }}
    >
      ↑ Top
    </button>
  );
}

export default BackToTop;
