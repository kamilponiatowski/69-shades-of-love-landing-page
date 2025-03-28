/**
 * GetResponse API integration
 * Handles integration with GetResponse newsletter service
 */

// Campaign token obtained from GetResponse
const CAMPAIGN_TOKEN = 'itLli';
// API key for GetResponse
const API_KEY = 'h8leysn3qlgbccnrxr942p0ivu0gdi15';

/**
 * Interface for the GetResponse API contact data
 */
interface GetResponseContactData {
  email: string;
  name?: string;
  campaign: { campaignId: string };
  dayOfCycle: number;
  [key: string]: any; // Allows for additional properties
}

/**
 * Subscribes an email to the GetResponse newsletter using API
 * 
 * @param email - Email address to subscribe
 * @param name - Subscriber's name
 * @returns Promise that resolves when subscription is complete
 */
export function subscribeToNewsletter(email: string, name: string = ''): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      // Create the API request body
      const data: GetResponseContactData = {
        email,
        campaign: { campaignId: CAMPAIGN_TOKEN },
        dayOfCycle: 0
      };

      // Add name if provided
      if (name) {
        data.name = name;
      }

      // Setup the API call
      fetch('https://api.getresponse.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': `api-key ${API_KEY}`
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          // If API returns an error, check the error message
          return response.json().then(errorData => {
            throw new Error(errorData.message || 'Subscription failed');
          });
        }
        
        // Success - store status in localStorage to track subscription
        localStorage.setItem('newsletterSubscribed', 'true');
        
        // Resolve the promise to indicate success
        resolve();
      })
      .catch(error => {
        console.error('API error:', error);
        reject(error);
      });
      
    } catch (error) {
      console.error('Error submitting newsletter:', error);
      reject(error);
    }
  });
}

/**
 * Fallback method using form submission in case direct API call isn't possible
 * This might be necessary if there are CORS issues with the API
 * 
 * @param email - Email address to subscribe
 * @param name - Subscriber's name
 * @returns Promise that resolves when form is submitted
 */
export function subscribeToNewsletterViaForm(email: string, name: string = ''): Promise<void> {
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
      
      // Add thank you page URL
      const thankYouPageInput = document.createElement('input');
      thankYouPageInput.type = 'hidden';
      thankYouPageInput.name = 'thankyou_url';
      thankYouPageInput.value = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
      form.appendChild(thankYouPageInput);
      
      // Add form to body and submit
      document.body.appendChild(form);
      form.submit();
      
      // Remove form from DOM after submission
      setTimeout(() => {
        document.body.removeChild(form);
      }, 100);
      
      // Consider the submission successful
      localStorage.setItem('newsletterSubscribed', 'true');
      resolve();
      
    } catch (error) {
      console.error('Error submitting newsletter form:', error);
      reject(error);
    }
  });
}

/**
 * Main subscribe function that tries API first, falls back to form
 * 
 * @param email - Email address to subscribe
 * @param name - Subscriber's name
 * @returns Promise that resolves when subscription is complete
 */
export function subscribeWithFallback(email: string, name: string = ''): Promise<void> {
  // First try direct API method
  return subscribeToNewsletter(email, name)
    .catch(error => {
      console.log('Direct API failed, falling back to form submission', error);
      // If direct API fails, fall back to form submission
      return subscribeToNewsletterViaForm(email, name);
    });
}

/**
 * Checks if a newsletter subscription was completed
 * 
 * @returns Boolean indicating if user is subscribed
 */
export function checkNewsletterSubmissionComplete(): boolean {
  try {
    // Check localStorage for subscription status
    const isSubscribed = localStorage.getItem('newsletterSubscribed') === 'true';
    
    // Also check URL params (for form submission flow)
    const urlParams = new URLSearchParams(window.location.search);
    const submissionParam = urlParams.get('newsletter_submitted');
    
    if (submissionParam) {
      // Clean up the URL by removing the query parameter
      const url = new URL(window.location.href);
      url.searchParams.delete('newsletter_submitted');
      window.history.replaceState({}, document.title, url.toString());
      
      // Set the subscription status
      localStorage.setItem('newsletterSubscribed', 'true');
      return true;
    }
    
    return isSubscribed;
  } catch (error) {
    console.error('Error checking newsletter status:', error);
    return false;
  }
}