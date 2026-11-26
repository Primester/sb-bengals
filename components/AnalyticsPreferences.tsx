"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const preferenceKey = "bengals-analytics";
type Preference = "allow" | "decline";

export function AnalyticsPreferences({
  measurementId,
}: {
  measurementId: string;
}) {
  const [preference, setPreference] = useState<Preference | null>(null);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const disableKey = `ga-disable-${measurementId}`;

  useEffect(() => {
    let storedPreference: string | null = null;
    try {
      storedPreference = localStorage.getItem(preferenceKey);
    } catch {
      // This browser does not persist site preferences.
    }
    if (storedPreference === "allow" || storedPreference === "decline") {
      Reflect.set(window, disableKey, storedPreference === "decline");
      setPreference(storedPreference);
    } else {
      setPreferencesOpen(true);
    }
  }, [disableKey]);

  function savePreference(choice: Preference) {
    Reflect.set(window, disableKey, choice === "decline");
    try {
      localStorage.setItem(preferenceKey, choice);
    } catch {
      // The choice still applies until this page is closed.
    }
    setPreference(choice);
    setPreferencesOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className="analytics-settings"
        aria-expanded={preferencesOpen}
        onClick={() => setPreferencesOpen(!preferencesOpen)}
      >
        Analytics preferences
      </button>
      {preferencesOpen && (
        <section
          className="analytics-preferences"
          aria-label="Website analytics preferences"
        >
          <p>
            Allow Google Analytics to help us understand how families use the
            Bengals website?
          </p>
          <div className="analytics-preferences-actions">
            <button
              type="button"
              className="button button-small"
              onClick={() => savePreference("allow")}
            >
              Allow analytics
            </button>
            <button
              type="button"
              className="button button-small button-white"
              onClick={() => savePreference("decline")}
            >
              Decline analytics
            </button>
          </div>
        </section>
      )}
      {preference === "allow" && (
        <>
          <Script id="bengals-google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${JSON.stringify(measurementId)}, {
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
        </>
      )}
    </>
  );
}
