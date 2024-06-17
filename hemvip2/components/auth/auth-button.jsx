import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { signOut } from "./actions";

export default async function AuthButton() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user ? (
        <div className="flex items-center gap-4">
            <span className="text-sm font-medium subpixel-antialiased contrast-more:text-gray-700 contrast-more:dark:text-gray-100" aria-current="true">
                Hi, {user.email}</span>
            <form action={signOut}>
                <button className="text-sm p-2 contrast-more:text-gray-700 contrast-more:dark:text-gray-100 max-md:hidden whitespace-nowrap font-medium subpixel-antialiased  hover:underline" aria-current="true">
                    Logout
                </button>
            </form>
        </div>
    ) : (
        <Link
            href="/login"
            className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
        >
            Login
        </Link>
    );
}
