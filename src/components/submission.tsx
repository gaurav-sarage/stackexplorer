import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useMediaQuery from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type SubmitFormProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const submissionSchema = z.object({
  category: z.string().min(1, { message: 'Category is required' }),
  url: z
    .string()
    .url({ message: 'Invalid URL' })
    .min(1, { message: 'URL is required' }),
});

export default function Submit() {
  const [open, setOpen] = React.useState(false);

  const { isMobile } = useMediaQuery();

  const description =
    'Are we missing a tech stack? Submit the url to the technology here to help us enhance our directory.';

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button size="sm">Submit</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Submit</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          <SubmitForm setOpen={setOpen} />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Submit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Submit</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <SubmitForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}

function SubmitForm({ setOpen }: SubmitFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(submissionSchema),
    defaultValues: {
      category: '',
      url: '',
    },
  });

  const onSubmit = async (values: any) => {
    try {
      // Send email using Nodemailer
      await fetch('/api/submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      setOpen(false);
      toast.success('Submit submitted successfully!');
      // Show success message or redirect to a thank you page
      console.log('Email sent successfully!');
    } catch (error) {
      // Handle error
      console.error('Failed to send email:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('grid items-start gap-4 px-4 sm:px-0')}
    >
      {/* Category Field */}
      <div className="grid gap-2">
        <Label htmlFor="category">
          Category <span className="text-red-600">*</span>
        </Label>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" id="category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="web">Web Development</SelectItem>
                <SelectItem value="mobile">Mobile Development</SelectItem>
                <SelectItem value="crossplatform">
                  Cross Platform Development
                </SelectItem>
                <SelectItem value="desktop">Desktop Development</SelectItem>
                <SelectItem value="game">Game Development</SelectItem>
                <SelectItem value="aiml">AI & ML Development</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.category && (
          <p className="text-red-600">{errors.category.message}</p>
        )}
      </div>
      {/* URL Field */}
      <div className="grid gap-2">
        <Label htmlFor="url">
          URL <span className="text-red-600">*</span>
        </Label>
        <Controller
          name="url"
          control={control}
          render={({ field }) => (
            <Input {...field} type="url" id="url" placeholder="Enter the URL" />
          )}
        />
        {errors.url && <p className="text-red-600">{errors.url.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit'
        )}
      </Button>
    </form>
  );
}
