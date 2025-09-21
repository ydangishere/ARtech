import React, { FunctionComponent, useEffect, useState } from 'react';

const HeaderTitle: FunctionComponent = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window?.innerWidth || 390);
  
  // Tính toán kích thước dựa trên viewport width
  const mobileWidth = 366;
  const mobileHeight = 28;
  const desktopWidth = 458.72;
  const desktopHeight = 35.09;
  
  // Tính tỷ lệ scale dựa vào cửa sổ hiện tại
  const calculateSize = () => {
    if (windowWidth <= 390) {
      return { width: mobileWidth, height: mobileHeight };
    } else if (windowWidth >= 1440) {
      return { width: desktopWidth, height: desktopHeight };
    } else {
      // Scale theo tỷ lệ từ mobile đến desktop
      const widthScale = mobileWidth + (desktopWidth - mobileWidth) * ((windowWidth - 390) / (1440 - 390));
      const heightScale = mobileHeight + (desktopHeight - mobileHeight) * ((windowWidth - 390) / (1440 - 390));
      return { width: widthScale, height: heightScale };
    }
  };
  
  const [size, setSize] = useState(calculateSize());
  
  useEffect(() => {
    // Cập nhật kích thước khi resize window
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setSize(calculateSize());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);
  
  // Style cho container
  const containerStyle = {
    width: `${size.width}px`,
    height: `${size.height}px`,
    position: 'relative' as 'relative',
    margin: '0 auto'
  };
  
  // Style cho image
  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain' as 'contain'
  };
  
  // Style cho text
  const textStyle = {
    position: 'absolute' as 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: '0.03em',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
    fontFamily: 'Program OT Bold',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: '16px'
  };

  return (
    <div style={containerStyle}>
      <img 
        src="/ARtech/assets/headerTitle/header-bg.png" 
        style={imageStyle} 
        alt="Header background" 
      />
      <div style={textStyle}>SPECIAL STORE</div>
    </div>
  );
};

export default HeaderTitle;
