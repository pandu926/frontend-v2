async function getUser() {
  const data = await fetch("http://localhost:3030/user", {
    cache: "no-store",
  });
  return data.json();
}

export default async function user() {
  const users = await getUser();

  return (
    <>
      <div>
        <h1 className=" mb-12 pl-12 mt-6 text-lg">Daftar Pengguna</h1>
        <table className="table w-full bg-white table-auto text-center ">
          <thead className="bg-grey-500 capitalize">
            <tr>
              <td>id</td>
              <td>nama mahasiswa</td>
              <td>nim</td>
              <td>semester</td>
              <td>action</td>
            </tr>
          </thead>
          <tbody className="capitalize">
            {users.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.nama}</td>
                <td>y</td>
                <td></td>
                <td>
                  <button className="rounded-none bg-red-600 pl-3 pr-3 mr-3 text-white">
                    Delete
                  </button>
                  <button className="rounded-none bg-blue-600 pl-3 pr-3 mr-3 text-white">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
