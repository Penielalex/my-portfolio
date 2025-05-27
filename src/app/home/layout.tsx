
import { ThemedLayout } from "../../components/themed-layout";


export default async function Layout({ children }: React.PropsWithChildren<object>) {





  return (
    <ThemedLayout>
      {children}
    </ThemedLayout>
  );
}

