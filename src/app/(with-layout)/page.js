import getAllCategory from "@/utils/getAllCategory";

export default async function Home() {

  const allData = await getAllCategory()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value
    const password = e.target.password.value
    const userInfo = {
      email,
      password
    }

    console.log(userInfo);

    fetch('/api/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    }).then(response => response.json())
      .then(data => console.log(data))

  }

  return (
    <main className="flex h-screen  flex-col items-center justify-between p-24">
      <h1>Graphql is running</h1>
    </main>
  )
}
