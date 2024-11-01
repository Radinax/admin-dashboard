import { Link } from "@/components/link/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserCredentials, formSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export type Props = Readonly<{
  // type: FormType;
  onSubmit: (value: UserCredentials) => void;
}>;

export function RegisterForm({ onSubmit }: Props) {
  const form = useForm<UserCredentials>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset className="flex flex-col justify-center items-center" disabled={form.formState.isSubmitting}>
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Register</CardTitle>
              <CardDescription>Enter your userna,e email and password to Register</CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="enter your username" {...field} />
                    </FormControl>
                    <FormDescription>Your username will be your email if you dont input anything.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="enter your email" {...field} />
                    </FormControl>
                    <FormDescription>We wont share your email with anybody.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="enter your password" {...field} />
                    </FormControl>
                    <FormDescription>Try to make it as secure as possible.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </CardFooter>
          </Card>
          <div></div>
          <Link className="underline text-xs" to="/login">
            If you have an account then click to login
          </Link>
        </fieldset>
      </form>
    </Form>
  );
}
