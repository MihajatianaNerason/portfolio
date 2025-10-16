import { Section } from "./Section";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card">
      <Section className="py-8">
        <p className="text-muted-foreground text-sm text-center">
          &copy;Copywrite {year} Mihajatiana Andriakotonerason
        </p>
      </Section>
    </footer>
  );
};
