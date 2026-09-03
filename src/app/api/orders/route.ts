import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { orderSchema } from '@/lib/validators';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const validatedData = orderSchema.safeParse(body);
    if (!validatedData.success) {
      return NextResponse.json({ error: 'Invalid input', details: validatedData.error.flatten().fieldErrors }, { status: 400 });
    }

    const { variantId, emiPlanId, customerName, customerPhone } = validatedData.data;

    // Security check: Verify that the EMI plan exists and belongs to the variant
    const plan = await prisma.emiPlan.findFirst({
      where: {
        id: emiPlanId,
        variantId: variantId
      }
    });

    if (!plan) {
      return NextResponse.json({ error: 'Invalid plan or variant selection' }, { status: 400 });
    }

    const order = await prisma.order.create({
      data: {
        variantId,
        emiPlanId,
        customerName,
        customerPhone,
        status: 'initiated'
      }
    });

    return NextResponse.json({ 
      orderId: order.id, 
      status: order.status, 
      message: 'Your EMI application has started.' 
    }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
