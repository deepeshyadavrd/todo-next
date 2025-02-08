import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export function createClient() {
  return createServerComponentClient({ cookies });
}

/***
 * import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() { // ✅ Make the function async
  const cookieStore = await cookies(); // ✅ Await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value; // ✅ Works correctly
        },
        set(name: string, value: string, options: CookieOptions) {
          console.warn("Cannot set cookies from a server component. Use middleware.");
        },
        remove(name: string, options: CookieOptions) {
          console.warn("Cannot remove cookies from a server component. Use middleware.");
        },
      },
    },
  );
}

 */