import React from 'react';
import { Box, Truck, ShoppingCart } from 'lucide-react'; // Importing icons from lucide-react

export default function GoodsWeShipSection() {
    return (
        <section className="bg-gray-50 py-20 px-6 lg:px-24">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-[#871C10] mb-6">
                    The Types of Goods We Ship
                </h2>
                <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
                    We specialize in transporting a wide variety of goods across different industries. Whether it’s perishable items, heavy machinery, or retail products, our fleet is ready to move them securely and efficiently.
                </p>

                <div className="flex flex-col lg:flex-row gap-12">


                    {/* Right Content Section */}
                    <div className="lg:w-1/2 flex-col justify-center">
                        <div className="flex flex-col md:grid-cols-3 gap-12">
                            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg">
                                <Box size={80} className="text-[#871C10] mb-4" />
                                <h3 className="text-2xl font-semibold text-[#871C10] mb-4">Perishable Goods</h3>
                                <p className="text-gray-700">
                                    From fresh produce to frozen goods, we ensure your perishable items are transported at the right temperature to keep them safe and fresh.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg">
                                <Truck size={80} className="text-[#871C10] mb-4" />
                                <h3 className="text-2xl font-semibold text-[#871C10] mb-4">Heavy Machinery</h3>
                                <p className="text-gray-700">
                                    Our fleet includes vehicles designed to transport heavy and oversized machinery with precision and care. We handle everything from construction equipment to industrial tools.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-lg">
                                <ShoppingCart size={80} className="text-[#871C10] mb-4" />
                                <h3 className="text-2xl font-semibold text-[#871C10] mb-4">Retail Products</h3>
                                <p className="text-gray-700">
                                    We provide fast, reliable transport for retail products. Whether it’s electronics, clothing, or furniture, we get your goods to the market on time and in perfect condition.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Left Image Section */}
                    <div className="lg:w-1/2">
                        <img
                            src="/truck.jpg" // Replace with your own image
                            alt="Types of Goods"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
