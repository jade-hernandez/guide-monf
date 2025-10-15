import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { content } from "@/config/content";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Erreur 404 : L’utilisateur a tenté d’accéder à une route inexistante:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{content.notFound.title}</h1>
        <p className="mb-4 text-xl text-gray-600">
          {content.notFound.subtitle}
        </p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          {content.notFound.cta}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
