export default function Page({ params }: { params: { id: string } }) {
    return <div>Hello {params.id}</div>
  }