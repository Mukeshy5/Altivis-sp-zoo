export const currencies = {
  USD: { code: 'USD', symbol: '$', rate: 1 },
  PLN: { code: 'PLN', symbol: 'zł', rate: 4 },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79 },
}

export const formatCurrency = (amountInUsd, currency) => {
  const selectedCurrency = currencies[currency] || currencies.USD
  const amount = amountInUsd * selectedCurrency.rate

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: selectedCurrency.code,
    maximumFractionDigits: 2,
  }).format(amount)
}
