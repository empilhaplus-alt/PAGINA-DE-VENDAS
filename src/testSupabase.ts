import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://mavsxyowcvvirqtvzbms.supabase.co"
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1hdnN4eW93Y3Z2aXJxdHZ6Ym1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5NTY1NjEsImV4cCI6MjA3NTUzMjU2MX0.TUP9-oPg_lpN3hvnxKuWfNqpwforV6CLUxHT4ZSRkhw'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testConnection() {
  const { data, error } = await supabase.from("courses").select("*")
  console.log("Cursos:", data)
  console.log("Erro:", error)
}

testConnection()
