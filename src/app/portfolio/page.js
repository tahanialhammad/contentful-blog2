import HeroSection from "../../components/HeroSection";
import client from "../../lib/contentful";
import PortfolioClient from "../../components/PortfolioClient"; // client component

// PortfolioPage is server component (async function).
// Server component = fetcht data → async → gebruikt environment variables → geen hooks.
// Client component = state, filter, interacties → "use client" bovenaan → geen async fetch met environment variables.
// Server component geeft data door via props.
export default async function PortfolioPage() {
  const res = await client.getEntries({
    content_type: "portfolio",
    order: "-sys.createdAt",
    include: 2,
  });

  const projects = res.items;
  const categories = Array.from(
    new Set(projects.map(p => p.fields.category?.fields?.name).filter(Boolean))
  );
// PortfolioClient gebruikt useState voor filter
  return <PortfolioClient projects={projects} categories={categories} />;
}
