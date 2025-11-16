import Image from 'next/image';

export default function Header() {
  return (
    <header style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '10px 20px', 
      backgroundColor: '#f8f9fa' 
    }}>
      <h1 style={{ 
        fontSize: '24px', 
        marginBottom: '2px', // Further reduce margin to minimize the gap
        textAlign: 'center' 
      }}>
        Wisdom of Adi Shankaracharya
      </h1>
      <Image
        src="/om-symbol.jpg"
        alt="Om Logo"
        width={0} // Set to 0 for responsive sizing
        height={0} // Set to 0 for responsive sizing
        sizes="(max-width: 768px) 150px, (max-width: 1200px) 200px, 300px" // Define responsive sizes
        style={{
          width: 'auto',
          height: 'auto',
          maxWidth: '100%',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      />
    </header>
  );
}
