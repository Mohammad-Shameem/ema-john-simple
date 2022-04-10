import React from 'react';
import "./ReviewItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faRemove, faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (props) => {
    const { name, price, shipping, quantity, img } = props.product;
    const { handleRemoveProduct } = props;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className='product-name' title={name}>   {/* ekhane title deyar karon holo amra amder boro namegulake choto kore felchi.tai jeno oi name er upor hover kole full name ta dekhte pare sei jonno ei title ta kora. */}
                        {name.length > 20 ? name.slice(0, 20) + ("...") : name}    {/* ekhane ekt ... wtring deyar mane holo amra je ei nameta choto korlam eitar indication manushke dite hobe. tai eita kora. */}
                    </p>
                    <p><small>Price: <span>$ {price}</span></small></p>
                    <p><small>Shipping: $ {shipping}</small></p>
                    <p><small>Quantity: $ {quantity}</small></p>

                </div>
                <div className="delete-container">
                    <button className='delete-button' onClick={() => handleRemoveProduct(props.product)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>  {/* onek somoy figma te bole deya thake je font name tai kheyal rakhte hobe. */}
                    </button>
                </div>

            </div>
            {props.children}

        </div>
    );
};

export default ReviewItem;