<template>
  <footer class="modern-footer">
    <div class="footer-background"></div>
    
    <div class="footer-content">
      <div class="footer-message">
        {{ t('footerStart') }} 
        <router-link to="/quotes" class="heart-link" aria-label="Easter egg: go to quotes page">
          <span class="heart animate-heartbeat">💜</span>
        </router-link> 
        {{ t('footerMid') }}
        <a href="mailto:poniatowski.dev@gmail.com">poniatowski.dev@gmail.com</a> 
      </div>
      
      <div class="footer-credits">
        Created with Kamil Poniatowski & 🥷🏻先生 Tim Polka-Nawioski 🙇
      </div>
      
      <div class="footer-actions">
        <button @click="resetAppData" class="reset-button" :title="t('resetConfirmMessage')">
          <i class="fas fa-trash-alt"></i> {{ t('resetButtonText') }}
        </button>
      </div>

      <!-- Legal footer section -->
      <div class="footer-legal">
        <div class="copyright-text">
          &copy; 2025 69 Shades of Love. All Rights Reserved.
        </div>
        <div class="legal-links">
          <a href="#" @click.prevent="showPrivacyPolicy" class="legal-link">
            <i class="fas fa-shield-alt"></i> Privacy Policy
          </a>
          <a href="#" @click.prevent="showTerms" class="legal-link">
            <i class="fas fa-gavel"></i> Terms of Use
          </a>
          <a href="#" @click.prevent="showCookiePolicy" class="legal-link">
            <i class="fas fa-cookie-bite"></i> Cookie Policy
          </a>
        </div>
      </div>
    </div>
    
    <!-- Use the ScrollTopButton component -->
    <ScrollTopButton />

    <!-- Privacy Policy Modal -->
    <div class="legal-modal" v-if="showModal" @click="closeModal">
      <div class="legal-modal-content" @click.stop>
        <button @click="closeModal" class="modal-close">
          <i class="fas fa-times"></i>
        </button>
        <div v-if="currentModal === 'privacy'">
          <h2>Privacy Policy</h2>
          <div class="modal-text">
            <p><strong>Last Updated: March 28, 2025</strong></p>
            <p>At 69 Shades of Love, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our application.</p>
            
            <h3>1. Information We Collect</h3>
            <p>We collect minimal information necessary to provide our services:</p>
            <ul>
              <li><strong>Personal Data:</strong> When you subscribe to our newsletter, we collect your email address and optionally your name.</li>
              <li><strong>Usage Data:</strong> We use local browser storage to save your progress and preferences.</li>
            </ul>
            
            <h3>2. How We Use Your Information</h3>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li>To provide and maintain our service</li>
              <li>To notify you about updates and changes to our service</li>
              <li>To send you our newsletter if you've subscribed</li>
            </ul>
            
            <h3>3. Data Storage</h3>
            <p>Your progress data is stored locally in your browser and is not sent to our servers. Newsletter subscriptions are managed through GetResponse, subject to their privacy policy.</p>
            
            <h3>4. Your Rights</h3>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Unsubscribe from our newsletter at any time</li>
            </ul>
            
            <h3>5. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at: poniatowski.dev@gmail.com</p>
          </div>
        </div>
        
        <div v-else-if="currentModal === 'terms'">
          <h2>Terms of Use</h2>
          <div class="modal-text">
            <p><strong>Last Updated: March 28, 2025</strong></p>
            <p>Welcome to 69 Shades of Love. By accessing or using our application, you agree to be bound by these Terms of Use.</p>
            
            <h3>1. Acceptance</h3>
            <p>By using our application, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>
            
            <h3>2. Intellectual Property</h3>
            <p>All content, features, and functionality of the 69 Shades of Love application, including but not limited to text, graphics, logos, icons, and designs, are owned by us and are protected by copyright, trademark, and other intellectual property laws.</p>
            
            <h3>3. User Conduct</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use the application in any way that violates applicable laws or regulations</li>
              <li>Attempt to interfere with the proper working of the application</li>
              <li>Bypass measures we may use to prevent or restrict access</li>
            </ul>
            
            <h3>4. Limitation of Liability</h3>
            <p>We provide the application on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the operation or availability of the application.</p>
            
            <h3>5. Changes</h3>
            <p>We reserve the right to modify these Terms at any time. We will provide notice of any material changes.</p>
            
            <h3>6. Contact</h3>
            <p>For questions about these Terms, please contact: poniatowski.dev@gmail.com</p>
          </div>
        </div>
        
        <div v-else-if="currentModal === 'cookies'">
          <h2>Cookie Policy</h2>
          <div class="modal-text">
            <p><strong>Last Updated: March 28, 2025</strong></p>
            <p>This Cookie Policy explains how 69 Shades of Love uses browser storage technologies to save your data.</p>
            
            <h3>1. What Are Cookies?</h3>
            <p>Cookies are small files stored on your device that allow websites to remember your preferences and behavior.</p>
            
            <h3>2. How We Use Browser Storage</h3>
            <p>We primarily use localStorage and sessionStorage to:</p>
            <ul>
              <li>Save your progress in the application</li>
              <li>Remember your preferences (language, dark mode)</li>
              <li>Track completion of self-care tasks</li>
              <li>Record your streak of consecutive days using the app</li>
            </ul>
            
            <h3>3. Types of Data Stored</h3>
            <p>The data we store locally includes:</p>
            <ul>
              <li>Task completion status</li>
              <li>User preferences</li>
              <li>Streak information</li>
              <li>Language preference</li>
            </ul>
            
            <h3>4. Your Control Over Local Storage</h3>
            <p>You can clear all locally stored data by:</p>
            <ul>
              <li>Using the "Reset App" button in the footer</li>
              <li>Clearing your browser's cache and local storage</li>
            </ul>
            
            <h3>5. Changes to This Policy</h3>
            <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
  
<script setup lang="ts">
import { useI18n } from '../../composables/useI18n';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import ScrollTopButton from '../widgets/ScrollTopButton.vue';

// Composables
const { t } = useI18n();
const router = useRouter();

// Modal state
const showModal = ref(false);
const currentModal = ref('');

// Function to reset application data
const resetAppData = () => {
  if (confirm(t('resetConfirmMessage'))) {
    // List of keys to be deleted from localStorage
    const keysToRemove = [
      'selfCareData',
      'lastCheckDate',
      'streakDays',
      'newsletterSubscribed',
      'hasVisitedBefore',
      'preferredLanguage',
      'pdfUnlockedBefore',
      'pdfUnlockShown',
      'darkMode' // Add darkMode to keys to be removed
    ];
    
    // Delete all data from localStorage
    keysToRemove.forEach(key => {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error(`Error removing ${key} from localStorage:`, error);
      }
    });
    
    alert(t('resetSuccessMessage'));
    
    window.location.reload();
  }
};

// Show the privacy policy modal
const showPrivacyPolicy = () => {
  currentModal.value = 'privacy';
  showModal.value = true;
  document.body.classList.add('modal-open');
};

// Show the terms of use modal
const showTerms = () => {
  currentModal.value = 'terms';
  showModal.value = true;
  document.body.classList.add('modal-open');
};

// Show the cookie policy modal
const showCookiePolicy = () => {
  currentModal.value = 'cookies';
  showModal.value = true;
  document.body.classList.add('modal-open');
};

// Close the modal
const closeModal = () => {
  showModal.value = false;
  document.body.classList.remove('modal-open');
};
</script>
  
<style scoped>
/* Modern footer design with pattern and gradient, matching the Header style */
.modern-footer {
  position: relative;
  margin-top: 40px;
  padding: 30px;
  background: var(--section-background);
  border-radius: 15px;
  box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  min-height: 150px; /* Ensure minimum height for the layout */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

/* Background pattern matching the header */
.footer-background {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23c41e3a' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.5;
  z-index: 0;
}

/* Footer content layout */
.footer-content {
  position: relative;
  z-index: 1;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

/* Footer message style */
.footer-message {
  color: var(--secondary-text-color);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 5px;
}

.footer-credits {
  color: var(--secondary-text-color);
  font-size: 0.85rem;
  font-style: italic;
}

/* Easter egg heart link styling */
.heart-link {
  text-decoration: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
}

.heart-link .heart {
  color: var(--main-color);
  animation: heartbeat 1.5s infinite;
  display: inline-block;
  transition: transform 0.3s ease;
}

.heart-link:hover .heart {
  transform: scale(1.2);
}

.heart-link:focus {
  outline: var(--focus-outline);
  outline-offset: 2px;
  border-radius: 4px;
}

.heart-link:focus .heart {
  transform: scale(1.2);
}

/* Email link styling */
.footer-message a {
  color: var(--accent-color);
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;
  font-weight: 500;
}

.footer-message a:hover,
.footer-message a:focus {
  color: var(--main-color);
  transform: translateY(-2px);
  text-decoration: underline;
}

/* Reset button styling */
.footer-actions {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

.reset-button {
  background-color: transparent;
  color: var(--secondary-text-color);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 6px 15px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
}

.reset-button:hover {
  background-color: rgba(196, 30, 58, 0.1);
  color: var(--main-color);
  border-color: var(--main-color);
  transform: translateY(-2px);
  box-shadow: 0 3px 8px rgba(196, 30, 58, 0.1);
}

.reset-button i {
  font-size: 0.9rem;
}

/* Animation for heartbeat */
@keyframes heartbeat {
  0% { transform: scale(1); }
  5% { transform: scale(1.2); }
  10% { transform: scale(1); }
  15% { transform: scale(1.1); }
  20% { transform: scale(1); }
  100% { transform: scale(1); }
}

/* Legal footer section */
.footer-legal {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid var(--border-color);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.copyright-text {
  color: var(--secondary-text-color);
  font-size: 0.85rem;
}

.legal-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.legal-link {
  color: var(--accent-color);
  text-decoration: none;
  font-size: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
}

.legal-link:hover,
.legal-link:focus {
  color: var(--main-color);
  transform: translateY(-2px);
}

.legal-link i {
  font-size: 0.9rem;
}

/* Modal styles */
.legal-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.legal-modal-content {
  position: relative;
  background-color: var(--card-background);
  border-radius: 15px;
  padding: 30px;
  max-width: 800px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--secondary-text-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

.modal-close:hover {
  color: var(--main-color);
  transform: rotate(90deg);
}

.legal-modal-content h2 {
  color: var(--accent-color);
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--accent-color);
  font-size: 1.7rem;
}

.legal-modal-content h3 {
  color: var(--main-color);
  margin: 20px 0 10px;
  font-size: 1.3rem;
}

.modal-text {
  line-height: 1.7;
  color: var(--text-color);
}

.modal-text p {
  margin-bottom: 15px;
}

.modal-text ul {
  margin-bottom: 15px;
  padding-left: 25px;
}

.modal-text li {
  margin-bottom: 8px;
}

/* Add this global style to prevent body scrolling when modal is open */
:global(body.modal-open) {
  overflow: hidden;
}

/* Responsive styles */
@media (max-width: 768px) {
  .modern-footer {
    padding: 20px 15px;
    margin-top: 20px;
  }
  
  .footer-message {
    font-size: 0.9rem;
  }
  
  .footer-credits {
    font-size: 0.8rem;
  }

  .legal-links {
    gap: 15px;
  }

  .copyright-text {
    font-size: 0.8rem;
  }

  .legal-link {
    font-size: 0.8rem;
  }

  .legal-modal-content {
    padding: 20px;
    width: 95%;
  }

  .legal-modal-content h2 {
    font-size: 1.5rem;
  }

  .legal-modal-content h3 {
    font-size: 1.2rem;
  }
}

/* For smaller screens */
@media (max-width: 480px) {
  .modern-footer {
    padding: 15px 10px;
  }
  
  .footer-message {
    font-size: 0.85rem;
  }
  
  .footer-content {
    gap: 10px;
  }

  .legal-links {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  .legal-modal-content {
    padding: 15px;
  }

  .legal-modal-content h2 {
    font-size: 1.3rem;
    margin-bottom: 15px;
    padding-right: 30px; /* Space for close button */
  }

  .legal-modal-content h3 {
    font-size: 1.1rem;
  }

  .modal-close {
    top: 10px;
    right: 10px;
  }
}
</style>