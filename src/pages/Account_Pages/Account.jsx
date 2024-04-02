
import React, { useState } from 'react';
import './Account.css';
import girlPhoto from '../../assets/svg/girlPhoto.svg'
import Wishlist from '../../pages/Wishlist/Wishlist';
import { Link } from 'react-router-dom';


const Account = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderDashboard = () => {
    return (
      <div className={`dashboard-content ${activeTab === 'dashboard' ? 'show' : ''}`}>
        <h2 className='account-name'>Hello Omar (not Bruce? Log out)</h2>
        <p className='dashboard-data'>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
      </div>
    );
  };

  const renderOrders = () => {
    return (
      <div className={`orders-content ${activeTab === 'orders' ? 'show' : ''}`}>
        <h2>Orders</h2>
        <div className="order-details">
          <div className="order-data-side">
            <div className="id-side">#98223</div>
            <div className="id-side-data">March 11, 2024</div>
            <div className="id-side-data">Delivered</div>
            <div className="id-side-data">$28.00</div>
            <div className="id-side-button">Track</div>
            
          </div>
          <div className="order-data-side">
            <div className="id-side">#98224</div>
            <div className="id-side-data">March 13, 2024</div>
            <div className="id-side-data">Delivered</div>
            <div className="id-side-data">$28.00</div>
            <div className="id-side-button">Track</div>
            
          </div>
          <div className="order-data-side">
            <div className="id-side">#98225</div>
            <div className="id-side-data">March 17, 2024</div>
            <div className="id-side-data">Delivered</div>
            <div className="id-side-data">$28.00</div>
            <div className="id-side-button">Track</div>
            
          </div>
        </div>
      </div>
    );
  };

  const renderAddresses = () => {
    return (
      <div className={`addresses-content ${activeTab === 'addresses' ? 'show' : ''}`}>
        <div className="addresses-all-data">
          <div className="address-data">
            <div className="address-edit-side"><h2 className='address-name'>Billing address</h2>
              <div className="edit-side"><i class="fa-solid fa-pen pen"></i>Edit</div>
            </div>

            <div className="address-details">
              Jill Dower<br />
              Nayzak Design<br />
              10 Strudwick CourtLondonSW4 6TE<br />
              United Kingdom (UK)
            </div>
          </div>
          <div className="address-data left-margin">
            <div className="address-edit-side"><h2 className='address-name'>Billing address</h2>
              <div className="edit-side"><i class="fa-solid fa-pen pen"></i>Edit</div>
            </div>

            <div className="address-details">
              Jill Dower<br />
              Nayzak Design<br />
              10 Strudwick CourtLondonSW4 6TE<br />
              United Kingdom (UK)
            </div>
          </div>
          <div className="address-data">
            <div className="address-edit-side"><h2 className='address-name'>Billing address</h2>
              <div className="edit-side"><i class="fa-solid fa-pen pen"></i>Edit</div>
            </div>

            <div className="address-details">
              Jill Dower<br />
              Nayzak Design<br />
              10 Strudwick CourtLondonSW4 6TE<br />
              United Kingdom (UK)
            </div>
          </div>
        </div>

      </div>
    );
  };

  const renderAccountDetails = () => {
    return (
      <div className={`account-details-content ${activeTab === 'accountDetails' ? 'show' : ''}`}>
        <h2>Account Details</h2>
        <div className="account-details-form">
          <div className="account-top-input">
            <div className="account-input-side">
              <div className="input-side">
                <label className='account-label' htmlFor="">First Name *</label>
                <input className='account-input' type="text" placeholder='First name' />
              </div>
              <div className="input-side">
                <label className='account-label' htmlFor="">Last Name *</label>
                <input className='account-input' type="text" placeholder='Last name' />
              </div>
              <div className="input-side">
                <label className='account-label' htmlFor="">Display name *</label>
                <input className='account-input' type="text" placeholder='Display name' />
              </div>
              <div className="input-side">
                <label className='account-label' htmlFor="">Email address *</label>
                <input className='account-input' type="email" placeholder='Email address' />
              </div>
            </div>

          </div>
          <div className="account-down-input">
            <div className="password-title">Password change</div>
            <div className="account-input-side">
              <div className="input-side">
                <label className='account-label' htmlFor="">Old password</label>
                <input className='account-input' type="password" placeholder='Old password' />
              </div>
              <div className="input-side">
                <label className='account-label' htmlFor="">New password</label>
                <input className='account-input' type="password" placeholder='New password' />
              </div>
              <div className="input-side">
                <label className='account-label' htmlFor="">Repeat new password</label>
                <input className='account-input' type="password" placeholder='Repeat new password' />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  const renderWishlist = () => {
    return (
      <div className={`wishlist-content ${activeTab === 'wishlist' ? 'show' : ''}`}>
        <div className="wishlist-items">
        </div>
      </div>
    );
  };
  const renderContent = () => {
    return (
      <div className="account-content">
        <div className={`dashboard-content ${activeTab === 'dashboard' ? 'show' : ''}`}>
          {renderDashboard()}
        </div>
        <div className={`orders-content ${activeTab === 'orders' ? 'show' : ''}`}>
          {renderOrders()}
        </div>
        <div className={`addresses-content ${activeTab === 'addresses' ? 'show' : ''}`}>
          {renderAddresses()}
        </div>
        <div className={`account-details-content ${activeTab === 'accountDetails' ? 'show' : ''}`}>
          {renderAccountDetails()}
        </div>
        <div className={`wishlist-content ${activeTab === 'wishlist' ? 'show' : ''}`}>
          {renderWishlist()}
        </div>
      </div>
    );
  };

  return (
    <div className="account-container">
      <div className="account-title">My account</div>
      <div className="account-datas">
        <div className="account-menu">
          <div className="account-img"><img src={girlPhoto} alt="" /></div>
          <ul className='account-data-li'>
            <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => handleTabClick('dashboard')}>Dashboard</li>
            <li className={activeTab === 'orders' ? 'active' : ''} onClick={() => handleTabClick('orders')}>Orders</li>
            <li className={activeTab === 'addresses' ? 'active' : ''} onClick={() => handleTabClick('addresses')}>Addresses</li>
            <li className={activeTab === 'accountDetails' ? 'active' : ''} onClick={() => handleTabClick('accountDetails')}>Account details</li>
            <li className={activeTab === 'wishlist' ? 'active' : ''} onClick={() => handleTabClick('wishlist')}><Link to='/Wishlist'>Wishlist</Link></li>
            <li className={activeTab === 'logout' ? 'active' : '' } onClick={() => handleTabClick('logout')}><Link to='/'>Logout</Link></li>
          </ul>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default Account;

