export default function NotAvailable() {
  return (
    <div className="w-screen h-screen flex justify-center items-center px-5">
      <div className="bg-neutral-950 border border-neutral-800 px-6 py-4 rounded-xl">
        <h2 className="text-center mb-3">App in Development</h2>
        <p className="text-lg text-center mb-5">I&apos;m currently working on the app to make it awesome for you. Please check back later!</p>
        <p className="flex items-center gap-2">check out the process <a className="underline text-blue-400" href="https://twitter.com/aktaion_x"><code>#buildinpublic</code> on 𝕏</a></p>
      </div>
    </div>
  );
}
