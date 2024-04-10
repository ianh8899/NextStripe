"use client";

import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function LoginForm() {
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        setLoading(true);

        const randomEmail = `${Math.random().toString(36).substring(2,11)}@example.com`;
        const password = "Password69420";

        const { data, error } = await supabase.auth.signUp({
            email: randomEmail,
            password
        });

        if (error) {
            console.log(error);
        } else {
            console.log("User created and logged in", data);
        }

        setLoading(false);
    }


    return (
        <button className="btn btn-primary" onClick={handleSignUp} disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up with random email and password"}
        </button>
    )
}