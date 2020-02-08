import React from 'react';

const ShippingFee = (props) => {
    let feeText;
    let classText;
    
    (props.wavedShipping ? feeText = 'Shipping Fee: $5.50' : feeText = '+ Shipping Fee: $5.50');
    (props.wavedShipping ? classText = 'cart-item-li free-shipping' : classText = 'cart-item-li')

    return (
        <li className={classText}>{feeText}</li>
    )
}

export default ShippingFee;