# ⚛️ Practice React Router 6 ⚛️

From Bob Ziroll <https://github.com/scrimba/learn-react-router-6>

## :warning: Please read this carefully

This README file is the best "single source of truth" for you to see updates made to the course if you're coming from the freeCodeCamp YouTube channel!

As time passes, dependencies can sometimes become outdated or start exhibiting bugs that weren't there when I first recorded the course.

In the version of this course on Scrimba, it's easy for me to add quick updates and new lessons. However, the course on YouTube is frozen in time and unchangeable. So please come check the "[Updates](#updates)" section below often, as you may find there are important updates that can help you avoid common bugs.

## Updates

### April 28, 2023

In "Lesson 90: Challenge - Protected Routes in VanLife Part 2" [(https://youtu.be/nDGA3km5He4?t=23735)](https://youtu.be/nDGA3km5He4?t=23735) (05 - Actions and Protected Routes/14 - Challenge - Protected Routes in VanLife - Part 2), I remove `return null` from my inline loaders which was incorrect. What I should have followed up with was to add `return null` to the end of the `requireAuth` outside of the if statement. The code at the end of this challenge should be:

```js
import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = false
    
    if (!isLoggedIn) {
        throw redirect("/login")
    }
    return null
}
```

This way, for the loaders that are *only* running `await requireAuth()`, at least something (well, `null`, if you can call that "something" 😂) will get returned if the user is logged in.

### April 21, 2023

With an update made to v 6.4.5 of React Router, Mirage JS is causing some errors when using the `redirect` function from React Router. **tl;dr:** a library that Mirage JS is using under the hood (`pretender`) uses a polyfill for `fetch`, and that polyfill does not adhere to the `fetch` specifications, in that it does not return a response with a `body` property. In React Router 6.4.5, they included a new check to make sure that a response has a `body` property, which makes any `redirect` call in React Router fail.

You can work around this issue by modifying the response that comes back when calling `redirect`, like so:

Instead of

```js
return redirect("new-url")
```

You can capture the response in a variable and add a body property manually:

```js
const response = redirect("new-url")
response.body = true  // It's silly, but it works
// That shit is a mess
// return response
throw response;
```

## Info

React Router is the most popular routing library for React applications and one of the most downloaded React support libraries ever.

**In this course, I learned:**

- What are SPAs?
- Basic router setup
- Route
- Link
- Route parameters
- Nested routes and Outlet
- Layout and Index routes
- Relative paths
- NavLink
- Outlet context
- Search parameters
- Link state
- 404 page / Splat routes
- Loaders
- Actions
- Form & form data
- defer()
- Await
- Suspense
- Error handling & errorElement
- useRouteError
- useNavigate
- useNavigation
- useLocation
- useLoaderData
- useActionData
- Protected Routes
- Deploying with Netlify
