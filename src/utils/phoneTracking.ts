/**
 * Phone Number Tracking Utility
 *
 * Maintains NAP consistency for SEO by keeping the real phone number in HTML source,
 * while replacing it with a tracking number at runtime for human visitors.
 *
 * Numbers are sourced from src/data/business.ts - the single NAP source of truth.
 */

import { business } from "@/data/business";

const REAL_PHONE_NUMBER = business.phoneLocal;
const REAL_PHONE_NUMBER_INTL = business.phone;
const REAL_PHONE_NUMBER_CLEAN = business.phone.replace("+", "");

const TRACKING_PHONE_NUMBER = business.trackingPhoneLocal;
const TRACKING_PHONE_NUMBER_INTL = business.trackingPhone;
const TRACKING_PHONE_NUMBER_TEL = business.trackingPhoneTel;
const TRACKING_PHONE_NUMBER_CLEAN = business.trackingPhone.replace("+", "");

/**
 * Replaces all phone numbers in the DOM with tracking numbers
 * This runs after page load to maintain SEO-friendly HTML source
 */
export function replacePhoneNumbers(): void {
  if (typeof window === "undefined") return;

  // Replace phone numbers in text content
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);

  const textNodes: Text[] = [];
  let node: Node | null = walker.nextNode();

  while (node) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent) {
      const text = node.textContent;
      if (
        text.includes(REAL_PHONE_NUMBER) ||
        text.includes(REAL_PHONE_NUMBER_INTL) ||
        text.includes(REAL_PHONE_NUMBER.replace(" ", "")) ||
        text.includes(`+44 ${REAL_PHONE_NUMBER}`)
      ) {
        textNodes.push(node as Text);
      }
    }
    node = walker.nextNode();
  }

  textNodes.forEach((textNode) => {
    if (textNode.textContent) {
      let newText = textNode.textContent;

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
    const href = link.getAttribute("href");
    if (href) {
      if (
        href.includes(REAL_PHONE_NUMBER_CLEAN) ||
        href.includes("447949912201") ||
        href.includes("7949912201")
      ) {
        link.setAttribute("href", TRACKING_PHONE_NUMBER_TEL);
      }
    }
  });

  // Replace WhatsApp links
  const whatsappLinks = document.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me"]');
  whatsappLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && (href.includes("447949912201") || href.includes("7949912201"))) {
      link.setAttribute("href", href.replace(/447949912201|7949912201/g, TRACKING_PHONE_NUMBER_CLEAN));
    }
  });

  // Replace phone numbers in data attributes
  const elementsWithData = document.querySelectorAll("[data-phone], [data-tel]");
  elementsWithData.forEach((element) => {
    const phoneAttr = element.getAttribute("data-phone") || element.getAttribute("data-tel");
    if (phoneAttr && (phoneAttr.includes(REAL_PHONE_NUMBER_CLEAN) || phoneAttr.includes("447949912201"))) {
      element.setAttribute("data-phone", TRACKING_PHONE_NUMBER_CLEAN);
      element.setAttribute("data-tel", TRACKING_PHONE_NUMBER_TEL);
    }
  });
}

/**
 * Initialize phone number replacement
 * Should be called after DOM is loaded
 */
export function initPhoneTracking(): void {
  if (typeof window === "undefined") return;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", replacePhoneNumbers);
  } else {
    replacePhoneNumbers();
  }

  // Also run after short delays and observe DOM mutations to catch
  // dynamically loaded content (React islands hydrating after initial paint)
  setTimeout(replacePhoneNumbers, 100);
  setTimeout(replacePhoneNumbers, 500);
  setTimeout(replacePhoneNumbers, 1000);
  setTimeout(replacePhoneNumbers, 2000);

  if (typeof MutationObserver !== "undefined") {
    const observer = new MutationObserver((mutations) => {
      const hasAddedNodes = mutations.some((mutation) => mutation.addedNodes.length > 0);
      if (hasAddedNodes) {
        setTimeout(replacePhoneNumbers, 50);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}

// Export constants for use in components
export {
  REAL_PHONE_NUMBER,
  REAL_PHONE_NUMBER_INTL,
  TRACKING_PHONE_NUMBER,
  TRACKING_PHONE_NUMBER_INTL,
  TRACKING_PHONE_NUMBER_TEL,
};
