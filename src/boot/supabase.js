import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eeztsmdhjocxxaioalnk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlenRzbWRoam9jeHhhaW9hbG5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzMzEwNTEsImV4cCI6MTk1OTkwNzA1MX0.kAqG0L8cNGGaPArx58MLtqkx8S6DFpnd_n2PY-vF8rg'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supabase:', supabase)

export default function useSupabase () {
  return { supabase }
}
