export default function TopProjects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="text-center">
        <h4 className="uppercase">Onze hoogtepunten</h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Professioneel & Creatief
        </h2>
        <p className="text-gray-600">
          Ontdek een selectie van projecten waar ik trots op ben. Elk project
          vertelt een verhaal van creativiteit, strategie en maatwerk.
        </p>
      </div>
{/* Grid 2/3 - 1/3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Grote project (2/3) */}
        <div className="md:col-span-2 bg-gray-100 rounded-xl p-6 flex items-center justify-center">
          <h3 className="text-xl font-semibold text-gray-800">
            Groot project (2/3 breed)
          </h3>
        </div>

        {/* Kleine project (1/3) */}
        <div className="bg-gray-200 rounded-xl p-6 flex items-center justify-center">
          <h3 className="text-lg font-medium text-gray-700">
            Klein project (1/3 breed)
          </h3>
        </div>
      </div>
      
    </section>
  );
}
