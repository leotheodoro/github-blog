import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserContext } from '../../../../contexts/UserContext'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchIssues, totalIssues } = useContextSelector(
    UserContext,
    (context) => {
      return {
        fetchIssues: context.fetchIssues,
        totalIssues: context.totalIssues,
      }
    },
  )

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchIssues({ query }: SearchFormInputs) {
    await fetchIssues(query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <div>
        <strong>Publicações</strong>
        <span>
          {totalIssues} {totalIssues === 1 ? 'publicação' : 'publicações'}
        </span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
