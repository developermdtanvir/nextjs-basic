import db from '@/db.json';
import { NextResponse } from 'next/server';

export async function GET(req, res) {

    const { searchParams } = new URL(req.url);

    const id = searchParams.get('id');


    let products = db.products

    console.log(id, 'search params');

    if (id) {
        products = products.filter(pd => pd.id === +id);
        console.log(products)
    }


    return NextResponse.json(products)
}

export async function POST(req, res) {
    console.log('POST', req.body);
}
