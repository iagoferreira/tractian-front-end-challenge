import { create } from 'zustand'
import { getCompanies } from '../services/companies-service'
import { getLocations } from '../services/locations-service'
import { getAssets } from '../services/assets-service'

export const useCompanieStore = create((set) => ({
  companies: [],
  companieName: '',
  selectedId: '',
  locations: [],
  assets: [],

  setSelectedId: (id) =>
    set((state) => ({
      selectedId: id,
      companieName: state.companies.find((companie) => companie.id === id).name,
    })),

  fetchCompanies: async () => {
    const response = await getCompanies()
    set({
      companies: response,
      selectedId: response[0].id,
      companieName: response[0].name,
    })
  },

  fetchLocationsAndAssets: async (companyId) => {
    const locationsResponse = await getLocations(companyId)
    const assetsResponse = await getAssets(companyId)
    set({
      locations: locationsResponse,
      assets: assetsResponse,
    })
  },
}))
