import { RefreshCw } from 'lucide-react'

interface HeaderProps {
  handleFetchRandomQuote: () => void
}

export function Header({ handleFetchRandomQuote }: HeaderProps) {
  return (
    <header className="self-end">
      <button
        onClick={() => handleFetchRandomQuote()}
        className="flex cursor-pointer items-center gap-2 text-gray-500"
      >
        <span>random</span>
        <RefreshCw size={20} />
      </button>
    </header>
  )
}
