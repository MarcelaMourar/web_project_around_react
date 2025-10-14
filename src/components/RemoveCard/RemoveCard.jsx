import {useState} from "react";

export default function RemoveCard({ onConfirm, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleConfirm() {
    try {
      setIsSubmitting(true);
      await onConfirm(); 
      onClose();         
    } catch (err) {
      console.error("Erro ao excluir o card:", err);
    } finally {
      setIsSubmitting(false);
    }
  }

return (
  <>
    
    <h2 className="popup__title">Tem certeza?</h2>
    <button
      type="button"
      className="popup__save-button"
      onClick={handleConfirm}
      disabled={isSubmitting}
    >
      {isSubmitting ? "Excluindo..." : "Sim"}
    </button>
  </>
);

  
}