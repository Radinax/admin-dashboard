import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserCredentials, formSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type FormType = "Register" | "Login";

export type Props = Readonly<{
  type: FormType;
  onSubmit: (value: UserCredentials) => void;
}>;

export function AuthForm({ onSubmit, type }: Props) {
  const form = useForm<UserCredentials>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: type === "Login" ? undefined : "",
      email: type === "Login" ? "admin@admin.com" : "",
      password: type === "Login" ? "Admin345678." : "",
    },
  });

  const isLogin = type === "Login";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset
          className="flex flex-col justify-center items-center"
          disabled={form.formState.isSubmitting}
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">{type}</CardTitle>
              <CardDescription>
                {isLogin
                  ? "Enter your email and password to log in."
                  : "Enter your username, email, and password to register."}
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-4">
              {/* Username Field (Only for Register) */}
              {!isLogin && (
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your username"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Your username will default to your email if left blank.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      We won't share your email with anyone.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Use a strong, unique password.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>

            <CardFooter className="flex flex-col">
              {/* Submit Button */}
              <Button type="submit" className="w-full">
                {type}
              </Button>
            </CardFooter>
          </Card>
        </fieldset>
      </form>
    </Form>
  );
}
