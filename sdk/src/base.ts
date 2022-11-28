import fetch from "isomorphic-unfetch";

type Config = {
  apiKey: string;
  baseUrl?: string;
};
export abstract class Base {
  private apiKey: string;
  private baseUrl: string;
  constructor(config: Config) {
    this.apiKey = config.apiKey || "JSuIoci7ekZ7Os6fxGlY"; //JSuIoci7ekZ7Os6fxGlY
    this.baseUrl = config.baseUrl || "https://the-one-api.dev/v2"; //https://the-one-api.dev/v2
  }

  protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.apiKey}`,
    };

    const config = {
      ...options,
      headers,
    };
    return fetch(url, config).then((respose) => {
      if (respose.ok) {
        return respose.json();
      } else {
        throw new Error(respose.statusText);
      }
    });
  }
}
