import { ArrowRight } from 'lucide-react'
import { Quote } from './Quote'

interface RandomQuoteProps {
  quoteText: string
  quoteAuthor: string
  quoteGenre: string

  setIsAuthorSelected: (isAuthorSelected: boolean) => void
}

export function RandomQuote({
  quoteAuthor,
  quoteGenre,
  quoteText,
  setIsAuthorSelected,
}: RandomQuoteProps) {
  return (
    <div className="flex max-h-[720px] flex-col items-center justify-center">
      <Quote quoteText={quoteText} />

      <div
        onClick={() => setIsAuthorSelected(true)}
        className="group mt-20 w-full max-w-lg cursor-pointer self-end px-6 py-8 duration-300 ease-out hover:bg-gray-600"
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold group-hover:text-gray-100">
              {quoteAuthor}
            </p>
            <p className="text-sm text-gray-300">{quoteGenre}</p>
          </div>

          <ArrowRight className="invisible text-gray-100 group-hover:visible" />
        </div>
      </div>
    </div>
  )
}
