import React, { useState } from 'react';
import './AllProduct.css';
import { Link } from 'react-router-dom';
import Faq from '../../component/Faq/Faq';
import { useSelector, useDispatch } from 'react-redux';
import customer1 from '../../assets/svg/customer1.svg'
import group from '../../assets/svg/Rating Group.svg'
import customer2 from '../../assets/svg/customer2.svg'
import customer3 from '../../assets/svg/customer3.svg'
import customer4 from '../../assets/svg/customer4.svg'
import customer5 from '../../assets/svg/customer5.svg'
import starreview from '../../assets/svg/Rating Group All.svg'




const AllProduct = (
) => {
  const { API_IMAGE } = useSelector(state => state.data);
  const products = useSelector(state => state.data.products);

  const [visibleProducts, setVisibleProducts] = useState(8);

  const [activeTab, setActiveTab] = useState('description');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>

      <div className="details-container">
        <div className="details-datas">
          <div className="details-menu">
            <ul>
              <li className={activeTab === 'description' ? 'active' : ''} onClick={() => handleTabClick('description')}>Description</li>
              <li className={activeTab === 'additionalInfo' ? 'active' : ''} onClick={() => handleTabClick('additionalInfo')}>Additional Info</li>
              <li className={activeTab === 'reviews' ? 'active' : ''} onClick={() => handleTabClick('reviews')}>Reviews (5)</li>
              <li className={activeTab === 'questions' ? 'active' : ''} onClick={() => handleTabClick('questions')}>Questions</li>
            </ul>
            <div className="details-mean-side">
              {activeTab === 'description' && (
                <div className="description-content show">
                  <div className="details-description">
                    <div className="description-title">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint non providen.</div>
                    <div className="description-title-info"><b>Information</b></div>
                    <ul className='info-data'>
                      <li>Fabric: Denim</li>
                      <li>Fit type: Loose fit</li>
                      <li>Feature: Adjustable straps</li>
                      <li>Front and back pockets</li>
                    </ul>
                  </div>
                </div>
              )}
              {activeTab === 'additionalInfo' && (
                <div className="additional-info-content show">
                  <div className="details-additional-info">
                    <div className="add-info">
                      <div className="add-size-all">SIZE</div>
                      <div className="add-size">XSS, XS, S, M, L, XL, 2XL, 3XL</div>
                    </div>
                    <div className="add-info">
                      <div className="add-size-all">COLOR</div>
                      <div className="add-size">Red, Green, Blue</div>
                    </div>
                    <div className="add-info">
                      <div className="add-size-all">Weight</div>
                      <div className="add-size">1.5lb, 0.68kg</div>
                    </div>
                    <div className="all-data-sizes"><Link to='/ChartData'>All Sizes</Link></div>

                  </div>
                </div>
              )}
              {activeTab === 'reviews' && (
                <div className="reviews-content show">
                  <div className="details-reviews">
                    <div className="review-all-data">


                      <div className="review-customer">
                        <div className="customer-title">Customer reviews</div>
                        <div className="review-head-rating"><img src={group} alt="" /></div>
                        <div className="review-side-write">

                          <div className="review-star">
                            <div className="review-count">5 total Reviews</div>
                          </div>

                          <div className="write-review"><Link to='/Review'>Write review</Link></div>
                        </div>
                      </div>

                      <div className="customer-review-person">
                        <div className="customer-data-photo">

                          <div className="img-customer-side">
                            <img src={customer1} alt="" /></div>
                          <div className="customer-name-data">
                            <div className="name-data">Jaxson Aminoff</div>
                            <div className="img-star"><img src={starreview} alt="" /></div>
                          </div>
                          <div className="customer-date-write">Feb 12, 2024</div>
                        </div>
                        <div className="review-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident, sunt in culpa qui officia animi, id est laborum et dolorum fuga.</div>
                      </div>
                      <div className="customer-review-person">
                        <div className="customer-data-photo">

                          <div className="img-customer-side">
                            <img src={customer2} alt="" /></div>
                          <div className="customer-name-data">
                            <div className="name-data">James Schleifer</div>
                            <div className="img-star"><img src={starreview} alt="" /></div>
                          </div>
                          <div className="customer-date-write">Feb 12, 2024</div>
                        </div>
                        <div className="review-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident, sunt in culpa qui officia animi, id est laborum et dolorum fuga.</div>
                      </div>
                      <div className="customer-review-person">
                        <div className="customer-data-photo">

                          <div className="img-customer-side">
                            <img src={customer3} alt="" /></div>
                          <div className="customer-name-data">
                            <div className="name-data">Miracle Geidt</div>
                            <div className="img-star"><img src={starreview} alt="" /></div>
                          </div>
                          <div className="customer-date-write">Feb 12, 2024</div>
                        </div>
                        <div className="review-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident, sunt in culpa qui officia animi, id est laborum et dolorum fuga.</div>
                      </div>
                      <div className="customer-review-person">
                        <div className="customer-data-photo">

                          <div className="img-customer-side">
                            <img src={customer4} alt="" /></div>
                          <div className="customer-name-data">
                            <div className="name-data">Terry Kenter</div>
                            <div className="img-star"><img src={starreview} alt="" /></div>
                          </div>
                          <div className="customer-date-write">Feb 12, 2024</div>
                        </div>
                        <div className="review-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident, sunt in culpa qui officia animi, id est laborum et dolorum fuga.</div>
                      </div>
                      <div className="customer-review-person">
                        <div className="customer-data-photo">

                          <div className="img-customer-side">
                            <img src={customer5} alt="" /></div>
                          <div className="customer-name-data">
                            <div className="name-data">Alena Aminoff</div>
                            <div className="img-star"><img src={starreview} alt="" /></div>
                          </div>
                          <div className="customer-date-write">March 9, 2024</div>
                        </div>
                        <div className="review-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident, sunt in culpa qui officia animi, id est laborum et dolorum fuga.</div>
                      </div>


                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'questions' && (
                <div className="questions-content show">
                  <div className="details-questions">
                    <Faq />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProduct;
