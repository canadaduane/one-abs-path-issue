import { booleanSchema } from '~/code/parse/boolean-schema'

export async function POST(request: Request) {
  const json = await request.json()

  const parsed = booleanSchema.parse(json.value)

  return new Response(JSON.stringify(parsed.boolean), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
