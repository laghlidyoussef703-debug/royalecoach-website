import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPageLayout } from '@/components/ui/LegalPageLayout';
import { buildMeta } from '@/lib/metadata';

export const metadata: Metadata = buildMeta({
  title: 'Privacy Policy — RoyaleCoach AI Clash Royale Coaching App',
  description:
    "Read RoyaleCoach AI's Privacy Policy. Learn what data we collect from Clash Royale player tags, how we use it, and your rights as a user.",
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="July 7, 2026">

      <h2>Introduction</h2>
      <p>
        RoyaleCoach AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is an independent companion app for Clash Royale players.
        This Privacy Policy explains what information we collect, how we use it, and your rights
        regarding your data when you use the RoyaleCoach AI mobile application and website at
        royalecoachai.com.
      </p>
      <p>
        By using RoyaleCoach AI, you agree to the collection and use of information in accordance
        with this policy.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>a) Player Tag</h3>
      <p>
        You provide your Clash Royale player tag (e.g., #ABC123) to use the app. This is used
        solely to look up your public player data via the official Clash Royale API.
      </p>

      <h3>b) Public Player Data (via Clash Royale API)</h3>
      <p>
        We access publicly available player data through the official Clash Royale API operated by
        Supercell. This includes: current deck, card collection, trophies, clan information, and
        battle history. We access only the data associated with the player tag you provide.
      </p>

      <h3>c) Account Data</h3>
      <p>
        If you create an account, we may store your email address and a securely hashed password,
        or link your account to a third-party sign-in provider (Google Sign-In or Apple Sign In).
        When you use Google Sign-In or Apple Sign In, we receive only the information you authorize
        (typically your name and email address) and never receive your provider password.
        We use this to authenticate your session and associate your preferences with your account.
      </p>

      <h3>d) Subscription Data</h3>
      <p>
        Subscription purchases are managed through RevenueCat, which communicates with Apple App
        Store and Google Play on our behalf. We receive only your subscription status (active,
        expired, or cancelled). We never receive or store your payment card details, billing
        address, or any other payment information.
      </p>

      <h3>e) Analytics Data</h3>
      <p>
        We collect anonymized usage analytics to understand how the app is used and to improve
        features. This data does not identify you personally. You may opt out of analytics
        in the app settings.
      </p>

      <h3>f) Advertising Data</h3>
      <p>
        The free version of RoyaleCoach AI displays advertisements served by Google AdMob. AdMob
        may use anonymized device identifiers for ad personalization. You can opt out of
        personalized ads in your device settings. See Google&apos;s privacy policy for details.
      </p>

      <h3>g) Support Communications</h3>
      <p>
        If you contact us at support@royalecoachai.com, we retain your email address and
        correspondence to provide support and improve the app.
      </p>

      <h3>h) Crash and Error Reports</h3>
      <p>
        We collect crash reports and error logs to diagnose and fix technical issues. These reports
        may include anonymized device information (device model, OS version), app version, and
        stack traces. Crash reports do not contain your personal data or player tag unless
        explicitly included in a support request.
      </p>

      <h3>i) Push Notification Tokens</h3>
      <p>
        If you enable push notifications, we store a device push token to deliver coaching alerts
        and reminders. We do not store the content of notifications on our servers. You can
        disable notifications at any time in your device settings or within the app.
      </p>

      <h3>j) Website Cookies and Tracking</h3>
      <p>
        The royalecoachai.com website uses cookies and similar technologies to maintain session
        state, remember your preferences, and collect anonymized analytics about site usage (e.g.,
        pages visited, referral source). You can control cookies through your browser settings.
        We do not use cookies to track you across third-party websites.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide and operate the features of RoyaleCoach AI</li>
        <li>To authenticate your account and confirm your subscription status</li>
        <li>To generate personalized AI coaching reports based on your public player data</li>
        <li>To improve the app based on anonymized usage data</li>
        <li>To diagnose and fix technical issues using crash and error reports</li>
        <li>To send coaching alerts and reminders via push notifications (if enabled)</li>
        <li>To respond to support requests and customer service inquiries</li>
        <li>To comply with legal obligations</li>
      </ul>
      <p>
        <strong>We do not sell, rent, or share your personal data with third parties for their
        marketing purposes.</strong>
      </p>

      <h2>3. Data Storage and Security</h2>
      <p>
        All data is transmitted over HTTPS. Account passwords are hashed using industry-standard
        algorithms and are never stored in plain text. We apply reasonable technical and
        organizational measures to protect your data against unauthorized access, loss, or
        disclosure.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to provide the Services,
        maintain account functionality, improve security, comply with legal obligations, resolve
        disputes, and enforce our agreements.
      </p>
      <ul>
        <li>
          <strong>Account data</strong> (email address, linked sign-in provider, player tag) is
          retained while your account remains active.
        </li>
        <li>
          <strong>Subscription status</strong> received from RevenueCat is retained for the
          duration of your account and for a reasonable period afterward to handle refund or
          dispute inquiries.
        </li>
        <li>
          <strong>Crash and error reports</strong> are retained for up to 90 days to allow
          diagnosis and resolution of technical issues.
        </li>
        <li>
          <strong>Support correspondence</strong> is retained for up to 2 years to provide
          continuity of support and to fulfill legal or regulatory obligations.
        </li>
        <li>
          <strong>Push notification tokens</strong> are retained while your account is active.
          Tokens are removed when you delete your account or revoke notification permissions.
        </li>
        <li>
          <strong>Anonymous analytics and aggregated usage statistics</strong> may be retained
          indefinitely because they no longer identify individual users.
        </li>
      </ul>
      <p>
        If you delete your account, personal information is permanently deleted or anonymized
        within 30 days of the deletion request, unless we are legally required to retain certain
        records. See <Link href="/delete-account">Delete Account</Link> for instructions.
      </p>

      <h2>5. Third-Party Services</h2>
      <ul>
        <li><strong>Clash Royale API (Supercell):</strong> Used to access public player data. Subject to Supercell&apos;s terms of service.</li>
        <li><strong>RevenueCat:</strong> Manages subscription status on behalf of Apple App Store and Google Play. We receive only subscription events; we never receive payment card details.</li>
        <li><strong>Apple App Store / Google Play:</strong> Process subscription billing. We receive only your subscription status, not payment details.</li>
        <li><strong>Google AdMob:</strong> Serves advertisements in the free version. Uses anonymized device identifiers.</li>
        <li><strong>Analytics Provider:</strong> Anonymized usage analytics. No personally identifiable information shared.</li>
        <li><strong>Crash Reporting:</strong> Anonymized crash and error logs. No personal data or player tag included.</li>
      </ul>

      <h2>6. Children&apos;s Privacy</h2>
      <p>
        RoyaleCoach AI is not directed to children under the age of 13. We do not knowingly collect
        personal information from children under 13. If you are a parent or guardian and believe your
        child has provided us with personal information, please contact us at support@royalecoachai.com
        and we will take steps to remove that information.
      </p>

      <h2>7. Your Rights</h2>
      <ul>
        <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
        <li><strong>Correction:</strong> Request correction of inaccurate personal data.</li>
        <li><strong>Deletion:</strong> Request deletion of your account and associated data. See <Link href="/delete-account">Delete Account</Link> for instructions.</li>
        <li><strong>Withdrawal of Consent:</strong> Opt out of analytics in app settings or disable push notifications in your device settings.</li>
        <li><strong>EU/UK residents:</strong> You have the right to lodge a complaint with your local data protection supervisory authority.</li>
      </ul>

      <h2>8. Data Deletion</h2>
      <p>
        You can request deletion of your account and data at any time. See our{' '}
        <Link href="/delete-account">Delete Account</Link> page for step-by-step instructions.
        Deletion requests are processed within 30 days. Upon deletion, all personal information
        is permanently removed or anonymized, except where retention is required by applicable law.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of significant
        changes by updating the &quot;Last Updated&quot; date at the top of this page. Continued use of
        RoyaleCoach AI after changes constitutes your acceptance of the updated policy.
      </p>

      <h2>10. Contact</h2>
      <p>
        For privacy questions or requests, contact us at:{' '}
        <a href="mailto:support@royalecoachai.com">support@royalecoachai.com</a>
      </p>
      <p>
        RoyaleCoach AI is an independent app and is not affiliated with Supercell Oy.
        See <Link href="/terms-of-service">Terms of Service</Link> for full terms.
      </p>

    </LegalPageLayout>
  );
}
