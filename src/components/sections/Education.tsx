export function Education() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-4">
        <div className="border-l-2 border-primary pl-4">
          <h3 className="text-xl font-semibold">[Degree Name]</h3>
          <p className="text-muted-foreground">[University Name] | [Year] - [Year]</p>
          <p className="mt-2">Description of your studies and achievements.</p>
        </div>
        {/* Add more education items here */}
      </div>
    </section>
  );
}
