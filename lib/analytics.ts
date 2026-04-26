declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

type AnalyticsProps = Record<string, string | number | boolean | null | undefined>;

function normalizeProps(props?: AnalyticsProps): Record<string, string> | undefined {
  if (!props) return undefined;

  return Object.fromEntries(
    Object.entries(props)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [key, String(value)])
  );
}

export function trackEvent(eventName: string, props?: AnalyticsProps) {
  const normalized = normalizeProps(props);

  if (typeof window === "undefined") return;

  if (typeof window.plausible === "function") {
    window.plausible(eventName, normalized ? { props: normalized } : undefined);
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics event]", eventName, normalized ?? {});
  }
}

export function trackPageView(path: string) {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics pageview]", path);
  }
}
