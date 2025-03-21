import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { NextResponse } from 'next/server'

interface FaqItem {
  id: string
  question: string
  answer: string
  header?: string
}
const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
})
const dynamoDB = DynamoDBDocumentClient.from(client)

export async function GET() {
  const params = {
    TableName: 'Faq-GR',
  }

  try {
    const command = new ScanCommand(params)
    const data = await dynamoDB.send(command)

    const grouped = (data.Items as FaqItem[])?.reduce(
      (acc: Record<string, FaqItem[]>, item: FaqItem) => {
        const key = item.header || 'Övrigt'
        if (!acc[key]) acc[key] = []
        acc[key].push(item)
        return acc
      },
      {}
    )

    return NextResponse.json(grouped, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json(
      { error: 'Okänt fel inträffade.' },
      { status: 500 }
    )
  }
}
