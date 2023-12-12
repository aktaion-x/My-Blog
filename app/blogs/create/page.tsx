const inputStyle = 'border-b border-b-neutral-600 bg-transparent pl-2 border-transparent focus:border-t-transparent focus:border-l-transparent focus:border-r-transparent focus:border-b-neutral-400 transition-colors caret-red-50 focus:ring-transparent';

export default function Page() {

  return (
    <div className="main-box px-10 py-8 rounded-xl">
      <form className="flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="mb-5">Create a Blog</h2>
          <button className="px-3 py-2 border-2 rounded-lg bg-neutral-200 text-neutral-800 hover:bg-neutral-900 hover:text-neutral-200 transition-colors" type="submit">Create</button>
        </div>
        <input className={inputStyle} type="text" placeholder="Blog Title" autoFocus />
        <input className={inputStyle} type="text" placeholder="Blog Subtitle" />
        <label className="relative py-2 cursor-pointer">
          <p className="cursor-pointer transition-colors text-neutral-500 w-full hover:text-neutral-200 pl-2">Blog Cover</p>
          <input className="left-0 p-0 absolute top-0 hidden w-full" type="file" />
        </label>
        <textarea className={inputStyle} rows={10} placeholder="Blog Body"></textarea>
      </form>
    </div>
  );
}
