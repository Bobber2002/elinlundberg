const Section = ( {cfp, children, ifp} ) => {
  return ( 
    <section id={ifp} className={`section w-full sm:h-[100vh] ${cfp} flex flex-col`}>
        {children}
    </section>
   );
}
 
export default Section;