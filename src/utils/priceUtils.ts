// Función helper para convertir precio de string a número
export function parsePrice(priceString: string): number {
  // Remover "S/ " y convertir a número
  return parseFloat(priceString.replace("S/ ", ""));
}
