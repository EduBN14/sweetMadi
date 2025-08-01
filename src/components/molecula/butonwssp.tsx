import Buton from "../atomo/buton.tsx";

export type WhatsAppButtonProps = {
  phone?: string;           
  message?: string;         
  newTab?: boolean;         
  variant?: "primary" | "secondary";
  disabled?: boolean;
  classname?: string;
};

export default function Butonwssp({
  phone = "51964158504",  
  message = "Hola, estoy interesado en sus productos.", 
  newTab = true,
  variant = "primary",    
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
      Contactanos por WhatsApp 
    </Buton>
  );
}