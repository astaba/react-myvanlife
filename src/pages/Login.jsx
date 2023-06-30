import React from "react";
import {
  Form,
  redirect,
  useActionData,
  useSearchParams,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../apis";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const redirection =
    new URL(request.url).searchParams.get("redirection") || "/host";

  try {
    await loginUser({ email, password });
    localStorage.setItem("myVanLife123X", true);

    // return redirect(redirection);
    const response = redirect(redirection);
    response.body = true;
    return response;
  } catch (error) {
    return error;
  }
};

export default function Login() {
  const [searchParams] = useSearchParams();
  const actionData = useActionData();
  const navigation = useNavigation();

  // console.log("actionData => ", actionData);
  // console.log("navigation => ", navigation);

  const message = actionData?.message || searchParams.get("message");

  return (
    <div className="flowise login">
      <h1 className="title">Sign in to your account</h1>
      <div className="flowise form-container">
        {message && <h4 className="message">{message}</h4>}
        <Form method="post" className="flowise login-form" replace>
          <input type="email" name="email" placeholder="Email address" />
          <input type="password" name="password" placeholder="Password" />
          <button
            type="submit"
            className="btn btn-button"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Logging in..." : "Log in"}
          </button>
        </Form>
      </div>
      <p className="subscript">
        Don't have an account yet? <span>Create one now</span>
      </p>
      <details>
        <summary>Test Credentials</summary>
        <p>email: a@a.com, password: aqwx</p>
      </details>
    </div>
  );
}
