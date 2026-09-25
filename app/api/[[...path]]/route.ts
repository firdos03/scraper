import { MongoClient, Db } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'
import { NextRequest, NextResponse } from 'next/server'

let client: MongoClient | undefined
let db: Db | undefined

async function connectToMongo(): Promise<Db> {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL as string)
    await client.connect()
    db = client.db(process.env.DB_NAME)
  }
  return db as Db
}

function handleCORS(response: NextResponse): NextResponse {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

export async function OPTIONS() {
  return handleCORS(new NextResponse(null, { status: 200 }))
}

async function handleRoute(request: NextRequest, { params }: { params: Promise<{ path?: string[] }> }) {
  const { path = [] } = await params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    const db = await connectToMongo()

    if ((route === '/' || route === '/root') && method === 'GET') {
      return handleCORS(NextResponse.json({ message: 'AB Traders API is running' }))
    }

    // Create a scrap pickup request
    if (route === '/pickup-requests' && method === 'POST') {
      const body = await request.json()

      if (!body.name || !body.phone) {
        return handleCORS(NextResponse.json(
          { error: 'name and phone are required' },
          { status: 400 }
        ))
      }

      const pickupRequest = {
        id: uuidv4(),
        name: String(body.name),
        phone: String(body.phone),
        scrapType: body.scrapType || '',
        quantity: body.quantity || '',
        area: body.area || '',
        pickupDate: body.pickupDate || '',
        message: body.message || '',
        status: 'new',
        createdAt: new Date(),
      }

      await db.collection('pickup_requests').insertOne(pickupRequest)
      const { _id, ...clean } = pickupRequest as any
      return handleCORS(NextResponse.json({ success: true, request: clean }))
    }

    // List pickup requests (admin/testing)
    if (route === '/pickup-requests' && method === 'GET') {
      const requests = await db.collection('pickup_requests')
        .find({})
        .sort({ createdAt: -1 })
        .limit(1000)
        .toArray()
      const cleaned = requests.map(({ _id, ...rest }) => rest)
      return handleCORS(NextResponse.json(cleaned))
    }

    // Newsletter subscribe
    if (route === '/subscribe' && method === 'POST') {
      const body = await request.json()
      if (!body.email) {
        return handleCORS(NextResponse.json({ error: 'email is required' }, { status: 400 }))
      }
      const sub = { id: uuidv4(), email: String(body.email), createdAt: new Date() }
      await db.collection('subscribers').insertOne(sub)
      const { _id, ...clean } = sub as any
      return handleCORS(NextResponse.json({ success: true, subscriber: clean }))
    }

    return handleCORS(NextResponse.json(
      { error: `Route ${route} not found` },
      { status: 404 }
    ))
  } catch (error) {
    console.error('API Error:', error)
    return handleCORS(NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    ))
  }
}

export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute
