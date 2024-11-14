import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  // Function to go back to the previous page
  const goBack = () => {
    navigate(-1);  // This goes back to the previous page
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Privacy Policy</h1>
      <p className="text-center text-muted">Last Updated: November 13, 2024</p>

      <section className="mb-4">
        <h2>1. Information We Collect</h2>
        <p>We collect the following types of information when you use our App:</p>

        <h3>1.1 Personal Information</h3>
        <ul>
          <li><strong>Account Information:</strong> When you create an account or use certain features of the App, we may ask for personal details such as your name, email address, and username.</li>
          <li><strong>Profile Information:</strong> If you choose to create a profile within the App, we may collect additional information such as your educational interests, preferences, and other details you provide.</li>
        </ul>

        <h3>1.2 Usage Information</h3>
        <ul>
          <li><strong>Activity Data:</strong> We collect data about your interactions with the App, such as which videos you watch, search queries, and features you use.</li>
          <li><strong>Device Information:</strong> We may collect information about the device you use to access the App, including your IP address, operating system, browser type, and device identifiers.</li>
        </ul>

        <h3>1.3 Cookies and Tracking Technologies</h3>
        <p>We use cookies and similar tracking technologies to enhance your experience. These technologies help us track your usage patterns, preferences, and improve our services.</p>
      </section>

      <section className="mb-4">
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li><strong>Provide and Improve the App:</strong> To deliver educational content, enable features, and ensure a seamless user experience.</li>
          <li><strong>Personalization:</strong> To tailor the content and recommendations based on your preferences and activity.</li>
          <li><strong>Communication:</strong> To send you updates, educational notifications, and relevant offers (if you opt-in).</li>
          <li><strong>Analytics:</strong> To analyze trends, monitor the effectiveness of content, and improve the overall functionality of the App.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>3. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal information to third parties. However, we may share your information in the following circumstances:</p>
        <ul>
          <li><strong>Service Providers:</strong> We may share information with trusted third-party companies who assist us in operating the App, providing customer service, and conducting analytics.</li>
          <li><strong>Legal Compliance:</strong> We may disclose your information if required by law or in response to legal requests, such as a subpoena or court order.</li>
          <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of our business, your information may be transferred as part of the transaction.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>4. Data Security</h2>
        <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please note that no data transmission method over the internet or method of electronic storage is 100% secure.</p>
      </section>

      <section className="mb-4">
        <h2>5. Your Rights and Choices</h2>
        <p>You have the following rights regarding your personal information:</p>
        <ul>
          <li><strong>Access and Update:</strong> You can access and update your personal information through your account settings.</li>
          <li><strong>Opt-Out:</strong> You can choose not to receive promotional communications from us by following the unsubscribe instructions in our emails.</li>
          <li><strong>Data Deletion:</strong> You can request the deletion of your account and personal information by contacting us at <a href="mailto:support@videoapp.com">support@videoapp.com</a>.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>6. Children's Privacy</h2>
        <p>Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under 13, we will take steps to delete the information as soon as possible.</p>
      </section>

      <section className="mb-4">
        <h2>7. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we update this policy, we will revise the "Last Updated" date at the top of the page. We encourage you to review this policy periodically.</p>
      </section>

      <section className="mb-4">
        <h2>8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or how we handle your information, please contact us at:</p>
        <ul>
          <li>Email: <a href="mailto:support@videoapp.com">support@videoapp.com</a></li>
        </ul>
      </section>

      {/* Back button to previous page */}
      <div className="text-center mt-4">
        <button onClick={goBack} className="btn btn-secondary">Back</button>
      </div>
    </div>
  );
}
