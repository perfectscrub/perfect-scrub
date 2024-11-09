import { deleteUserByEmail } from "@/data/user";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await deleteUserByEmail("abe@abecodes.com");
    return NextResponse.json(
      { message:"User deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
