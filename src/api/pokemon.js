import { URL_API } from "../utils/constants";

export async function getPokemonsApi(nextUrl) {
  try {
    const url = `${URL_API}/pokemon?limit=20&offset=0`;
    const response = await fetch(nextUrl || url);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(id) {
  try {
    const url = `${URL_API}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
