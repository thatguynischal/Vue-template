interface CatFact {
  fact: string
  length: number
}

interface PaginatedResponse {
  current_page: number
  data: CatFact[]
  first_page_url: string
  from: number
  last_page: number
}

export type { CatFact, PaginatedResponse }
