import { COMPANIES_API } from './apis'
import { isError } from './utils/services-utils'

export const getLocations = async (companyId) => {
  try {
    const response = await fetch(`${COMPANIES_API}/${companyId}/locations`)

    if (isError(response)) {
      throw new Error(response)
    }

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
