import React from "react";

interface DashboardAuthLayoutProps {
  children: React.ReactNode;
  type: "login" | "register";
}

const DashboardAuthLayout: React.FC<DashboardAuthLayoutProps> = ({
  children,
  type,
}) => {
  // Dynamic content based on the type
  const pageConfig = {
    login: {
      title: "Welcome Back",
      description: "Sign in to manage your products",
      footerText: "Don't have an account?",
      footerLinkText: "Create one",
      footerLinkHref: "/register",
    },
    register: {
      title: "Create Your Account",
      description: "Sign up to get started with product management",
      footerText: "Already have an account?",
      footerLinkText: "Sign in",
      footerLinkHref: "/login",
    },
  };

  const { title, description, footerText, footerLinkText, footerLinkHref } =
    pageConfig[type];

  return (
    <div className="flex w-full h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="flex flex-col items-center gap-8 p-10 bg-white rounded-xl shadow-2xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>

        {/* Form or Children Content */}
        <div className="w-full max-w-md space-y-6">{children}</div>

        {/* Footer Links */}
        <div className="text-center text-gray-600">
          <p>
            {footerText}{" "}
            <a
              href={footerLinkHref}
              className="text-blue-500 hover:underline font-medium"
            >
              {footerLinkText}
            </a>
          </p>
          {type === "login" && (
            <p className="mt-2">
              <a
                href="/forgot-password"
                className="text-blue-500 hover:underline font-medium"
              >
                Forgot your password?
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardAuthLayout;
