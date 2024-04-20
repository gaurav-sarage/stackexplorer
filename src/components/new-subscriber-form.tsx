"use client";

import React from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const newSubscriberSchema = z.object({
    email: z.string().email({ message: 'Invalid email' }).min(1, { message: 'Email is required' }),
});

export default function NewSubscriberForm() {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(newSubscriberSchema),
        defaultValues: {
            email: '',
        },
    });
    
    const onSubmit = async (values: any) => {
        try {
            await fetch('/api/subscriber', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            toast.success('Subscribed successfully!!');
            reset();
            console.log('Email sent successfully!');
        } catch (error) {
            console.error('Failed to send email: ', error);
        }
    };

    return (
        <div className="flex flex-col space-y-2">
            <span className="font-medium text-sm">
                Subscribe to out newsletter
            </span>
            <span className="text-neutral-600 text-sm font-light">
                Stay updated on new additions & features!
            </span>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-row space-x-2"
            >
                <div className="grid gap-2 w-full">
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <Input
                                {...field}
                                type="email"
                                id="email"
                                placeholder="youremail@example.com"
                                className="h-9"
                            />
                        )}
                    />
                    {errors.email && (
                        <p className="text-red-600">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <Button size="sm" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <div className="flex flex-row space-x-2 items-center">
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            <span>
                                Subscribing...
                            </span>
                        </div>
                    ) : (
                        <div className="flex flex-row space-x-2 items-center">
                            <span>
                                Subscribe
                            </span>
                        </div>
                    )}
                </Button>
            </form>
        </div>
    );
};