type AnalyticsPayload = Record<string, unknown>;

const isDevelopment = process.env.NODE_ENV !== "production";

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (isDevelopment) {
    console.debug("[analytics event]", eventName, payload);
  }

  // Placeholder for future analytics integration.
}

export function trackPageView(path: string) {
  if (isDevelopment) {
    console.debug("[analytics pageview]", path);
  }

  // Placeholder for future analytics integration.
}
