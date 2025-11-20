/**
 * Phone Number Tracking Utility
 * 
 * Maintains NAP consistency for SEO by keeping the real phone number in HTML source,
 * while replacing it with a tracking number at runtime for human visitors.
 * 
 * Real number (for SEO): 07949 912201 / +447949912201
 * Tracking number (for display): +447427570533
 */

const REAL_PHONE_NUMBER = '07949 912201';
const REAL_PHONE_NUMBER_INTL = '+447949912201';
const REAL_PHONE_NUMBER_TEL = 'tel:+447949912201';
const REAL_PHONE_NUMBER_CLEAN = '447949912201';

const TRACKING_PHONE_NUMBER = '07427 570533';
const TRACKING_PHONE_NUMBER_INTL = '+447427570533';
const TRACKING_PHONE_NUMBER_TEL = 'tel:+447427570533';
const TRACKING_PHONE_NUMBER_CLEAN = '447427570533';

/**
 * Replaces all phone numbers in the DOM with tracking numbers
 * This runs after page load to maintain SEO-friendly HTML source
 */
export function replacePhoneNumbers(): void {
  if (typeof window === 'undefined') return;

  // Replace phone numbers in text content
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null
  );

  const textNodes: Text[] = [];
  let node: Node | null = walker.nextNode();
  
  while (node) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent) {
      const text = node.textContent;
      // Check if this text node contains the phone number
      if (
        text.includes(REAL_PHONE_NUMBER) ||
        text.includes(REAL_PHONE_NUMBER_INTL) ||
        text.includes('07949 912201') ||
        text.includes('+44 7949 912201')
      ) {
        textNodes.push(node as Text);
      }
    }
    node = walker.nextNode();
  }

  // Replace text content
  textNodes.forEach((textNode) => {
    if (textNode.textContent) {
      let newText = textNode.textContent;
      
      // Replace various formats
      newText = newText.replace(/07949\s?912201/g, TRACKING_PHONE_NUMBER);
      newText = newText.replace(/\+44\s?7949\s?912201/g, TRACKING_PHONE_NUMBER_INTL);
      newText = newText.replace(/\+447949912201/g, TRACKING_PHONE_NUMBER_INTL);
      newText = newText.replace(/447949912201/g, TRACKING_PHONE_NUMBER_CLEAN);
      
      if (newText !== textNode.textContent) {
        textNode.textContent = newText;
      }
    }
  });

  // Replace tel: links
  const telLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="tel:"]');
  telLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href) {
      // Replace various tel: formats
      if (href.includes(REAL_PHONE_NUMBER_CLEAN) || href.includes('447949912201')) {
        link.setAttribute('href', TRACKING_PHONE_NUMBER_TEL);
      } else if (href.includes('7949912201')) {
        link.setAttribute('href', TRACKING_PHONE_NUMBER_TEL);
      }
    }
  });

  // Replace phone numbers in data attributes
  const elementsWithData = document.querySelectorAll('[data-phone], [data-tel]');
  elementsWithData.forEach((element) => {
    const phoneAttr = element.getAttribute('data-phone') || element.getAttribute('data-tel');
    if (phoneAttr && (phoneAttr.includes(REAL_PHONE_NUMBER_CLEAN) || phoneAttr.includes('447949912201'))) {
      element.setAttribute('data-phone', TRACKING_PHONE_NUMBER_CLEAN);
      element.setAttribute('data-tel', TRACKING_PHONE_NUMBER_TEL);
    }
  });
}

/**
 * Initialize phone number replacement
 * Should be called after DOM is loaded
 */
export function initPhoneTracking(): void {
  if (typeof window === 'undefined') return;

  // Run immediately if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replacePhoneNumbers);
  } else {
    replacePhoneNumbers();
  }

  // Also run after a short delay to catch dynamically loaded content
  setTimeout(replacePhoneNumbers, 100);
  setTimeout(replacePhoneNumbers, 500);
  setTimeout(replacePhoneNumbers, 1000);
}

// Export constants for use in components
export {
  REAL_PHONE_NUMBER,
  REAL_PHONE_NUMBER_INTL,
  REAL_PHONE_NUMBER_TEL,
  TRACKING_PHONE_NUMBER,
  TRACKING_PHONE_NUMBER_INTL,
  TRACKING_PHONE_NUMBER_TEL,
};


