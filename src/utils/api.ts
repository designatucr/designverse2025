type API = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: object;
  headers?: HeadersInit;
};

export const api = async ({ url, method, headers, body }: API) => {
  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers,
  });

  const data = await response.json();

  return data;
};
