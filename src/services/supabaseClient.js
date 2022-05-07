import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function signInWithGoogle() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'google',
    }, {
      redirectTo:'https://telzir-fale-mais.vercel.app/app'
    })
  }

  export async function signInWithFacebook() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'facebook',
    },{
      redirectTo:'https://telzir-fale-mais.vercel.app/app'
    })
  }

  export async function logout(){
      const {error} = await supabase.auth.signOut()
  }
