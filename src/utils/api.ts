const BASE_URL = 'https://quote-garden.onrender.com/api/v3/quotes'

export async function fetchQuotes(endpoint: string) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`)
    const { data } = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}
