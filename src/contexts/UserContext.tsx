import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface User {
  name: string
  bio: string
  login: string
  avatar_url: string
  html_url: string
  company: string
  followers: number
}

interface Issue {
  id: number
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

interface UserContextTypes {
  user: User
  issues: Issue[]
  issueOpened: Issue
  getIssueById: (number: number) => Promise<void>
  fetchIssues: (query?: string) => Promise<void>
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext<UserContextTypes>(
  {} as UserContextTypes,
)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [issues, setIssues] = useState<Issue[]>([])
  const [issueOpened, setIssueOpened] = useState<Issue>({} as Issue)

  const fetchUsers = useCallback(async () => {
    const response = await api.get('users/leotheodoro')

    setUser(response.data)
  }, [])

  const fetchIssues = useCallback(async (query?: string) => {
    const response = await api.get(
      `search/issues?${
        query ? `q=${query}&20` : 'q=%20'
      }repo:leotheodoro/github-blog`,
    )

    setIssues(response.data.items)
  }, [])

  const getIssueById = useCallback(async (number: number) => {
    const response = await api.get(
      `repos/leotheodoro/github-blog/issues/${number}`,
    )

    setIssueOpened(response.data)
  }, [])

  useEffect(() => {
    fetchUsers()
    fetchIssues()
  }, [fetchUsers, fetchIssues])

  return (
    <UserContext.Provider
      value={{ user, issues, issueOpened, getIssueById, fetchIssues }}
    >
      {children}
    </UserContext.Provider>
  )
}
