import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const resend = new Resend(RESEND_API_KEY);

serve(async (req) => {
  try {
    const { record } = await req.json();

    const coursesListHtml = record.courses_of_interest.map((course: string) => `<li>${course}</li>`).join('');

    const { data, error } = await resend.emails.send({
      from: "Orçamentos Site <onboarding@resend.dev>",
      to: ["empilhaplus@gmail.com"],
      subject: `Nova Solicitação de Orçamento: ${record.company_name}`,
      html: `
        <h1>Nova Solicitação de Orçamento Corporativo</h1>
        <ul>
          <li><strong>Empresa:</strong> ${record.company_name}</li>
          <li><strong>CNPJ:</strong> ${record.cnpj || 'Não informado'}</li>
          <li><strong>Contato:</strong> ${record.contact_name}</li>
          <li><strong>Email:</strong> ${record.email}</li>
          <li><strong>Telefone:</strong> ${record.phone || 'Não informado'}</li>
          <li><strong>Nº de Colaboradores:</strong> ${record.employees_count || 'Não informado'}</li>
        </ul>
        <hr>
        <h3>Cursos de Interesse:</h3>
        <ul>${coursesListHtml}</ul>
      `,
    });

    if (error) throw error;
    return new Response(JSON.stringify(data), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
});