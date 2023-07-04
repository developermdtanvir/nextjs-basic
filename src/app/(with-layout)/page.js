import tiketDataLoad from "@/utils/tiketDataLoad";
import Image from "next/image";

export default async function Home() {

  const data = await tiketDataLoad();

  console.log(data);

  return (
    <main className="flex  flex-col items-center justify-between p-24 bg-image">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {
          data.map(item => <div className="card shadow-xl image-full">
            <figure><Image src={item.img} alt="" width={300} height={100} /></figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <button className="btn btn-primary mt-10">Buy Now</button>
              <p></p>
              <div className="   justify-end">
                <h1 className=" text-4xl font-bold">{item.price}</h1>
              </div>
            </div>
          </div>)
        }
      </div>
    </main>
  )
}
