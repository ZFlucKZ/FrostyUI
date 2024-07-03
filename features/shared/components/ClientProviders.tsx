'use client';

interface ClientProvidersProps {
  children: React.ReactNode;
}

const ClientProviders = ({ children }: ClientProvidersProps) => {
  return <>{children}</>;
};

export default ClientProviders;
