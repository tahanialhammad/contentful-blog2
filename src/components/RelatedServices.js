import Card from "./Card";

export default function RelatedServices({ services }) {
  if (!services || services.length === 0) return null;

  return (
    <div className="max-w-5xl mx-auto px-6 mt-16 font-sans text-right">

      <h2 className="text-2xl font-bold mb-6 text-foreground">
        خدمات ذات صلة
      </h2>

      {/* MOBILE: horizontal scroll | DESKTOP: grid */}
      <div className="
        flex gap-4 overflow-x-auto pb-4
        sm:grid sm:grid-cols-2 md:grid-cols-3 sm:overflow-visible
      ">

        {services.map((service) => {
          const { name, images, slug } = service.fields;

          const image = images?.[0]
            ? `https:${images[0].fields.file.url}`
            : null;

          return (
            <div
              key={service.sys.id}
              className="min-w-[280px] sm:min-w-0"
            >
              <Card
                image={image}
                title={name}
                link={`/services/${slug}`}
                imageAlt={name}
              />
            </div>
          );
        })}

      </div>
    </div>
  );
}