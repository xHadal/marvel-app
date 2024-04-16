import MD5 from "crypto-js/md5";

interface FetchProps {
  name?: string;
  id?: string;
  comics?: boolean;
  limit?: string;
}

const API_URL: string = import.meta.env.VITE_API_URL || "";

export const fetchCharacters = async ({
  name,
  id,
  comics = false,
  limit = "50",
}: FetchProps): Promise<unknown> => {
  const baseUrl: string = `${API_URL}/v1/public/characters`;
  const ts: string = Date.now().toString();
  const publicKey: string = import.meta.env.VITE_PUBLIC_API_KEY || "";
  const privateKey: string = import.meta.env.VITE_PRIVATE_API_KEY || "";

  const getComics: string = comics ? "/comics" : "";
  const getId: string = id ? `/${id}` : "";

  const hash: string = MD5(ts + privateKey + publicKey).toString();
  const url: string = `${baseUrl}${
    getId + getComics
  }?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}${
    name && `&nameStartsWith=${name}`
  }`;

  try {
    const response: Response = await fetch(url);
    const responseJSON: { data: { results: unknown } } = await response.json();
    return responseJSON.data?.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
};
