/**
 * GetResponse Newsletter Integration
 * Handles newsletter subscription with fallback mechanisms
 */

// Campaign token obtained from GetResponse
const CAMPAIGN_TOKEN = 'itLli';

/**
 * Fallback method using form submission to handle CORS and API limitations
 * 
 * @param email - Subscriber's email address
 * @param name - Optional subscriber's name
 * @returns Promise resolving when subscription is complete
 */
export function subscribeToNewsletter(email: string, name: string = ''): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      // Generate unique submission ID to track completion
      const submissionId = `gr_sub_${Date.now()}`;

      // Create form for newsletter submission
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = `https://app.getresponse.com/add_subscriber.html?submission_id=${submissionId}`;
      form.target = '_blank'; // Open in new tab
      form.style.display = 'none';

      // Add campaign token
      const campaignInput = document.createElement('input');
      campaignInput.type = 'hidden';
      campaignInput.name = 'campaign_token';
      campaignInput.value = CAMPAIGN_TOKEN;
      form.appendChild(campaignInput);

      // Add email field
      const emailInput = document.createElement('input');
      emailInput.type = 'hidden';
      emailInput.name = 'email';
      emailInput.value = email;
      form.appendChild(emailInput);

      // Add name field if provided
      if (name) {
        const nameInput = document.createElement('input');
        nameInput.type = 'hidden';
        nameInput.name = 'name';
        nameInput.value = name;
        form.appendChild(nameInput);
      }

      // Add redirect URL (using a playful thank you page)
      const thankYouPageInput = document.createElement('input');
      thankYouPageInput.type = 'hidden';
      thankYouPageInput.name = 'thankyou_url';
      thankYouPageInput.value = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
      form.appendChild(thankYouPageInput);

      const apiKeyInput = document.createElement('input');
      apiKeyInput.type = 'hidden';
      apiKeyInput.name = 'api_key';
      apiKeyInput.value = 'h8leysn3qlgbccnrxr942p0ivu0gdi15';
      form.appendChild(apiKeyInput);

      // Add form to body and submit
      document.body.appendChild(form);
      form.submit();

      // Remove form from DOM after submission
      setTimeout(() => {
        document.body.removeChild(form);
      }, 100);

      // Mark as subscribed
      localStorage.setItem('newsletterSubscribed', 'true');
      resolve();

    } catch (error) {
      console.error('Newsletter subscription error:', error);
      reject(error);
    }
  });
}

/**
 * Checks if newsletter subscription is complete
 * 
 * @returns Boolean indicating subscription status
 */
export function checkNewsletterSubmissionComplete(): boolean {
  try {
    // Check localStorage for subscription status
    const isSubscribed = localStorage.getItem('newsletterSubscribed') === 'true';

    // Check URL params for submission confirmation
    const urlParams = new URLSearchParams(window.location.search);
    const submissionParam = urlParams.get('newsletter_submitted');

    if (submissionParam) {
      // Clean up URL
      const url = new URL(window.location.href);
      url.searchParams.delete('newsletter_submitted');
      window.history.replaceState({}, document.title, url.toString());

      // Confirm subscription
      localStorage.setItem('newsletterSubscribed', 'true');
      return true;
    }

    return isSubscribed;
  } catch (error) {
    console.error('Error checking newsletter status:', error);
    return false;
  }
}