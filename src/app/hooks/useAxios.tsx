import { useEffect } from "react";
import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

export const BASE_URL = import.meta.env.VITE_IP;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default function useAxios() {
  const onRequest = async (config: InternalAxiosRequestConfig) => {
    return config;
  };

  const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  const onError = async (error: AxiosError): Promise<never> => {
    return Promise.reject(error);
  };

  const requestInterceptor = api.interceptors.request.use(onRequest);
  const responseInterceptor = api.interceptors.response.use(
    response => onResponse(response),
    error => onError(error)
  );

  useEffect(() => {
    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor, requestInterceptor]);
}
