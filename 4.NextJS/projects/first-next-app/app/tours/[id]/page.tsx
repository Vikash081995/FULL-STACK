function page({ params }: { params: { id: string } }) {
  return <div>Tour {params.id}</div>;
}

export default page;
