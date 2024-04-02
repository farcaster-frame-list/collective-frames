import { put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import { slugify } from "@/utils";
import { db, frame } from "@/db";

export async function POST(request: NextRequest) {
  try {
    console.log(request.body, 'what is body request??')
    const form = await request.formData();

    console.log('Form data:', form)

    const data = {
      name: (form.get("name") as string) || "",
      description: (form.get("description") as string) || "",
      // tokenAddress: (form.get("tokenAddress") as string) || "",
      imageFile: form.get("imageFile"),
    };

    const { name, description, } = data;



    console.log(data.imageFile, 'data img file?')
    const slug = slugify(data.name);
    const fileName = uuid();
    //1 create a vercel blob
    const blob = await put(fileName, data.imageFile!, {
      access: "public",
    });
    //2 upload the nft metadata to vercel
    const { url: metaDataUrl } = await put('nft_metadata', JSON.stringify({ name, description }), { access: 'public' },);


    console.log(blob, 'here is the blob and coming here')



    const newFrame = await db
      .insert(frame)
      .values({
        name,
        slug,
        imageUrl: blob.url,
        description,
        collectiveId: 1,
        metaDataUrl,
        tokenAddress: "some tokn address",
        createdBy: 3 //TODO add get userId from db by selecting walletAddress/fid that is signed in with Neynar
      })
      .returning();
    // TODO: integrate nft creation or put in a queue
    return NextResponse.json(newFrame[0]);
  }
  catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  // TODO: add filter by user if it's auth or have two routes to list global frames created or filter by user
  const res = await db.select().from(frame);
  return Response.json(res);
}