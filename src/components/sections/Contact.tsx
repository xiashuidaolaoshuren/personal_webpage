import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="py-12 border-t">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-muted-foreground mb-4">
        Feel free to reach out to me for collaborations or just a friendly chat.
      </p>
      <div className="flex gap-4">
        <Button>Email Me</Button>
        <Button variant="outline">LinkedIn</Button>
        <Button variant="outline">GitHub</Button>
      </div>
    </section>
  );
}
