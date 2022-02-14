import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://eeztsmdhjocxxaioalnk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlenRzbWRoam9jeHhhaW9hbG5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzMzEwNTEsImV4cCI6MTk1OTkwNzA1MX0.kAqG0L8cNGGaPArx58MLtqkx8S6DFpnd_n2PY-vF8rg'
const supabase = createClient(supabaseUrl, supabaseKey)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

export default function useSupabase () {
  return { supabase }
}
