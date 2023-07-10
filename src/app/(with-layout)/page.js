import getAllCategory from "@/utils/getAllCategory";

export default async function Home() {

  const allData = await getAllCategory()

  console.log(allData);
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <h1>Hello World </h1>
    </main>
  )
}
