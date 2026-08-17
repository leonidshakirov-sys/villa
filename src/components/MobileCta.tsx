import { PhoneLink } from "@/components/PhoneLink";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function MobileCta() {
  return (
    <div className="mobile-cta" role="navigation" aria-label="Быстрый контакт">
      <PhoneLink className="btn btn-primary">Позвонить</PhoneLink>
      <WhatsAppButton className="btn btn-whatsapp">WhatsApp</WhatsAppButton>
    </div>
  );
}
