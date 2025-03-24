/**
 * GetResponse API integration
 * Handles integration with GetResponse newsletter service
 */

// Campaign token obtained from GetResponse
const CAMPAIGN_TOKEN = 'itLli';
const API_KEY = 'h8leysn3qlgbccnrxr942p0ivu0gdi15';

/**
 * Subscribes an email to the GetResponse newsletter using a form
 * Uses GET parameters to track successful submission via browser storage
 * 
 * @param email - Email address to subscribe
 * @param name - Subscriber's name
 * @returns Promise that resolves when subscription is complete
 */
export function subscribeToNewsletter(email: string, name: string = ''): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      // Generate unique submission ID to track completion
      const submissionId = `gr_sub_${Date.now()}`;
      
      // Store submission ID in sessionStorage to track completion
      sessionStorage.setItem(submissionId, 'pending');
      
      // Create form
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
      
      // Add thank you page URL with submission ID in query params
      const thankYouPageInput = document.createElement('input');
      thankYouPageInput.type = 'hidden';
      thankYouPageInput.name = 'thankyou_url';
      thankYouPageInput.value = `${window.location.origin}?newsletter_submitted=${submissionId}`;
      form.appendChild(thankYouPageInput);
      
      // Add form to body and submit
      document.body.appendChild(form);
      form.submit();
      
      // Remove form from DOM after submission
      setTimeout(() => {
        document.body.removeChild(form);
      }, 100);
      
      // Consider the submission successful
      // Real confirmation will happen when user completes the process in the new tab
      resolve();
      
    } catch (error) {
      console.error('Error submitting newsletter form:', error);
      reject(error);
    }
  });
}

/**
 * Checks URL query parameters to see if a newsletter subscription was completed
 * This handles the redirect back from GetResponse's thank you page
 * 
 * @returns Boolean indicating if a newsletter submission was just completed
 */
export function checkNewsletterSubmissionComplete(): boolean {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const submissionId = urlParams.get('newsletter_submitted');
    
    if (submissionId) {
      // Clean up the URL by removing the query parameter
      const url = new URL(window.location.href);
      url.searchParams.delete('newsletter_submitted');
      window.history.replaceState({}, document.title, url.toString());
      
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error checking newsletter submission:', error);
    return false;
  }
}