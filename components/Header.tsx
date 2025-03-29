import Image from 'next/image';

export default function Header() {
  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '10px 20px', 
      backgroundColor: '#f8f9fa' 
    }}>
      <Image 
        src="/images/om-logo.png" 
        alt="Om Logo" 
        width={200} // Increased width
        height={100} // Increased height
        style={{ 
          borderRadius: '8px', 
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
        }} 
      />
    </header>
  );
}
