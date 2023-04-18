import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lista de Compras',
  description: 'Gerencie suas compras',

}

function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`${inter.className} bg-background-base flex min-h-screen flex-col items-center justify-between p-10 text-text-main-base`}
    >
      {children}
    </main>
  );
}

export default AppLayout;
