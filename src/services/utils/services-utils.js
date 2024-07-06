const SUCCESS = 200

export const isError = (response) => response.status !== SUCCESS
