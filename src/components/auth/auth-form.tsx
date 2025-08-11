// components/auth/AuthForm.tsx
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
import { LoginData, SignupData, loginSchema, signupSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type FormType = "Login" | "Register";

// Union type for form values
type AuthFormData = LoginData | SignupData;

export type AuthFormProps = Readonly<{
  type: FormType;
  onSubmit: (value: AuthFormData) => void;
  isSubmitting?: boolean;
  submitError?: string;
}>;

export function AuthForm({
  type,
  onSubmit,
  isSubmitting: externalIsSubmitting,
  submitError,
}: AuthFormProps) {
  const isLogin = type === "Login";

  // Dynamically choose resolver and default values
  const form = useForm<AuthFormData>({
    resolver: zodResolver(isLogin ? loginSchema : signupSchema),
    defaultValues: {
      username: isLogin ? undefined : "",
      email: "admin@admin.com", // demo prefills
      password: "Admin345678.",
    },
  });

  const isLoading = externalIsSubmitting || form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <fieldset className="flex flex-col" disabled={isLoading}>
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
              {/* Username (Register only) */}
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
                          placeholder="johndoe"
                          autoComplete="username"
                          {...field}
                          value={field.value ?? ""}
                        />
                      </FormControl>
                      <FormDescription>
                        Will default to your email if left blank.
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
                        placeholder="name@example.com"
                        autoComplete="email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      We'll never share your email.
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
                        placeholder="••••••••"
                        autoComplete={
                          isLogin ? "current-password" : "new-password"
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {isLogin
                        ? "Enter your existing password."
                        : "Must be 8+ chars with uppercase, lowercase, number, and symbol."}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Server Error */}
              {submitError && (
                <p className="text-sm text-red-500 text-center mt-2">
                  {submitError}
                </p>
              )}
            </CardContent>

            <CardFooter className="flex flex-col gap-2">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Processing..." : type}
              </Button>
            </CardFooter>
          </Card>
        </fieldset>
      </form>
    </Form>
  );
}
