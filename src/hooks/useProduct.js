import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())
const useProduct = (categoryId) => {
    const path = 'http://localhost:5000/products';

    const { data = [], error, isLoading, isValidating, mutate } = useSWR(path, fetcher)

    return {
        data,
        error,
        isLoading,
        isValidating,
        mutate
    }
}

export default useProduct