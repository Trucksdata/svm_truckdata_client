export function getHighestDigit(number) {
  const digits = Array.from(String(number ?? 0), Number);
  if (digits.length === 0) {
    return 0;
  }

  const cleanedDigits = digits?.filter(Boolean);
  const maxDigit = Math.max(...cleanedDigits);
  const maxNum = Number(maxDigit ?? 0) || 0;

  return maxNum;
}
