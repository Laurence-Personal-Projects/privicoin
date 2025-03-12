import { handleRequest } from "@/assets/js/services/helper";

export function fetchProjects(params) {
  return handleRequest({
    method: 'get',
    url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
    params,
  });
}