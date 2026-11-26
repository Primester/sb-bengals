const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const analyticsMeasurementId =
  process.env.NEXT_PUBLIC_REVIEW_BUILD !== "true" &&
  measurementId &&
  /^G-[A-Z0-9]+$/.test(measurementId)
    ? measurementId
    : undefined;
