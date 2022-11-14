import { Input, Textarea, Typography } from '@material-tailwind/react';
import React from 'react';
import toast from 'react-hot-toast';

const AddItem = () => {
    const handleAddItem = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const ingredients = form.ingredients.value.split(",");
        const category = form.category.value;
        const image = form.image.value;

        const addItem = {
            name,
            description,
            price,
            ingredients,
            category,
            image
        }

        fetch('http://localhost:5000/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addItem)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                form.reset();
                toast.success('Food item added successfully')
            }
        })
        .catch(error => console.error(error))
    }
    return (
        <section className="block md:mx-5 md:my-5 mx-1 my-4 p-6 rounded-lg shadow-lg bg-neutral-100 md:max-w-full">
            <Typography variant="h2" className="text-red-700 md:text-5xl text-3xl text-center font-bold">Add Food Item</Typography>
            <form onSubmit={handleAddItem}>
                <div className='grid gap-4'>
                    <div className="w-full">
                        <label className="font-semibold text-neutral-600 m-auto">Item Name</label>
                        <input type="text" name="name" className="block p-2 w-full font-lg text-neutral-600 bg-neutral-50 rounded-lg border border-red-700 focus:ring-red-900 focus:border-red-900" placeholder="Item Name (Ex. Spicy Dry Chicken)" required />
                    </div>
                    <div className="w-full">
                        <label className="font-semibold text-neutral-600">Item Description</label>
                        <Textarea name='description' className="block p-2 w-full font-lg text-neutral-600 bg-neutral-50 rounded-lg border border-red-700 focus:ring-red-900 focus:border-red-900" placeholder="Item Description" required />
                    </div>
                    <div className="w-full">
                        <label className="font-semibold text-neutral-600">Item Price</label>
                        <input type="text" name="price" className="block p-2 w-full font-lg text-neutral-600 bg-neutral-50 rounded-lg border border-red-700 focus:ring-red-900 focus:border-red-900" placeholder="Item Price" required />
                    </div>
                    <div className="w-full">
                        <label className="font-semibold text-neutral-600">Item Ingredients</label>
                        <Textarea name='ingredients' className="block p-2 w-full font-lg text-neutral-600 bg-neutral-50 rounded-lg border border-red-700 focus:ring-red-900 focus:border-red-900" placeholder="Ingredients (Ex. Chicken 100 grams, 1/2 cup mustard oil)" required />
                    </div>
                    <div className="w-full">
                        <label className="font-semibold text-neutral-600">Item Category</label>
                        <input type="text" name="category" className="block p-2 w-full font-lg text-neutral-600 bg-neutral-50 rounded-lg border border-red-700 focus:ring-red-900 focus:border-red-900" placeholder="Item Category (Ex. Bangladeshi)" required />
                    </div>
                    <div className="w-full">
                        <label className="font-semibold text-neutral-600">Item Image</label>
                        <input type="text" name="image" className="block p-2 w-full font-lg text-neutral-600 bg-neutral-50 rounded-lg border border-red-700 focus:ring-red-900 focus:border-red-900" placeholder="Item Image Link" required />
                    </div>
                    <button type='submit' className='text-neutral-200 rounded-lg p-2 bg-red-700 hover:bg-red-900'>Submit</button>
                </div>
            </form>
            
        </section>
    );
};

export default AddItem;