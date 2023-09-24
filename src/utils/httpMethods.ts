import axios, { AxiosResponse, AxiosError } from "axios";

/**
 * Reusable HTTP GET function.
 * @param url - The URL to send the GET request to.
 * @param params - Optional query parameters to include in the request.
 * @returns A Promise that resolves with the response data or rejects with an error.
 */
export async function getRequest<T>(
  api: string,
  params?: Record<string, any>
): Promise<T> {
  const response: AxiosResponse<T> = await axios.get(api, { params });
  return response.data;
}
