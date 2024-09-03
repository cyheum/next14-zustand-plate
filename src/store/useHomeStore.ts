import { create } from 'zustand'

import { GET } from '@/utils'

interface HomeStore {
  isLoading: {
    main: boolean
  }
  data: any
  count: number

  actions: {
    setIsLoading(isLoading: HomeStore['isLoading']): void
    setData(data: HomeStore['data']): void
    setCount(count: HomeStore['count']): void
  }

  fetch: {
    getData(): void
  }
}

const useHomeStore = create<HomeStore>((set, get) => ({
  isLoading: {
    main: false,
  },
  data: null as any,
  count: 0,
  actions: {
    setIsLoading: (isLoading) => set({ isLoading }),
    setData: (data) => set({ data }),
    setCount: (count) => set({ count }),

    /* 관심코인 리스트 가져오기 메서드 */
  },
  fetch: {
    getData: async () => {
      set({ isLoading: { ...get().isLoading, main: true } })
      try {
        const data = await GET('')
        set({ data })
      } catch (e) {
        console.error('Get Favorite Coin List Error:', e)
      } finally {
        set({ isLoading: { ...get().isLoading, main: false } })
      }
    },
  },
}))

export default useHomeStore
