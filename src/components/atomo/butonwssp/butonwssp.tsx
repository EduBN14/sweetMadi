import Buton from "../buton/buton.tsx";

export type WhatsAppButtonProps = {
  phone: string;           // e.g. "51912345678"
  message?: string;        // Texto predefinido
  newTab?: boolean;        // Abrir en nueva pestaña (default: true)
  variant?: "primary" | "secondary";
  disabled?: boolean;
};

export default function Butonwssp({
  phone,
  message = "",
  newTab = true,
  variant,
  disabled = false,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    if (disabled) return;
    const textParam = message ? `?text=${encodeURIComponent(message)}` : "";
    const url = `https://wa.me/${phone}${textParam}`;
    if (newTab) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  };

  return (
    <Buton
      onClick={handleClick}
      variant={variant}
      disabled={disabled}
      type="button"
    >
      Contactar por WhatsApp
    </Buton>
  );
}