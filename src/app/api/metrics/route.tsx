export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request: Request) {
    return new Response('Hello World!')
}
export async function POST(request: Request) {
    // get json body
    let body = await request.json()

    if (typeof body.timestamp !== 'number') {
        return new Response('Invalid body', {status: 400})
    }

    // put data in database
    /*await prisma.metric.create({
        data: {
            timestamp: body.timestamp
        }
    })*/


}