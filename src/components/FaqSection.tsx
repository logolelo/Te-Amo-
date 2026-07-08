import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Does it last as long as spray perfume?",
      answer: "Solid perfume stays close to the skin and typically lasts 4–6 hours depending on your skin type and activity."
    },
    {
      question: "Will it melt?",
      answer: "It stays solid under normal conditions. Avoid leaving it in direct sunlight or inside a hot parked car."
    },
    {
      question: "Can I carry it on flights?",
      answer: "Yes. Since it's a solid balm, it's easy to travel with."
    },
    {
      question: "Is it for men or women?",
      answer: "Our fragrances are designed to be enjoyed by anyone. Choose the scent that matches your style."
    },
    {
      question: "How many applications does one tin last?",
      answer: "A 10g tin provides hundreds of applications with normal daily use."
    }
  ];

  return (
    <section className="py-24 bg-background" id="faq">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
