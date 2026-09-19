// Server Component wrapper for static export.
// generateStaticParams tells Next.js which country routes to pre-render.
// The actual UI is in CountryPageClient.tsx (client component).
import { COUNTRIES } from "@/data/countries";
import CountryPageClient from "./CountryPageClient";

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ countryId: c.id }));
}

export default function CountryPage({
  params,
}: {
  params: Promise<{ countryId: string }>;
}) {
  return <CountryPageClient params={params} />;
}
