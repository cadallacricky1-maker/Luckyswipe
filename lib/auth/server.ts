// SSR auth helper functions

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '../lib/database.types';

// Function to get Supabase server client
export const getSupabaseServerClient = (req, res) => {
    return createServerSupabaseClient<Database>({ req, res });
};

// Function to get the current user
export const getCurrentUser = async (req, res) => {
    const supabase = getSupabaseServerClient(req, res);
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw new Error(error.message);
    return user;
};
