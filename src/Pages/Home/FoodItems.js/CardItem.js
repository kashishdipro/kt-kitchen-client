import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

const CardItem = ({item}) => {
    const {image, name, description, price} = item;
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
                <Typography variant="h5" className="text-neutral-600 mb-2">
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
                <Typography className='text-neutral-600 font-bold'>BDT {price}</Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                Barcelona, Spain
                </Typography>
            </CardFooter>
        </Card>
    );
};

export default CardItem;