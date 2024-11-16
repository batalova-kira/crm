import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <>
      <Header>Companies {id}</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default Page;
