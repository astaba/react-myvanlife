import { redirect } from "react-router-dom";

export const requireAuth = async (request) => {
  const isLoggedIn = localStorage.getItem("myVanLife123X");
  const url = new URL(request.url);
  const searchParams = new URLSearchParams();
  searchParams.set("message", "You must log in first!");
  searchParams.set("redirection", url.pathname);

  if(!isLoggedIn) {
    const response = redirect(`/login?${searchParams.toString()}`);
    // To compensate miragejs removing body prop of response obj
    response.body = true;
    throw response;
  }
  return null;
}
