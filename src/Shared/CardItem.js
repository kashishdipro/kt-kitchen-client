import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const CardItem = ({item}) => {
    const {image, name, description, price, _id} = item;
    return (
        <Card className="w-80 bg-neutral-100">
            <CardHeader className="relative h-56">
                <img
                src={image}
                alt="img-item"
                className="h-full w-full rounded-xl"
                />
            </CardHeader>
            <CardBody className="text-center px-4">
                <Typography variant="h5" className="text-neutral-600 text-2xl mb-2">
                {name}
                </Typography>
                <Typography className='text-neutral-400'>
                {
                    description.length > 100 ?
                    <>{description.slice(0, 100) + '...'}</>
                    :
                    <>{description}</>
                }
                </Typography>
            </CardBody>
            <CardFooter divider className="flex items-center justify-between px-4 py-3">
                <Typography className='text-neutral-600 text-2xl font-bold'>BDT {price}</Typography>
                <Link to={`/item/${_id}`}><Button size='sm' className='bg-red-700 hover:bg-red-900 text-neutral-400 p-2'>View Details</Button></Link>
            </CardFooter>
        </Card>
    );
};

export default CardItem;