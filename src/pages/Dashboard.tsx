import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Section } from "@components/ui/layout/Section";
import Card from "@components/ui/Card";
import { fetchCharacters } from "@utils/fetch";
import SearchBar from "@components/ui/SearchBar";
interface DashboardProps {}
import { useAppState } from "@context/Global";
import { useDebounce } from "@utils/Debounce";
import { IHeroInfo } from "@utils/types";
import GridSkeleton from "@components/ui/layout/skeleton/GridSkeleton";

const Dashboard: React.FC<DashboardProps> = () => {
  /**TODO:
   * Add test for the Dashboard.tsx component
   */
  const [search, setSearch] = useState("");
  const { heroesList, dispatchHeroesList, dispatchHeroDetails } = useAppState();
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatchHeroesList({ type: "FETCH_HEROES_LIST_REQUEST" });
        const heroes = (await fetchCharacters({
          name: debouncedSearch,
        })) as IHeroInfo[];
        dispatchHeroesList({
          type: "FETCH_HEROES_LIST_SUCCESS",
          payload: heroes,
        });
      } catch (error: unknown) {
        dispatchHeroesList({
          type: "FETCH_HEROES_LIST_FAILURE",
          payload: error,
        });
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [debouncedSearch, dispatchHeroesList]);

  const filterItems = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <Section mode={"centered"}>
      <SearchBar
        handleOnchange={filterItems}
        resultsCounter={heroesList.data.length}
      />
      {heroesList.isLoading ? (
        <GridSkeleton />
      ) : (
        <GridContainer>
          {heroesList.data.map((hero, index: number) => (
            <GridItem key={index}>
              <StyledNavLink
                to={`/detail/${hero.id}`}
                aria-label={`Go to ${hero.name} details`}
                role="link"
                title={`Go to ${hero.name} details`}
                onClick={() =>
                  dispatchHeroDetails({
                    type: "SET_HERO_DETAILS",
                    payload: hero,
                  })
                }
              >
                <Card key={index} itemInfo={hero} />
              </StyledNavLink>
            </GridItem>
          ))}
        </GridContainer>
      )}
    </Section>
  );
};

export default Dashboard;
const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(188px, 1fr));
  gap: 15px;
  list-style: none;
  padding: 40px 0;
  @media screen and (max-width: 544px) {
    grid-template-columns: repeat(auto-fill, minmax(172.5px, 1fr));
  }
`;

const GridItem = styled.li`
  background-color: #f0f0f0;
  max-width: 188.57px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
