/**
 * Форматирует число как строку с указанным символом валюты.
 *
 * @param {number} number - Число, которое будет преобразовано в формат валюты.
 * @returns {string} Отформатированное число с символом валюты.
 */
export function formatToCurrency(number) {
	return new Intl.NumberFormat('ru-KZ', {
		currency: 'KZT',
		style: 'currency'
	}).format(number);
}