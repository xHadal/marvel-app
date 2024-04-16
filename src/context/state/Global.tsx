import React, { createContext, useContext, useReducer } from "react";
import { AppAction, AppState, AppContextType, IHeroInfo } from "@state/types";

const initialState: AppState = {
  heroesList: {
    isLoading: false,
    data: [],
    error: null,
  },

  heroDetails: {
    isLoading: false,
    data: {
      id: 0,
      name: "",
      description: "",
      isFav: false,
      thumbnail: {
        path: "",
        extension: "",
      },
    },

    error: null,
  },
  heroComicsList: {
    isLoading: false,
    data: [],
    error: null,
  },
  favs: {
    list: [],
  },
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    // HEROES LIST
    case "FETCH_HEROES_LIST_REQUEST":
      return {
        ...state,
        heroesList: { ...state.heroesList, isLoading: true, error: null },
      };
    case "FETCH_HEROES_LIST_SUCCESS":
      return {
        ...state,
        heroesList: {
          ...state.heroesList,
          isLoading: false,
          data: action.payload as IHeroInfo[],
          error: null,
        },
      };
    case "FETCH_HEROES_LIST_FAILURE":
      return {
        ...state,
        heroesList: {
          ...state.heroesList,
          isLoading: false,
          error: action.payload as string,
        },
      };
    case "SET_HEROES_LIST":
      return {
        ...state,
        heroesList: {
          ...state.heroesList,
          isLoading: false,
          data: action.payload as IHeroInfo[],
          error: null,
        },
      };
    // HERO DETAILS
    case "FETCH_HERO_DETAILS_REQUEST":
      return {
        ...state,
        heroDetails: { ...state.heroDetails, isLoading: true, error: null },
      };
    case "FETCH_HERO_DETAILS_SUCCESS":
      return {
        ...state,
        heroDetails: {
          ...state.heroDetails,
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case "FETCH_HERO_DETAILS_FAILURE":
      return {
        ...state,
        heroDetails: {
          ...state.heroDetails,
          isLoading: false,
          error: action.payload as string,
        },
      };
    case "SET_HERO_DETAILS":
      return {
        ...state,
        heroDetails: {
          ...state.heroDetails,
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    // COMICS
    case "FETCH_HERO_COMICS_REQUEST":
      return {
        ...state,
        heroComicsList: {
          ...state.heroComicsList,
          isLoading: true,
          error: null,
        },
      };
    case "FETCH_HERO_COMICS_SUCCESS":
      return {
        ...state,
        heroComicsList: {
          ...state.heroComicsList,
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case "FETCH_HERO_COMICS_FAILURE":
      return {
        ...state,
        heroComicsList: {
          ...state.heroComicsList,
          isLoading: false,
          error: action.payload as string,
        },
      };
    // FAVS
    case "ADD_FAV":
      return {
        ...state,
        favs: {
          ...state.favs,
          list: [...state.favs.list, action.payload],
        },
      };
    case "REMOVE_FAV":
      return {
        ...state,
        favs: {
          ...state.favs,
          list: state.favs.list.filter((id) => id !== action.payload),
        },
      };
    default:
      return state;
  }
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [appState, dispatch] = useReducer(appReducer, initialState);
  const contextValue: AppContextType = {
    appState,
    heroesList: appState.heroesList,
    dispatchHeroesList: dispatch,
    heroDetails: appState.heroDetails,
    dispatchHeroDetails: dispatch,
    heroComicsList: appState.heroComicsList,
    dispatchHeroComicsList: dispatch,
    favs: appState.favs,
    dispatchFavs: dispatch,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppContextProvider");
  }
  return context;
};
