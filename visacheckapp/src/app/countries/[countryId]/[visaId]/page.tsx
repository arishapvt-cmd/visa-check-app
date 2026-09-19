// Server Component wrapper — required for generateStaticParams with static export.
// The actual UI lives in VisaCheckClient.tsx (client component).
import { COUNTRIES } from "@/data/countries";
import VisaCheckClient from "./VisaCheckClient";

/* Pre-render all countryId + visaId combinations at build time */
export function generateStaticParams() {
  const params: { countryId: string; visaId: string }[] = [];
  for (const country of COUNTRIES) {
    for (const visa of country.visaTypes) {
      params.push({ countryId: country.id, visaId: visa.id });
    }
  }
  return params;
}

export default function VisaCheckPage({
  params,
}: {
  params: Promise<{ countryId: string; visaId: string }>;
}) {
  return <VisaCheckClient params={params} />;
}
