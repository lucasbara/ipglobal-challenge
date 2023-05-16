import { FallbackProps, useErrorBoundary } from "react-error-boundary";
import { Layout } from "@/layouts/Layout";
import { Button } from "@/components/Button";

export function Error({ error }: FallbackProps) {
  const { resetBoundary } = useErrorBoundary();

  return (
    <Layout>
      <section className="w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-[6rem] text-light-green font-bold">Oops!</h2>
        <p className="mb-8">Something went wrong</p>
        <Button onClick={resetBoundary} type="button" variant="primary">
          Please, try again...
        </Button>
      </section>
    </Layout>
  );
}
