import ContactHero from "@/components/contact/contact-hero";
import FormContact from "@/components/contact/form-contact";
import ContactInfoCards from "@/components/contact/contact-info-cards";
import ContactFAQSection from "@/components/contact/contact-faq-section";

export default function Contact() {
  return (
    <>
      <ContactHero />
      <FormContact />
      <ContactInfoCards />
      <ContactFAQSection />
    </>
  );
}
