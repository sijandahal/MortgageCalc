export const Login = () => {
  return (
    <>
      <div class="bg-[#124E66] h-screen w-full flex justify-center items-center">
        <div class="bg-[#004a59]  w-full sm:w-1/2 md:w-9/12 lg:w-1/2 shadow-md flex flex-col md:flex-row items-center mx-5 sm:m-0 rounded">
          <div class="w-full md:w-1/2 hidden md:flex flex-col justify-center items-center text-white">
            <h1 class="text-3xl">Hello</h1>
            <p class="text-5xl font-extrabold">Welcome!</p>
          </div>
          <div class="bg-white w-full md:w-1/2 flex flex-col items-center py-32 px-8">
            <h3 class="text-3xl font-bold text-[#748D92] mb-4">LOGIN</h3>
            <form action="#" class="w-full flex flex-col justify-center">
              <div class="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-green-600"
                />
              </div>
              <div class="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  class="w-full p-3 rounded border placeholder-gray-400 focus:outline-none focus:border-green-600"
                />
              </div>
              <button class="bg-green-600 font-bold text-white focus:outline-none rounded p-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
