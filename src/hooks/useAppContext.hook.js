import { useContext } from 'react'
import { store } from 'store'

/**
 * Hook for extract app context state and reducer
 */
export default function useAppContext() {
    const [state, dispatch] = useContext(store)

    /**
     * Simplify dispatch invoke
     * @param {String} type
     * @param {Any} payload
     */
    const _dispatch = (type = '', payload = null) => {
        dispatch({ type, payload })
    }

    return [state, _dispatch]
}
