import { products } from '@/data/products';
import ProductDetailClient from '@/components/ProductDetailClient';

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id.toString(),
    }));
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.find(p => p.id === Number(id));

    return <ProductDetailClient product={product} />;
}
