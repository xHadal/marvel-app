//STATE
export interface AppState {
  heroesList: HeroesListState;
  heroDetails: HeroDetailsState;
  heroComicsList: HeroComicsListState;
  favs: FavsState;
}
//HEROES
export interface HeroesListState {
  isLoading: boolean;
  data: IHeroInfo[];
  error: string | null;
}
export interface HeroDetailsState {
  isLoading: boolean;
  data: IHeroInfo;
  error: string | null;
}
export interface IHeroInfo {
  id: number;
  name: string;
  description: string;
  isFav: boolean;
  thumbnail: {
    path: string;
    extension: string;
  };
}
export interface HeroComicsListState {
  isLoading: boolean;
  data: IComicInfo[];
  error: string | null;
}
export interface FavsState {
  list: number[];
}
export interface IComicInfo {
  id: string;
  title: string;
  img: string;
  note: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

// CONTEXT
export interface HeroesListContextType {
  heroesList: HeroesListState;
  dispatchHeroesList: React.Dispatch<HeroesListAction>;
}
export interface HeroDetailsContextType {
  heroDetails: HeroDetailsState;
  dispatchHeroDetails: React.Dispatch<HeroDetailsAction>;
}
export interface HeroComicsListContextType {
  heroComicsList: HeroComicsListState;
  dispatchHeroComicsList: React.Dispatch<HeroComicsListAction>;
}
export interface FavsContextType {
  favs: FavsState;
  dispatchFavs: React.Dispatch<FavsAction>;
}
export interface AppContextType
  extends HeroesListContextType,
    HeroDetailsContextType,
    HeroComicsListContextType,
    FavsContextType {
  appState: AppState;
}
export type AppAction =
  | HeroesListAction
  | HeroDetailsAction
  | HeroComicsListAction
  | FavsAction;

export type HeroesListAction =
  | { type: "FETCH_HEROES_LIST_REQUEST" }
  | { type: "FETCH_HEROES_LIST_SUCCESS"; payload: IHeroInfo[] }
  | { type: "FETCH_HEROES_LIST_FAILURE"; payload: unknown }
  | { type: "SET_HEROES_LIST"; payload: IHeroInfo[] };

export type HeroDetailsAction =
  | { type: "FETCH_HERO_DETAILS_REQUEST" }
  | { type: "FETCH_HERO_DETAILS_SUCCESS"; payload: IHeroInfo }
  | { type: "FETCH_HERO_DETAILS_FAILURE"; payload: unknown }
  | { type: "SET_HERO_DETAILS"; payload: IHeroInfo };
export type HeroComicsListAction =
  | { type: "FETCH_HERO_COMICS_REQUEST" }
  | { type: "FETCH_HERO_COMICS_SUCCESS"; payload: IComicInfo[] }
  | { type: "FETCH_HERO_COMICS_FAILURE"; payload: unknown };

export type FavsAction =
  | { type: "ADD_FAV"; payload: number }
  | { type: "REMOVE_FAV"; payload: number };
