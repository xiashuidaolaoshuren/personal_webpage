import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card Placeholder */}
        <div className="border rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Project Name</h3>
          <p className="text-muted-foreground mb-4">Brief description of the project.</p>
          <Button variant="outline">View Project</Button>
        </div>
        {/* Add more project cards here */}
      </div>
    </section>
  );
}
