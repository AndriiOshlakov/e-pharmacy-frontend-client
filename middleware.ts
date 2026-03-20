import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { parse } from "cookie";
import { refreshServerSession } from "./lib/api/serverApi";

const privateRoutes = ["/cart"];
const publicRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isPrivateRoute = privateRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (!accessToken) {
    if (refreshToken) {
      const data = await refreshServerSession();
      const setCookie = data.headers["set-cookie"];

      if (setCookie) {
        const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];
        for (const cookieStr of cookieArray) {
          const parsed = parse(cookieStr);
          const options = {
            expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
            path: parsed.Path,
            maxAge: Number(parsed["Max-Age"]),
          };
          if (parsed.accessToken)
            cookieStore.set("accessToken", parsed.accessToken, options);
          if (parsed.refreshToken)
            cookieStore.set("refreshToken", parsed.refreshToken, options);
          if (parsed.sessionId)
            cookieStore.set("sessionId", parsed.sessionId, options);
        }

        if (isPublicRoute) {
          return NextResponse.redirect(new URL("/", request.url), {
            headers: {
              Cookie: cookieStore.toString(),
            },
          });
        }

        if (isPrivateRoute) {
          return NextResponse.next({
            headers: {
              Cookie: cookieStore.toString(),
            },
          });
        }
      }
    }

    if (isPublicRoute) {
      return NextResponse.next();
    }

    if (isPrivateRoute) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isPrivateRoute) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/cart/:path*", "/login", "/register"],
};
// import { NextRequest, NextResponse } from "next/server";
// // import { parse } from "cookie";

// const privateRoutes = ["/cart"];
// const publicRoutes = ["/login", "/register"];

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   // Використовуємо request.cookies (це працює швидше в Middleware)
//   const accessToken = request.cookies.get("accessToken")?.value;
//   const refreshToken = request.cookies.get("refreshToken")?.value;

//   const isPublicRoute = publicRoutes.some((route) =>
//     pathname.startsWith(route),
//   );
//   const isPrivateRoute = privateRoutes.some((route) =>
//     pathname.startsWith(route),
//   );

//   // 1. Якщо токена немає, але є рефреш — пробуємо оновити
//   if (!accessToken && refreshToken) {
//     try {
//       // Тут важливо викликати саме зовнішній API, а не внутрішній Route Handler через fetch
//       // бо Middleware може заблокувати запит до самого себе
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/auth/session`,
//         {
//           method: "POST",
//           headers: { Cookie: `refreshToken=${refreshToken}` },
//         },
//       );

//       if (response.ok) {
//         const res = isPublicRoute
//           ? NextResponse.redirect(new URL("/", request.url))
//           : NextResponse.next();

//         // Переносимо куки з відповіді бекенду у відповідь фронтенду
//         const setCookie = response.headers.get("set-cookie");
//         if (setCookie) {
//           res.headers.set("set-cookie", setCookie);
//         }
//         return res;
//       }
//     } catch (error) {
//       console.error("Refresh error:", error);
//     }
//   }

//   // 2. Логіка редіректів
//   if (!accessToken) {
//     if (isPrivateRoute) {
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//     return NextResponse.next();
//   }

//   // 3. Якщо авторизований і йде на login/register
//   if (accessToken && isPublicRoute) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/cart/:path*", "/login", "/register"],
// };
