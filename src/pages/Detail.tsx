import { FC, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Section } from "@components/layout/Section/Section";
import { useAppState } from "@context/state/Global";
import { useParams } from "react-router-dom";
import { fetchCharacters } from "@/utils/fetch";
import Slider from "@components/ui/Slider/Slider";
import FavButton from "@components/ui/FavButton/FavButton";
import { IHeroInfo, IComicInfo } from "@context/state/types";
interface DetailProps {}

const Detail: FC<DetailProps> = () => {
  /**TODO:
   * Add test for the detail component
   */
  const {
    heroDetails,
    dispatchHeroDetails,
    heroComicsList,
    dispatchHeroComicsList,
  } = useAppState();
  const { id } = useParams();
  const parsedId = id ? Number(id) : 0;
  const { favs, dispatchFavs } = useAppState();
  const isFav = favs.list.includes(parsedId);
  // HERO DETAILS
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatchHeroDetails({ type: "FETCH_HERO_DETAILS_REQUEST" });
        const details = (await fetchCharacters({ id })) as IHeroInfo[];
        dispatchHeroDetails({
          type: "FETCH_HERO_DETAILS_SUCCESS",
          payload: details[0],
        });
      } catch (error: unknown) {
        dispatchHeroDetails({
          type: "FETCH_HERO_DETAILS_FAILURE",
          payload: error as string,
        });
        console.error("Error fetching data:", error);
      }
    };
    if (!heroDetails.data || !heroDetails.data.id) {
      fetchData();
    }
  }, [id, heroDetails.data, dispatchHeroDetails]);
  // HERO COMICS
  useEffect(() => {
    const fetchComicsData = async () => {
      try {
        dispatchHeroComicsList({ type: "FETCH_HERO_COMICS_REQUEST" });
        const comics = await fetchCharacters({
          id,
          comics: true,
          limit: "20",
        });
        dispatchHeroComicsList({
          type: "FETCH_HERO_COMICS_SUCCESS",
          payload: comics as IComicInfo[],
        });
      } catch (error: unknown) {
        dispatchHeroComicsList({
          type: "FETCH_HERO_COMICS_FAILURE",
          payload: error as string,
        });
        console.error("Error fetching data:", error);
      }
    };

    fetchComicsData();
  }, [id, dispatchHeroComicsList]);

  const {
    name = "",
    description = "",
    thumbnail = "",
  } = heroDetails.data as IHeroInfo;

  const detailImg =
    typeof thumbnail === "object"
      ? `${thumbnail.path}.${thumbnail.extension}`
      : "";
  const favAriaLabel = `${isFav ? "Remove" : "Add"} ${name} to favourite list`;

  const getComicDate = (name: string) => name.split("(")[1].split(")")[0];

  const formatComics = (comics: IComicInfo[]) =>
    comics.map((comic: IComicInfo) => ({
      ...comic,
      img: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      note: getComicDate(comic.title),
    }));

  const handleFav = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isFav) {
        dispatchFavs({ type: "ADD_FAV", payload: parsedId });
      } else {
        dispatchFavs({ type: "REMOVE_FAV", payload: parsedId });
      }
    },
    [dispatchFavs, parsedId, isFav]
  );

  return (
    <Section mode={"fullwidth"}>
      <StyledBanner>
        <StyledBannerContent>
          <StyledBannerImage $img={detailImg} />
          <StyledBannerDescription>
            <div>
              <h1>{name}</h1>
              <FavButton
                areaLabel={favAriaLabel}
                handleClick={handleFav}
                isFav={isFav}
                size="large"
              ></FavButton>
            </div>
            <p>{description}</p>
          </StyledBannerDescription>
        </StyledBannerContent>
      </StyledBanner>
      <StyledContent>
        <h2>COMICS</h2>
        <Slider
          isLoading={heroComicsList.isLoading}
          items={formatComics(heroComicsList.data)}
        />
      </StyledContent>
    </Section>
  );
};

const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #ffffff;
  background-color: #000000;
  max-height: 320px;
  position: relative;
  @media screen and (max-width: 544px) {
    max-height: initial;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 24px solid transparent;
    border-right: 24px solid#FFFFFF;
    border-top: 24px solid transparent;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
`;
const StyledBannerContent = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media screen and (max-width: 544px) {
    flex-direction: column;
  }
`;
const StyledBannerDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 640px;
  width: 100%;
  padding: 48px;
  gap: 24px;
  @media screen and (max-width: 992px) {
    max-width: 556px;
  }
  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
const StyledBannerImage = styled.div<{ $img: string }>`
  width: 320px;
  height: 320px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.$img});
  @media screen and (max-width: 992px) {
    width: 278px;
    height: 278px;
  }
`;
const StyledContent = styled.div`
  padding: 48px 0px 48px 0px;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 992px) {
    padding: 48px;
  }
  @media screen and (max-width: 544px) {
    padding: 48px 16px;
  }
  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #000000;
    margin: 0;
  }
`;
export default Detail;
