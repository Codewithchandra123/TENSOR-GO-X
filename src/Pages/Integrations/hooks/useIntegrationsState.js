// src/Pages/Integrations/hooks/useIntegrationsState.js
import { useReducer, useMemo, useCallback } from 'react';
import { integrationsList } from '../data';

// Initial state for the reducer
const initialState = {
  integrations: integrationsList.map((int) => ({
    ...int,
    status: 'disconnected',
    isLoading: false,
  })),
  searchTerm: '',
  activeCategory: 'All',
  modalIntegration: null,
};

// Reducer function to handle all state changes
function integrationsReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'SET_ACTIVE_CATEGORY':
      return { ...state, searchTerm: '', activeCategory: action.payload }; // Reset search on category change
    case 'OPEN_MODAL':
      return { ...state, modalIntegration: action.payload };
    case 'CLOSE_MODAL':
      return { ...state, modalIntegration: null };
    case 'START_CONNECT':
      return {
        ...state,
        integrations: state.integrations.map((int) =>
          int.id === action.payload ? { ...int, isLoading: true } : int
        ),
        modalIntegration: state.modalIntegration
          ? { ...state.modalIntegration, isLoading: true }
          : null,
      };
    case 'CONNECT_SUCCESS':
      return {
        ...state,
        integrations: state.integrations.map((int) =>
          int.id === action.payload ? { ...int, status: 'connected', isLoading: false } : int
        ),
        modalIntegration: state.modalIntegration
          ? { ...state.modalIntegration, status: 'connected', isLoading: false }
          : null,
      };
    case 'DISCONNECT':
      return {
        ...state,
        integrations: state.integrations.map((int) =>
          int.id === action.payload ? { ...int, status: 'disconnected' } : int
        ),
        modalIntegration: null, // Close modal on disconnect
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// The custom hook
export const useIntegrationsState = () => {
  const [state, dispatch] = useReducer(integrationsReducer, initialState);

  const { integrations, searchTerm, activeCategory, modalIntegration } = state;

  // Memoized selectors for performance
  const filteredIntegrations = useMemo(() =>
    integrations
      .filter((int) => activeCategory === 'All' || int.category === activeCategory)
      .filter((int) =>
        int.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [integrations, activeCategory, searchTerm]
  );

  const categories = useMemo(() =>
    ['All', ...new Set(integrationsList.map((int) => int.category))],
    []
  );

  // Action dispatchers wrapped in useCallback for stable function references
  const handleConnect = useCallback((id) => {
    dispatch({ type: 'START_CONNECT', payload: id });
    // Simulate API call delay
    setTimeout(() => {
      dispatch({ type: 'CONNECT_SUCCESS', payload: id });
    }, 1500);
  }, []);

  const handleDisconnect = useCallback((id) => {
    dispatch({ type: 'DISCONNECT', payload: id });
  }, []);

  const setSearchTerm = useCallback((term) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  }, []);

  const setActiveCategory = useCallback((category) => {
    dispatch({ type: 'SET_ACTIVE_CATEGORY', payload: category });
  }, []);

  const setModalIntegration = useCallback((integration) => {
    if (integration) {
      dispatch({ type: 'OPEN_MODAL', payload: integration });
    } else {
      dispatch({ type: 'CLOSE_MODAL' });
    }
  }, []);
  
  return {
    ...state,
    setSearchTerm,
    setActiveCategory,
    setModalIntegration,
    handleConnect,
    handleDisconnect,
    filteredIntegrations,
    categories,
  };
};