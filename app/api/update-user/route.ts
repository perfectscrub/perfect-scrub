import { updateUserRoleByEmail } from "@/data/user";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const user = await updateUserRoleByEmail("abe@abecodes.com", UserRole.ADMIN);
    const { name, email, role, id, emailVerified } = user;
    return NextResponse.json(
      { name, email, role, id, emailVerified },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
