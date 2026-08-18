import { PhoneLink } from "@/components/PhoneLink";
import { WhatsAppButton } from "@/components/WhatsAppButton";

type CtaButtonsProps = {
  phoneLabel?: string;
  whatsappLabel?: string;
  className?: string;
};

export function CtaButtons({
  phoneLabel = "Позвонить Леониду",
  whatsappLabel = "Написать в WhatsApp",
  className = "",
}: CtaButtonsProps) {
  return (
    <div className={`cta-row ${className}`.trim()}>
      <PhoneLink className="btn btn-primary">{phoneLabel}</PhoneLink>
      <WhatsAppButton className="btn btn-whatsapp">{whatsappLabel}</WhatsAppButton>
    </div>
  );
}
