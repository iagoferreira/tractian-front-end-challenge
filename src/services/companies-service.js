import { API } from './apis'
import { isError } from './utils/services-utils'

export const getCompanies = async () => {
  try {
    const response = await fetch(`${API}/companies`)

    if (isError(response)) {
      throw new Error(response)
    }

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
