import { QRCodeCanvas } from 'qrcode.react';

const InstagramQR = ({ username }) => {

  if (!username) {
    return null;
  }
  
  const defaultLogo = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png";
  
  const qrValue = `https://instagram.com/${username}`;

  return (
    <div style={styles.container}>
      <div style={styles.qrWrapper}>
        <QRCodeCanvas
          value={qrValue}
          size={256}
          bgColor={"#ffffff"}
          fgColor={"#000000"}
          level={"H"} 
          marginSize={true}
          imageSettings={{
            src: defaultLogo,
            x: undefined,
            y: undefined,
            height: 50,
            width: 50,
            excavate: true,
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  qrWrapper: {
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    padding: '10px', 
    background: 'white',
  },
};

export default InstagramQR;