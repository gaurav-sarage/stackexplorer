import React from "react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useMediaQuery from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type FeedbackFormProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const feedbackSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }).or(z.string().length(0)),
    feedback: z.string().min(1, { message: 'Feedback is required' }),
});

export default function Feedback() {
    const [open, setOpen] = React.useState(false);

    const { isMobile } = useMediaQuery();

    const description =
        'We value your feedback. Please share your thoughts or suggestions to help us improve.';

    if (isMobile) {
        return (
            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <Button variant="outline" size="sm">
                        Feedback
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="text-left">
                        <DrawerTitle>Feedback</DrawerTitle>
                        <DrawerDescription>{description}</DrawerDescription>
                    </DrawerHeader>
                    <FeedbackForm setOpen={setOpen} />
                    <DrawerFooter className="pt-2">
                        <DrawerClose asChild>
                            <Button variant="outline">
                                Cancel
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        );
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    Feedback
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Feedback</DialogTitle>
                    <DialogDescription>{description}``</DialogDescription>
                </DialogHeader>
                <FeedbackForm setOpen={setOpen} />
            </DialogContent>
        </Dialog>
    );
}

function FeedbackForm({ setOpen }: FeedbackFormProps) {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(feedbackSchema),
        defaultValues: {
            email: '',
            feedback: ''
        },
    });
    
    const onSubmit = async (values: any) => {
        try {
            await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            setOpen(false);
            toast.success('Feedback submitted succesfully!');
            console.log('Email sent successfully!');
        } catch (error) {
            console.error('Failed to send email: ', error);
        };
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn('grid items-start gap-4 px-4 sm:px-0')}
        >
            <div className="grid gap-2">
                <Label htmlFor="email">Your email</Label>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            type="email"
                            id="email"
                            placeholder="youremailaddress@example.com"
                        />
                    )}
                />
                {errors.email && typeof errors.email.message === 'string' && (
                    <p className="text-red-600">
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div className="grid gap-2">
                <Label htmlFor="feedback">
                    Your feedback <span className="text-red-600">*</span>
                </Label>
                <Controller
                    name="feedback"
                    control={control}
                    render={({ field }) => (
                        <textarea
                            {...field}
                            className="w-full h-32 text-sm border rounded-lg flex border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus:visible:ring-ring focus:visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your text here..."
                        />
                    )}
                />
                {errors.feedback && typeof errors.feedback.message === 'string' && (
                    <p className="text-red-600">
                        {errors.feedback.message}
                    </p>
                )}
            </div>
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending feedback...
                    </>
                ) : (
                    'Send feedback'
                )}
            </Button>
        </form>
    );
};

