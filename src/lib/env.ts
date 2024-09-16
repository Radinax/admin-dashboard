import * as z from "zod";

// Define the environment schema using Zod
const EnvSchema = z.object({
  API_URL: z.string(),
  ENABLE_API_MOCKING: z
    .string()
    .refine((value) => value === "true" || value === "false")
    .transform((value) => value === "true")
    .optional(),
  APP_URL: z.string().optional().default("http://localhost:5173"),
  APP_MOCK_API_PORT: z.string().optional().default("8080"),
});

type EnvVars = Record<string, string | undefined>;

// Function to create and validate environment variables
const createEnv = () => {
  // Extract and filter environment variables
  const envVars: EnvVars = Object.entries(import.meta.env)
    .filter(([key]) => key.startsWith("VITE_APP_"))
    .reduce<EnvVars>((acc, [key, value]) => {
      // Remove the "VITE_APP_" prefix and assign the value
      acc[key.replace("VITE_APP_", "")] = value as string;
      return acc;
    }, {});

  // Validate the environment variables against the schema
  const parsedEnv = EnvSchema.safeParse(envVars);

  // Handle validation errors
  if (!parsedEnv.success) {
    const errors = parsedEnv.error.flatten().fieldErrors;
    const errorMessages = Object.entries(errors)
      .map(([key, messages]) => `- ${key}: ${messages.join(", ")}`)
      .join("\n");

    throw new Error(`Invalid environment variables provided:\n${errorMessages}`);
  }

  return parsedEnv.data;
};

// Export the validated environment variables
export const env = createEnv();
