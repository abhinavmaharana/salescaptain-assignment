import React from 'react'

interface Props {
    brandImg: string;
    styles: React.CSSProperties;
    className: string;
}
  
const BrandCards: React.FC<Props> = ({
    brandImg,
    styles,
    className
}) =>  {
  return (
    <div className={className} style={styles || {}}>
        <img src={brandImg} alt="" />
    </div>
  )
}

export default BrandCards