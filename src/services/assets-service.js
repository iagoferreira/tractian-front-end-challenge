import { COMPANIES_API } from './apis'
import { isError } from './utils/services-utils'

export const getAssets = async (companyId) => {
  try {
    const response = await fetch(`${COMPANIES_API}/${companyId}/assets`)

    if (isError(response)) {
      throw new Error(response)
    }

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
