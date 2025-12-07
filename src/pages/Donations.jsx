import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiDollarSign, FiCreditCard, FiShield, FiGift } = FiIcons;

const Donations = () => {
  const donationOptions = [
    {
      amount: '$25',
      description: 'Helps provide meals for community outreach',
      icon: FiHeart
    },
    {
      amount: '$50',
      description: 'Supports youth ministry activities and events',
      icon: FiGift
    },
    {
      amount: '$100',
      description: 'Funds worship equipment and facility needs',
      icon: FiHeart
    },
    {
      amount: 'Custom',
      description: 'Choose your own donation amount',
      icon: FiDollarSign
    }
  ];

  return (
    <div className="donations-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title heading-font">Donations</h1>
          <p className="page-subtitle body-font">
            Your generous giving helps us continue our mission of sharing God's love with our community
          </p>
        </div>

        <div className="donations-content">
          <div className="donation-form-section">
            <div className="form-container card">
              <div className="form-header">
                <SafeIcon icon={FiHeart} className="form-icon" />
                <h2 className="heading-font">Make a Donation</h2>
                <p className="body-font">
                  Choose an amount below or enter a custom amount to support our ministry
                </p>
              </div>

              <div className="donation-amounts">
                {donationOptions.map((option, index) => (
                  <div key={index} className="amount-option">
                    <input 
                      type="radio" 
                      id={`amount-${index}`} 
                      name="donation-amount" 
                      className="amount-radio"
                    />
                    <label htmlFor={`amount-${index}`} className="amount-label">
                      <div className="amount-icon">
                        <SafeIcon icon={option.icon} />
                      </div>
                      <div className="amount-info">
                        <span className="amount-value">{option.amount}</span>
                        <span className="amount-desc">{option.description}</span>
                      </div>
                    </label>
                  </div>
                ))}
              </div>

              <div className="custom-amount">
                <label htmlFor="custom-amount" className="form-label">Custom Amount</label>
                <div className="amount-input-wrapper">
                  <span className="currency-symbol">$</span>
                  <input
                    type="number"
                    id="custom-amount"
                    className="amount-input"
                    placeholder="0.00"
                    min="1"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="donation-frequency">
                <h3 className="frequency-title heading-font">Donation Frequency</h3>
                <div className="frequency-options">
                  <label className="frequency-option">
                    <input type="radio" name="frequency" value="one-time" defaultChecked />
                    <span>One-time</span>
                  </label>
                  <label className="frequency-option">
                    <input type="radio" name="frequency" value="monthly" />
                    <span>Monthly</span>
                  </label>
                  <label className="frequency-option">
                    <input type="radio" name="frequency" value="yearly" />
                    <span>Yearly</span>
                  </label>
                </div>
              </div>

              <button className="btn-primary donate-btn">
                <SafeIcon icon={FiCreditCard} />
                Proceed to Payment
              </button>

              <div className="security-note">
                <SafeIcon icon={FiShield} />
                <span>Your donation is secure and encrypted</span>
              </div>
            </div>
          </div>

          <div className="donation-info-section">
            <div className="info-card card">
              <h3 className="info-title heading-font">Why Give?</h3>
              <p className="body-font">
                Your generous donations enable us to continue our mission of spreading God's love 
                through worship, community outreach, and spiritual growth programs.
              </p>
              <ul className="giving-impact body-font">
                <li>Support local community outreach programs</li>
                <li>Fund youth and family ministry activities</li>
                <li>Maintain and improve our worship facilities</li>
                <li>Provide resources for spiritual growth</li>
                <li>Support missionary work and evangelism</li>
              </ul>
            </div>

            <div className="info-card card">
              <h3 className="info-title heading-font">Other Ways to Give</h3>
              <div className="giving-methods">
                <div className="method">
                  <h4>By Mail</h4>
                  <p>Send checks payable to:<br />
                  Gregory Foster Ministries<br />
                  123 Faith Avenue<br />
                  Hope City, HC 12345</p>
                </div>
                <div className="method">
                  <h4>In Person</h4>
                  <p>Drop off donations during our worship services or office hours. 
                  Cash and check donations are accepted.</p>
                </div>
                <div className="method">
                  <h4>Bank Transfer</h4>
                  <p>Contact our office for bank transfer details for larger donations 
                  or estate planning gifts.</p>
                </div>
              </div>
            </div>

            <div className="scripture-card card">
              <blockquote className="scripture-quote scripture-font">
                "Each of you should give what you have decided in your heart to give, 
                not reluctantly or under compulsion, for God loves a cheerful giver."
              </blockquote>
              <cite className="scripture-citation">2 Corinthians 9:7</cite>
            </div>

            <div className="tax-info-card card">
              <h3 className="info-title heading-font">Tax Information</h3>
              <p className="body-font">
                Gregory Foster Ministries is a 501(c)(3) nonprofit organization. 
                Your donations are tax-deductible to the full extent allowed by law. 
                You will receive a receipt for your records.
              </p>
              <p className="tax-id body-font">
                <strong>Tax ID:</strong> 12-3456789
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .donations-page {
          padding: 60px 0;
          min-height: 80vh;
        }

        .page-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .page-title {
          font-size: 2.5rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 15px;
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: var(--gfm-navy);
          max-width: 700px;
          margin: 0 auto;
        }

        .donations-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .form-container {
          background-color: var(--gfm-white);
        }

        .form-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .form-icon {
          font-size: 3rem;
          color: var(--gfm-light-blue);
          margin-bottom: 20px;
        }

        .form-header h2 {
          font-size: 2rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 10px;
        }

        .form-header p {
          color: var(--gfm-navy);
          font-size: 1.1rem;
        }

        .donation-amounts {
          display: grid;
          gap: 15px;
          margin-bottom: 30px;
        }

        .amount-option {
          position: relative;
        }

        .amount-radio {
          position: absolute;
          opacity: 0;
          pointer-events: none;
        }

        .amount-label {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 20px;
          border: 2px solid var(--gfm-gray-light);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .amount-radio:checked + .amount-label {
          border-color: var(--gfm-light-blue);
          background-color: rgba(110, 200, 233, 0.1);
        }

        .amount-label:hover {
          border-color: var(--gfm-light-blue);
        }

        .amount-icon {
          width: 50px;
          height: 50px;
          background-color: var(--gfm-light-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gfm-white);
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .amount-info {
          flex: 1;
        }

        .amount-value {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gfm-dark-blue);
          margin-bottom: 5px;
        }

        .amount-desc {
          color: var(--gfm-navy);
          font-size: 0.95rem;
        }

        .custom-amount {
          margin-bottom: 30px;
        }

        .form-label {
          display: block;
          font-weight: 600;
          color: var(--gfm-dark-blue);
          margin-bottom: 10px;
        }

        .amount-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .currency-symbol {
          position: absolute;
          left: 15px;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--gfm-navy);
          z-index: 1;
        }

        .amount-input {
          width: 100%;
          padding: 15px 15px 15px 35px;
          border: 2px solid var(--gfm-gray-light);
          border-radius: 8px;
          font-size: 1.2rem;
          font-weight: 600;
          transition: border-color 0.3s ease;
        }

        .amount-input:focus {
          outline: none;
          border-color: var(--gfm-light-blue);
        }

        .donation-frequency {
          margin-bottom: 30px;
        }

        .frequency-title {
          font-size: 1.3rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 15px;
        }

        .frequency-options {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .frequency-option {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          color: var(--gfm-navy);
          font-weight: 500;
        }

        .frequency-option input[type="radio"] {
          width: 18px;
          height: 18px;
          accent-color: var(--gfm-light-blue);
        }

        .donate-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          font-size: 1.2rem;
          padding: 18px 40px;
          width: 100%;
          margin-bottom: 20px;
        }

        .security-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--gfm-navy);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .security-note svg {
          color: var(--gfm-light-blue);
        }

        .donation-info-section {
          display: grid;
          gap: 25px;
          align-content: start;
        }

        .info-card {
          background-color: var(--gfm-white);
        }

        .info-title {
          font-size: 1.4rem;
          color: var(--gfm-dark-blue);
          margin-bottom: 15px;
        }

        .info-card p {
          color: var(--gfm-navy);
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .giving-impact {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .giving-impact li {
          padding: 8px 0;
          padding-left: 25px;
          position: relative;
          color: var(--gfm-navy);
        }

        .giving-impact li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--gfm-light-blue);
          font-weight: bold;
        }

        .giving-methods {
          display: grid;
          gap: 20px;
        }

        .method h4 {
          color: var(--gfm-dark-blue);
          margin-bottom: 8px;
          font-size: 1.1rem;
        }

        .method p {
          color: var(--gfm-navy);
          line-height: 1.5;
          margin: 0;
        }

        .scripture-card {
          background: linear-gradient(135deg, var(--gfm-light-blue), var(--gfm-navy));
          color: var(--gfm-white);
          text-align: center;
        }

        .scripture-quote {
          font-size: 1.2rem;
          font-style: italic;
          line-height: 1.6;
          margin: 0 0 15px 0;
        }

        .scripture-citation {
          font-weight: 600;
          font-size: 1rem;
        }

        .tax-info-card {
          background-color: var(--gfm-gray-light);
        }

        .tax-id {
          font-size: 1rem;
          margin: 0;
        }

        @media (max-width: 968px) {
          .donations-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 2rem;
          }

          .amount-label {
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }

          .frequency-options {
            flex-direction: column;
            gap: 12px;
          }

          .donate-btn {
            font-size: 1.1rem;
            padding: 15px 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Donations;