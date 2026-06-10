import Card from "./Card";

export default function RelatedServices({ services }) {
  if (!services || services.length === 0) return null;

  return (
    <div className="max-w-5xl mx-auto px-6 mt-16 font-sans text-right">

      <h2 className="text-2xl font-bold mb-6 text-foreground">
        خدمات ذات صلة
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {services.map((service) => {
          const { name, images, slug } = service.fields;

          const image = images?.[0]
            ? `https:${images[0].fields.file.url}`
            : null;

          return (
            <Card
              key={service.sys.id}
              image={image}
              title={name}
              link={`/services/${slug}`}
              imageAlt={name}
            />
          );
        })}

      </div>
    </div>
  );
}