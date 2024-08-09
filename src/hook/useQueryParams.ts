import { useState, useEffect } from 'react';

// Função auxiliar para obter parâmetros de consulta da URL
const getQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    const queryParams: Record<string, any> = {};

    params.forEach((value, key) => {
        try {
            // Tenta analisar o valor como JSON
            queryParams[key] = JSON.parse(value);
        } catch {
            // Se a análise JSON falhar, trata o valor como string
            if (value.includes(',')) {
                // Converte a string em um array se contiver vírgulas
                queryParams[key] = value.split(',').map(item => item.trim());
            } else {
                queryParams[key] = value;
            }
        }
    });

    return queryParams;
};

// Função auxiliar para definir parâmetros de consulta na URL
const setQueryParams = (newParams: Record<string, any>) => {
    const params = new URLSearchParams(window.location.search);
    const keys = Object.keys(newParams);

    for (const key of keys) {
        // Converte arrays em strings separadas por vírgula
        const value = Array.isArray(newParams[key])
            ? newParams[key].join(',')
            : newParams[key];

        params.set(key, value);
    }


    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
};

// Função auxiliar para remover parâmetros de consulta da URL
const removeQueryParams = (key: string | string[]) => {
    const keys = Array.isArray(key) ? key : [key]
    const params = new URLSearchParams(window.location.search);

    for (const k of keys) {
        console.info(`Removing ${k},${Array.isArray(key)}`)
        params.delete(k);
    }

    window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
};

export function useQueryParams() {
    const [queryParams, setQueryParamsState] = useState(() => getQueryParams());

    useEffect(() => {
        const handlePopState = () => {
            setQueryParamsState(getQueryParams());
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const setQueryParam = (key: string, value: any) => {
        const newParams = { ...queryParams, [key]: value };
        setQueryParamsState(newParams);
        setQueryParams(newParams);
    };

    const removeQueryParam = (key: string) => {
        const newParams = { ...queryParams };
        delete newParams[key];
        setQueryParamsState(newParams);
        removeQueryParams(key);
    };

    return {
        queryParams,
        setQueryParam,
        removeQueryParam
    };
}
