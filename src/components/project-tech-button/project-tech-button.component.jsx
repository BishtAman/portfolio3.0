

export const  ProjectTechButton= ({tech}) => {
  return (
    <div className="inline-flex flex-wrap items-center gap-3 mt-8 mx-2  group">
      <span
        className="text-[15px]  cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 px-3 py-2 text-white  transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
        {tech}
      </span>
    </div>
  )
}
