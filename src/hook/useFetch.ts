import { useState, useEffect } from 'react'

interface FetchOptions<Data, ResponseData> {
  type?: 'json' | 'text',
  transformData?: (data: ResponseData) => Promise<Data> | Data,
  defaultValue?: Data
}

const useFetch = <Data, ResponseData = Data>(
  url: string,
  { type = 'json', transformData, defaultValue }: FetchOptions<Data, ResponseData> = {},
)=> {
  const [data, setData] = useState<Data | null>(defaultValue ?? null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const result = await (type === 'json' ? response.json() : response.text())
        const transformedData = transformData ? await transformData(result as ResponseData) : result as Data
        setData(transformedData)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, transformData, type])

  // if(defaultValue) return { data: data as Data, isLoading, error }
  return { data, isLoading, error }
}

export default useFetch
