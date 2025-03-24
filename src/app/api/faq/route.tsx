// import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb'
// import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
// import { NextResponse } from 'next/server'

// interface FaqItem {
//   id: string
//   question: string
//   answer: string
//   header?: string
// }

// //Lambda function to get FaQ from a dynamoDB-table and render on FAQ-page

// const client = new DynamoDBClient({
//   region: process.env.AWS_REGION,
// })

// const dynamoDB = DynamoDBDocumentClient.from(client)

// export async function GET() {
//   const params = {
//     TableName: 'Faq-GR',
//   }

//   try {
//     const command = new ScanCommand(params)
//     const data = await dynamoDB.send(command)

//     //Uses header to sort question/answers into categorys, if no category present on item its label "Övrigt"

//     const grouped = (data.Items as FaqItem[])?.reduce(
//       (acc: Record<string, FaqItem[]>, item: FaqItem) => {
//         const key = item.header || 'Övrigt'
//         if (!acc[key]) acc[key] = []
//         acc[key].push(item)
//         return acc
//       },
//       {}
//     )

//     return NextResponse.json(grouped, {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//       },
//     })
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       return NextResponse.json({ error: error.message }, { status: 500 })
//     }

//     return NextResponse.json(
//       { error: 'Okänt fel inträffade.' },
//       { status: 500 }
//     )
//   }
// }
