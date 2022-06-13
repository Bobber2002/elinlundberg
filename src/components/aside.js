const Aside = ({cfp, children}) => {
  return ( 
    <aside className={`${cfp} h-[25vh] p-3 w-full flex flex-col align-center justify-center sm:h-full sm:w-1/2`}>
      <h2 className="text-center text-5xl">
        {children}
      </h2>
    </aside>
   );
}
 
export default Aside;
<aside>
  hello
</aside>