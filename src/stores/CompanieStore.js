import { create } from 'zustand'
import { getCompanies } from '../services/companies-service'

export const useCompanieStore = create((set) => ({
  companieName: '',
  selectedId: '',
  setSelectedId: (id) =>
    set((state) => ({
      selectedId: id,
      companieName: state.companies.find((companie) => companie.id === id).name,
    })),
  companies: [],
  fetchCompanies: async () => {
    const response = await getCompanies()
    set({
      companies: response,
      selectedId: response[0].id,
      companieName: response[0].name,
    })
  },
}))
