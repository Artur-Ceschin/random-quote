import { useEffect, useState } from 'react'
import { Quote } from './Quote'
import { fetchQuotes } from '@/utils/api'
import { LoaderSpinner } from './LoaderSpinner'

interface QuoteData {
  _id: string
  quoteText: string
  quoteAuthor: string
  quoteGenre: string
}

interface AuthorsQuotesProps {
  author: string
}

export function AuthorsQuotes({ author }: AuthorsQuotesProps) {
  const [authorsQuotes, setAuthorsQuotes] = useState<QuoteData[]>([])

  useEffect(() => {
    getQuotesByAuthor()
  }, [])

  async function getQuotesByAuthor() {
    try {
      const data = await fetchQuotes(`?author=${author}`)

      setAuthorsQuotes(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {!authorsQuotes.length ? (
        <LoaderSpinner />
      ) : (
        <>
          <h1 className="ml-20 text-4xl font-bold">{author}</h1>

          <div className="my-40 flex flex-col gap-32">
            {authorsQuotes.map((quote) => (
              <Quote key={quote._id} quoteText={quote.quoteText} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
