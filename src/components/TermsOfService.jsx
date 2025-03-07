import React from 'react';

function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service</h1>
      
      <div className="space-y-6 text-gray-600">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using EcoWise, you accept and agree to be bound by the terms and provisions of this agreement.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Use of Service</h2>
          <p>You agree to use the service only for lawful purposes and in accordance with these terms. You agree not to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Submit false or misleading reports</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Interfere with or disrupt the service</li>
            <li>Attempt to gain unauthorized access to the service</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">3. User Content</h2>
          <p>When you submit content to our service (including reports and photos), you grant us a non-exclusive, worldwide, royalty-free license to use, store, and process that content for the purpose of providing our service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Third-Party Services</h2>
          <p>Our service integrates with third-party services such as Google Maps. Your use of such services is subject to their respective terms and conditions.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Disclaimer of Warranties</h2>
          <p>The service is provided "as is" without any warranties, express or implied. We do not guarantee the accuracy, completeness, or usefulness of any information on the service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Limitation of Liability</h2>
          <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">7. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this site.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">8. Governing Law</h2>
          <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.</p>
        </section>
      </div>
    </div>
  );
}

export default TermsOfService;
