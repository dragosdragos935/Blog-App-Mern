
import {writeFile} from 'fs/promises';
import { ConnectDB } from "@/lib/config/db";
const { NextResponse } = require("next/server");

const LoadDB = async () =>{
    await ConnectDB();
}

LoadDB();


export async function GET(request) {
    console.log("Blog GET Hit");
    
    return NextResponse.json({msg:"API Working"})
    
}


export async function POST(request) {

    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get('image');
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await writeFile(path,buffer);
    const imgUrl = '/${timestamp}_${image.name}';
    console.log(imgUrl);
    return NextResponse.json({imgUrl})
    
}