interface QuoteProps {
  quoteText: string
}
export function Quote({ quoteText }: QuoteProps) {
  return (
    <div className="flex gap-20">
      <div className="h-auto w-2 bg-yellow-300" />
      <p className="w-full text-3xl font-normal leading-10">{quoteText}</p>
    </div>
  )
}
